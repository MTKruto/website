---
title: Keyboards and Callback Queries
parent: /#walkthrough
walkthrough:
  track: bot
  order: 3
---

Bots can attach a keyboard to a message to give users a set of actions to choose from. An inline keyboard appears directly below the message and can contain buttons that send data back to the bot, open URLs, launch mini apps, and perform other actions.

## Sending an Inline Keyboard

Pass a {{ "ReplyMarkupInlineKeyboard" |> t }} as `replyMarkup` when sending a message. The `inlineKeyboard` field is an array of rows, and each row is an array of buttons.

```ts
client.command("menu", async (ctx) => {
  await ctx.reply("What would you like to do?", {
    replyMarkup: {
      type: "inlineKeyboard",
      inlineKeyboard: [
        [
          {
            type: "callbackData",
            text: "Show details",
            callbackData: "show_details",
          },
        ],
        [
          {
            type: "url",
            text: "Open the documentation",
            url: "https://mtkru.to",
          },
        ],
      ],
    },
  });
});
```

Pressing the URL button opens its URL without sending an update to the bot. Pressing the callback button sends an {{ "UpdateCallbackQuery" |> t }} containing its `callbackData`.

## Handling Callback Queries

Use `callbackQuery` to handle a specific callback data value. Within its handler, `ctx.callbackQuery` contains the query and its data.

```ts
client.callbackQuery("show_details", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Here are the details.");
});
```

Always answer callback queries, even when you do not need to display a notification. This tells Telegram that the button press was handled and dismisses the loading indicator shown to the user.

To display a short notification, pass `text`:

```ts
client.callbackQuery("saved", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Saved!" });
});
```

Set `isAlert` to display the text in an alert instead:

```ts
client.callbackQuery("confirm_delete", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "This action needs confirmation.",
    isAlert: true,
  });
});
```

## Matching Dynamic Callback Data

Callback query handlers also accept regular expressions. This is useful when the data includes an identifier or another value.

```ts
client.callbackQuery(/^page:\d+$/, async (ctx) => {
  const page = Number(ctx.callbackQuery.data.slice("page:".length));

  await ctx.answerCallbackQuery({ text: `Opening page ${page}` });
});
```

Keep callback data compact and treat it as untrusted input. Check identifiers and permissions again inside the handler instead of assuming that a query could only have come from the displayed keyboard.

## Other Keyboard Types

In addition to inline keyboards, bots can send a {{ "ReplyMarkupKeyboard" |> t }} that replaces the user's typing keyboard with custom buttons. A reply markup can also remove that keyboard or force the user to reply. See {{ "ReplyMarkup" |> t }} for all supported variants.
