---
title: Read Date Privacy
parent: /#walkthrough
walkthrough:
  track: user
  order: 24
---

Users can control whether message read dates are visible.

## Getting Read Date Privacy

Use {{ "getReadDatePrivacy" |> m }} to check whether read dates are visible.

```ts
const isVisible = await client.getReadDatePrivacy();

console.log(isVisible);
```

## Setting Read Date Privacy

Use {{ "setReadDatePrivacy" |> m }} with the desired visibility.

```ts
await client.setReadDatePrivacy(false);
```
