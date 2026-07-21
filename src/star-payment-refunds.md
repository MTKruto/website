---
title: Star Payment Refunds
parent: /#walkthrough
walkthrough:
  track: bot
  order: 15
---

Bots can refund payments made with Telegram Stars.

## Refunding a Payment

{{ "refundStarPayment" |> m }} accepts the charged user's identifier and the `telegramPaymentChargeId` from the successful payment.

```ts
await client.refundStarPayment(userId, telegramPaymentChargeId);
```
