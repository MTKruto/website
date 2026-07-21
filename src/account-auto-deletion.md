---
title: Account Auto-Deletion
parent: /#walkthrough
walkthrough:
  track: user
  order: 23
---

Users can control when an inactive account is automatically deleted.

## Getting the Auto-Deletion Period

{{ "getAccountTtl" |> m }} lets you get the period in days.

```ts
const dayCount = await client.getAccountTtl();

console.log(dayCount);
```

## Setting the Auto-Deletion Period

{{ "setAccountTtl" |> m }} accepts the period in days.

```ts
await client.setAccountTtl(365);
```
