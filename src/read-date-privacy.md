---
title: Read Date Privacy
parent: /#walkthrough
walkthrough:
  track: user
  order: 24
---

Users can control whether message read dates are visible.

## Getting Read Date Privacy

{{ "getReadDatePrivacy" |> m }} reports whether read dates are visible.

```ts
const isVisible = await client.getReadDatePrivacy();

console.log(isVisible);
```

## Setting Read Date Privacy

{{ "setReadDatePrivacy" |> m }} accepts the desired visibility.

```ts
await client.setReadDatePrivacy(false);
```
