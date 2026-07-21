---
title: Editing Inline Messages
parent: /#walkthrough
walkthrough:
  track: bot
  order: 8
---

Bots can edit inline messages after a user selects an inline query result or interacts with an inline keyboard.

## Editing the Text

In a `chosenInlineResult` or `callbackQuery` handler, use the context shortcut for {{ "editInlineMessageText" |> m }}.

```ts
client.on("chosenInlineResult", async (ctx) => {
  await ctx.editInlineMessageText("Updated content.");
});
```

## Editing the Caption

The context shortcut for {{ "editInlineMessageCaption" |> m }} updates the caption.

```ts
client.on("chosenInlineResult", async (ctx) => {
  await ctx.editInlineMessageCaption({ caption: "New caption." });
});
```

## Editing the Reply Markup

the context shortcut for {{ "editInlineMessageReplyMarkup" |> m }} lets you change the inline keyboard.

```ts
client.callbackQuery("refresh", async (ctx) => {
  await ctx.editInlineMessageReplyMarkup({
    replyMarkup: [[{ text: "Refreshed", callbackData: "done" }]],
  });
  await ctx.answerCallbackQuery();
});
```
