---
title: Premium Subscription Gifts
parent: /#walkthrough
walkthrough:
  track: bot
  order: 17
---

Bots can gift Telegram Premium subscriptions to users with Telegram Stars.

## Gifting a Subscription

{{ "giftPremiumSubscription" |> m }} accepts a user identifier and a duration of 3, 6, or 12 months.

```ts
await client.giftPremiumSubscription(userId, 3);
```

The optional `text` field attaches a message to the gift.

```ts
await client.giftPremiumSubscription(userId, 12, {
  text: "Thanks for being part of the community!",
});
```
