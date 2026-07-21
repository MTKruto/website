---
title: Business Connections
parent: /#walkthrough
walkthrough:
  track: bot
  order: 12
---

Bots can reply on behalf of Telegram Business accounts that connect to them.

## Handling Connections

The `businessConnection` update is sent when a connection is added, changed, or removed.

```ts
client.on("businessConnection", (ctx) => {
  const connection = ctx.update.businessConnection;
  console.log(
    connection.user.id,
    connection.isEnabled ? "connected" : "disconnected",
  );
});
```

The connection's `id` identifies it in later requests. `isEnabled` shows whether it is active, and `canReply` shows whether the bot can reply to older chats.

## Replying to Business Messages

Messages received through a business connection have a `businessConnectionId`. Context reply methods reuse it automatically.

```ts
client.on("message", async (ctx) => {
  if (ctx.msg.businessConnectionId === undefined) {
    return;
  }

  await ctx.reply("Thanks! We’ll get back to you shortly.");
});
```

When sending outside an update handler, pass the connection ID explicitly.

```ts
await client.sendMessage(chatId, "Your order is ready.", {
  businessConnectionId,
});
```
