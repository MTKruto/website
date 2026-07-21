---
title: Star & TON Balance and Transactions
parent: /#walkthrough
walkthrough:
  track: main
  order: 21
---

Clients can check their Telegram Star balance, TON balance, and transaction history.

## Getting the Star Balance

{{ "getStarBalance" |> m }} returns the current account's Star balance when given `"me"`.

```ts
const balance = await client.getStarBalance("me");

console.log(balance.amount, balance.nanos);
```

## Listing Star Transactions

{{ "getStarTransactions" |> m }} lets you get the current account's Star transactions.

```ts
const { transactions } = await client.getStarTransactions("me", {
  limit: 10,
});

for (const transaction of transactions) {
  console.log(transaction.id, transaction.amount.amount);
}
```

## Getting the TON Balance

To get the current account's TON balance, call {{ "getTonBalance" |> m }}.

```ts
const tonBalance = await client.getTonBalance("me");

console.log(tonBalance);
```

## Listing TON Transactions

With {{ "getTonTransactions" |> m }}, you can get the current account's TON transactions.

```ts
const { transactions } = await client.getTonTransactions("me", {
  limit: 10,
});

for (const transaction of transactions) {
  console.log(transaction.id, transaction.amount);
}
```
