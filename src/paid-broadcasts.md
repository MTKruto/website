---
title: Paid Broadcasts
parent: /#walkthrough
walkthrough:
  track: bot
  order: 16
---

Paid broadcasts let bots use Telegram Stars to send messages beyond the free broadcast limit.

## Sending a Paid Broadcast

Each message in the broadcast needs `isPaidBroadcast` set to `true`.

```ts
await client.sendMessage(chatId, "A new version is available.", {
  isPaidBroadcast: true,
});
```

Paid broadcasts spend Telegram Stars from the bot's balance. Leave `isPaidBroadcast` unset for normal messages.
