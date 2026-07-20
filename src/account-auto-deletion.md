---
title: Account Auto-Deletion
parent: /#walkthrough
walkthrough:
  track: user
  order: 14
---

User clients can control when an inactive account is automatically deleted.

## Getting the Auto-Deletion Period

Use {{ "getAccountTtl" |> m }} to get the period in days.

```ts
const dayCount = await client.getAccountTtl();

console.log(dayCount);
```

## Setting the Auto-Deletion Period

Use {{ "setAccountTtl" |> m }} with the period in days.

```ts
await client.setAccountTtl(365);
```
