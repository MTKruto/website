---
title: Star & TON Balance and Transactions
parent: /#walkthrough
walkthrough:
  track: main
  order: 21
---

Clients can check their Telegram Star balance, TON balance, and transaction history.

## Getting the Star Balance

Use {{ "getStarBalance" |> m }} with `"me"` to get the current account's Star balance.

```ts
const balance = await client.getStarBalance("me");

console.log(balance.amount, balance.nanos);
```

## Listing Star Transactions

Use {{ "getStarTransactions" |> m }} to get the current account's Star transactions.

```ts
const { transactions } = await client.getStarTransactions("me", {
  limit: 10,
});

for (const transaction of transactions) {
  console.log(transaction.id, transaction.amount.amount);
}
```

## Getting the TON Balance

Use {{ "getTonBalance" |> m }} to get the current account's TON balance.

```ts
const tonBalance = await client.getTonBalance("me");

console.log(tonBalance);
```

## Listing TON Transactions

Use {{ "getTonTransactions" |> m }} to get the current account's TON transactions.

```ts
const { transactions } = await client.getTonTransactions("me", {
  limit: 10,
});

for (const transaction of transactions) {
  console.log(transaction.id, transaction.amount);
}
```
