---
title: Name and Profile Color
parent: /#walkthrough
walkthrough:
  track: user
  order: 13
---

Users can customize their name color and profile color.

## Setting the Name Color

Use {{ "setNameColor" |> m }} to set the name color of the current user.

```ts
await client.setNameColor(5);
```

Optionally, pass a `customEmojiId` to display in message reply headers.

```ts
await client.setNameColor(5, { customEmojiId: "..." });
```

## Setting the Profile Color

Use {{ "setProfileColor" |> m }} to set the profile color of the current user.

```ts
await client.setProfileColor(3);
```

Optionally, pass a `customEmojiId` to display in the profile.

```ts
await client.setProfileColor(3, { customEmojiId: "..." });
```
