---
title: Requesting Users
parent: /#walkthrough
walkthrough:
  track: bot
  order: 4
---

Bots can ask users to select a user through Telegram's user picker.

## Requesting a User

Send a `requestUser` button in a custom keyboard. The `requestId` identifies the request when the user responds.

```ts
client.command("choose_user", async (ctx) => {
  await ctx.reply("Choose a user:", {
    replyMarkup: {
      type: "keyboard",
      keyboard: [
        [
          {
            type: "requestUser",
            text: "Choose a user",
            requestId: 1,
          },
        ],
      ],
      isOneTime: true,
      isResized: true,
    },
  });
});
```

## Handling the Selection

The bot receives a `userShared` message containing the request ID and selected user ID.

```ts
client.on("message:userShared", (ctx) => {
  const { requestId, userId } = ctx.msg.userShared;
  console.log(requestId, userId);
});
```
