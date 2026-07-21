---
title: Guest Queries
parent: /#walkthrough
walkthrough:
  track: bot
  order: 9
---

Bots can receive guest queries and answer them with a single result. Guest queries must first be enabled for the bot through [@BotFather](https://t.me/BotFather).

## Answering Guest Queries

The `guestQuery` update contains the incoming message and a query ID. Answer it with an {{ "InlineQueryResult" |> t }}.

```ts
client.on("guestQuery", async (ctx) => {
  const message = ctx.guestQuery.message;
  const text = message.type === "text" ? `You said: ${message.text}` : "Send me a text message.";

  await ctx.answerGuestQuery({
    type: "article",
    id: crypto.randomUUID(),
    title: "Reply",
    messageContent: {
      type: "text",
      text,
    },
  });
});
```

The context method uses the query ID automatically. Outside a handler, pass it to {{ "answerGuestQuery" |> m }} explicitly.
