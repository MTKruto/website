---
title: Inline Interactions
parent: /#walkthrough
walkthrough:
  track: user
  order: 35
---

Users can interact with callback buttons and inline bots as a user client.

## Sending a Callback Query

{{ "sendCallbackQuery" |> m }} accepts the message and button data.

```ts
const answer = await client.sendCallbackQuery(botId, messageId, question);
```

## Sending an Inline Query

Query an inline bot and receive its results through {{ "sendInlineQuery" |> m }}.

```ts
const answer = await client.sendInlineQuery(botId, chatId, {
  query: "cats",
});
```
