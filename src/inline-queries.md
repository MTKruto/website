---
title: Inline Queries
parent: /#walkthrough
walkthrough:
  track: bot
  order: 7
---

Inline mode lets users interact with a bot from any chat by typing its username followed by a query. It must first be enabled for the bot through [@BotFather](https://t.me/BotFather).

## Answering Inline Queries

Handle the `inlineQuery` update and answer it with a list of {{ "InlineQueryResult" |> t }} objects.

```ts
client.on("inlineQuery", async (ctx) => {
  const query = ctx.inlineQuery.query.trim() || "Hello!";

  await ctx.answerInlineQuery([
    {
      type: "article",
      id: crypto.randomUUID(),
      title: `Send “${query}”`,
      description: "Send the text to this chat",
      messageContent: {
        type: "text",
        text: query,
      },
    },
  ], {
    cacheTime: 0,
    isPersonal: true,
  });
});
```

When the user selects the result, Telegram sends the value of `messageContent` to the chat. Every result must have an ID that is unique within the answer.

The example disables caching, which is useful while developing. In production, use a suitable `cacheTime` to avoid answering identical queries repeatedly. Set `isPersonal` when results differ between users.

## Filtering Queries

An `inlineQuery` string or regular expression limits which queries reach a handler.

```ts
client.inlineQuery(/^help\b/i, async (ctx) => {
  await ctx.answerInlineQuery([
    {
      type: "article",
      id: crypto.randomUUID(),
      title: "Send help",
      messageContent: {
        type: "text",
        text: "How can I help?",
      },
    },
  ]);
});
```

Inline results can also send photos, videos, locations, contacts, and other content. Cached media results accept file IDs like those covered in the previous section.
