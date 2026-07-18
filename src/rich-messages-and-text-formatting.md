---
title: Rich Messages and Text Formatting
parent: /#walkthrough
prev: /inline-queries
---

MTKruto supports both rich messages and formatted text messages. Rich messages contain structured page content such as headings, paragraphs, lists, tables, and media. Regular messages and media captions remain strings, with formatting described by message entities.

## Rich Messages

Send a rich message with {{ "sendRichText" |> m }} and an {{ "InputRichText" |> t }}. The input can be expressed in three ways:

- `blocks` provides the page structure and nested text components directly.
- `html` lets bots provide the page as HTML.
- `markdown` lets bots provide the page as Markdown.

Choose blocks when the content is assembled programmatically or when you want the TypeScript type system to check its structure. HTML and Markdown are convenient when the content already exists as markup.

### Page Blocks

The `blocks` variant accepts an array of {{ "InputPageBlock" |> t }} objects. Text inside a block is represented by nested {{ "RichTextComponent" |> t }} objects, so inline styles do not rely on offsets or escaped markup.

```ts
await client.sendRichText(chatId, {
  type: "blocks",
  blocks: [
    {
      type: "heading1",
      text: { type: "plain", text: "Release notes" },
    },
    {
      type: "paragraph",
      text: {
        type: "concatenate",
        components: [
          { type: "plain", text: "Version " },
          {
            type: "bold",
            text: { type: "plain", text: "1.0" },
          },
          { type: "plain", text: " is ready." },
        ],
      },
    },
    {
      type: "list",
      items: [
        {
          type: "text",
          isCheckbox: true,
          isChecked: true,
          text: { type: "plain", text: "Faster startup" },
        },
        {
          type: "text",
          isCheckbox: true,
          isChecked: false,
          text: { type: "plain", text: "New themes" },
        },
      ],
    },
  ],
});
```

Blocks can also contain media directly. MTKruto accepts any supported {{ "FileSource" |> t }} and uploads it as part of the rich message.

```ts
await client.sendRichText(chatId, {
  type: "blocks",
  blocks: [
    {
      type: "photo",
      photo: "./release-banner.jpg",
      caption: {
        text: { type: "plain", text: "Version 1.0" },
        credit: { type: "empty" },
      },
    },
  ],
});
```

### HTML

The `html` variant sends an HTML document for Telegram to turn into page blocks. It is available to bots.

```ts
await client.sendRichText(chatId, {
  type: "html",
  html: `
    <h1>Release notes</h1>
    <p>Version <b>1.0</b> is ready.</p>
    <ul>
      <li>Faster startup</li>
      <li>New themes</li>
    </ul>
  `,
});
```

This is separate from the `"HTML"` parse mode used by regular text messages: no `parseMode` option is involved.

### Markdown

The `markdown` variant does the same with a Markdown document. It is also available to bots.

```ts
await client.sendRichText(chatId, {
  type: "markdown",
  markdown: `
# Release notes

Version **1.0** is ready.

- Faster startup
- New themes
  `,
});
```

HTML and Markdown inputs can include a `media` array of {{ "InputRichTextMedia" |> t }} objects. Each item associates an identifier used in the markup with a photo, video, animation, audio, or voice message input.

```ts
await client.sendRichText(chatId, {
  type: "markdown",
  markdown,
  media: [
    {
      id: "release-banner",
      media: {
        type: "photo",
        photo: "./release-banner.jpg",
      },
    },
  ],
});
```

All three variants accept `isRtl`. They also accept `isAutomaticLinkDetectionDisabled` when URLs, email addresses, and similar text should not automatically become interactive blocks.

## Formatting Regular Messages

Messages and media captions can contain bold text, links, spoilers, code, and other inline formatting. This formatting is represented by {{ "MessageEntity" |> t }} objects. MTKruto can create the entities by parsing HTML or Markdown, or you can provide them directly.

### HTML and Markdown

Set `parseMode` on a method call when its text contains supported markup.

```ts
await client.sendMessage(
  chatId,
  'Hello, <b>world</b>! Visit <a href="https://mtkru.to">MTKruto</a>.',
  { parseMode: "HTML" },
);

await ctx.reply(
  "Hello, *world*\\! Visit [MTKruto](https://mtkru.to)\\.",
  { parseMode: "Markdown" },
);
```

Characters with special meaning must be escaped when they should appear literally. Escape or otherwise sanitize user-provided text before inserting it into markup.

A default parse mode can be configured on the client and overridden per call. Pass `null` to keep the text unchanged.

```ts
const client = new Client({
  parseMode: "HTML",
  /* ... */
});

await client.sendMessage(chatId, "<b>This remains unchanged.</b>", {
  parseMode: null,
});
```

### Explicit Entities

Pass entities directly when the text is assembled programmatically. Entity offsets and lengths use UTF-16 code units, which is how JavaScript measures string length.

```ts
const text = "Important message";

await client.sendMessage(chatId, text, {
  parseMode: null,
  entities: [
    {
      type: "bold",
      offset: 0,
      length: "Important".length,
    },
  ],
});
```

## Entity and Block Builders

The [@mtkruto/fmt](https://jsr.io/@mtkruto/fmt) package provides chainable builders for message entities and rich-message blocks. It is useful when content is assembled dynamically and you do not want to maintain entity offsets or deeply nested objects by hand.

{{ "jsr:@mtkruto/fmt" |> install }}

Build regular message text and its entities together with the `entities` export:

```ts
import { text } from "@mtkruto/fmt/entities";

const formatted = text("Hello, ")
  .bold("world")
  .text("! Visit ")
  .link("MTKruto", "https://mtkru.to")
  .text(".");

await client.sendMessage(chatId, formatted.rawText, {
  entities: formatted.toArray(),
});
```

Build page blocks and nested rich-text components with the `rich` export:

```ts
import { bold, heading1 } from "@mtkruto/fmt/rich";

const blocks = heading1("Release notes")
  .paragraph(["Version ", bold("1.0"), " is ready."]);

await client.sendRichText(chatId, {
  type: "blocks",
  blocks: blocks.toArray(),
});
```

The package also provides builders for secret-chat entities through its `secret-entities` export.
