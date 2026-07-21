---
title: Saved Animations
parent: /#walkthrough
walkthrough:
  track: user
  order: 31
---

Users can manage animations saved to their account.

## Listing Animations

{{ "getSavedAnimations" |> m }} returns the saved animations.

```ts
const animations = await client.getSavedAnimations();
```

## Updating the List

{{ "saveAnimation" |> m }} and {{ "unsaveAnimation" |> m }} add and remove animations from the list.

```ts
await client.saveAnimation(fileId);
await client.unsaveAnimation(fileId);
```
