---
title: Star Balance and Transactions
parent: /#walkthrough
walkthrough:
  track: main
  order: 21
---

Clients can check their Telegram Star balance and transaction history.

## Getting the Balance

Use {{ "getStarBalance" |> m }} with `"me"` to get the current account's balance.

```ts
const balance = await client.getStarBalance("me");

console.log(balance.amount, balance.nanos);
```

## Listing Transactions

Use {{ "getStarTransactions" |> m }} to get the current account's transactions.

```ts
const { transactions } = await client.getStarTransactions("me", {
  limit: 10,
});

for (const transaction of transactions) {
  console.log(transaction.id, transaction.amount.amount);
}
```
