---
title: Channel Direct Messages
parent: /#walkthrough
walkthrough:
  track: main
  order: 19
---

Bots can reply to messages sent through a channel's direct messages.

## Replying to a Direct Message

Incoming direct messages have a `directMessagesTopicId`. Context reply methods reuse it automatically.

```ts
client.on("message", async (ctx) => {
  if (ctx.msg.directMessagesTopicId === undefined) {
    return;
  }

  await ctx.reply("Thanks for contacting us.");
});
```

When sending outside an update handler, pass the topic ID explicitly.

```ts
await client.sendMessage(chatId, "Thanks for contacting us.", {
  directMessagesTopicId,
});
```
