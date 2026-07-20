---
title: Ephemeral Messages
parent: /#walkthrough
walkthrough:
  track: bot
  order: 8
---

Bots can reply to commands with messages that are visible only to the user who sent the command.

## Enabling Ephemeral Commands

Register the command with {{ "setMyCommands" |> m }} and set `isEphemeral` to `true`.

```ts
await client.setMyCommands([
  {
    command: "help",
    description: "Show help",
    isEphemeral: true,
  },
]);
```

Only bot commands with `isEphemeral` enabled can use ephemeral messages.

## Replying to Ephemeral Commands

Context reply methods detect ephemeral commands and send their replies to the same user automatically.

```ts
client.command("help", async (ctx) => {
  await ctx.reply("This message is visible only to you.");
});
```

## Editing and Deleting Ephemeral Messages

Inside a handler, use the context shortcuts. They use the current chat automatically.

```ts
await ctx.editEphemeralMessageText(receiverUserId, messageId, "Updated message.");
await ctx.deleteEphemeralMessage(receiverUserId, messageId);
```

Outside a handler, use {{ "editEphemeralMessageText" |> m }} and {{ "deleteEphemeralMessage" |> m }} and pass the chat ID explicitly.

```ts
await client.editEphemeralMessageText(chatId, receiverUserId, messageId, "Updated message.");
await client.deleteEphemeralMessage(chatId, receiverUserId, messageId);
```
