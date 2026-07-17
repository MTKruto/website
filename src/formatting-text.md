---
title: Formatting Text
parent: /#walkthrough
prev: /inline-queries
---

Messages and media captions can contain formatting such as bold text, links, spoilers, and code. MTKruto can parse HTML or Markdown into Telegram message entities.

## HTML

Set `parseMode` to `"HTML"` for a message that contains supported HTML tags.

```ts
await client.sendMessage(
  chatId,
  'Hello, <b>world</b>! Visit <a href="https://mtkru.to">MTKruto</a>.',
  { parseMode: "HTML" },
);
```

Common supported tags include `<b>`, `<i>`, `<u>`, `<s>`, `<code>`, `<pre>`, `<blockquote>`, and `<a>`.

## Markdown

Set `parseMode` to `"Markdown"` to use Markdown formatting.

```ts
await ctx.reply(
  "Hello, *world*\\! Visit [MTKruto](https://mtkru.to)\\.",
  { parseMode: "Markdown" },
);
```

Characters with special meaning must be escaped when they should appear literally. Be especially careful when inserting user-provided text into HTML or Markdown.

## Default Parse Mode

A default parse mode can be configured when constructing the client. It is then used whenever a method does not specify one.

```ts
const client = new Client({
  parseMode: "HTML",
  /* ... */
});
```

Override the default for a single message by passing another parse mode, or pass `null` to disable parsing.

```ts
await client.sendMessage(chatId, "<b>This remains unchanged.</b>", {
  parseMode: null,
});
```

## Explicit Entities

You can provide {{ "MessageEntity" |> t }} objects instead of using markup. Entity offsets and lengths use UTF-16 code units, which is how JavaScript measures string length.

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

Explicit entities are useful when text is assembled dynamically because formatting does not depend on escaping markup characters.
