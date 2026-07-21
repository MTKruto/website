---
title: Payments
parent: /#walkthrough
walkthrough:
  track: bot
  order: 14
---

Bots can accept payments by sending invoices and handling checkout updates.

## Sending an Invoice

Use {{ "sendInvoice" |> m }} to send an invoice. This example charges 100 Telegram Stars.

```ts
await client.sendInvoice(
  chatId,
  "Premium access",
  "Unlocks premium features.",
  "premium-access",
  "XTR",
  [{ label: "Premium access", amount: 100 }],
);
```

The payload identifies the purchase and is included in subsequent payment updates.

## Confirming Checkout

Validate each `preCheckoutQuery` before allowing the payment to proceed.

```ts
client.on("preCheckoutQuery", async (ctx) => {
  const { invoicePayload } = ctx.update.preCheckoutQuery;

  if (invoicePayload === "premium-access") {
    await ctx.answerPreCheckoutQuery(true);
  } else {
    await ctx.answerPreCheckoutQuery(false, {
      error: "This item is no longer available.",
    });
  }
});
```

## Handling Successful Payments

Fulfill the purchase after receiving a `successfulPayment` message.

```ts
client.on("message:successfulPayment", (ctx) => {
  const payment = ctx.msg.successfulPayment;
  console.log("Payment received for", payment.invoicePayload);
});
```
