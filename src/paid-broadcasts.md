---
title: Paid Broadcasts
parent: /#walkthrough
walkthrough:
  track: bot
  order: 9
---

Paid broadcasts let bots use Telegram Stars to send messages beyond the free broadcast limit.

## Sending a Paid Broadcast

Set `isPaidBroadcast` to `true` when sending each message in the broadcast.

```ts
await client.sendMessage(chatId, "A new version is available.", {
  isPaidBroadcast: true,
});
```

Paid broadcasts spend Telegram Stars from the bot's balance. Leave `isPaidBroadcast` unset for normal messages.
