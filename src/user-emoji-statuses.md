---
title: User Emoji Statuses
parent: /#walkthrough
walkthrough:
  track: bot
  order: 10
---

Bots can set and remove emoji statuses for users who allow them to do so.

## Setting an Emoji Status

Use {{ "setUserEmojiStatus" |> m }} with a custom emoji ID.

```ts
await client.setUserEmojiStatus(userId, {
  type: "customEmoji",
  customEmojiId,
});
```

Pass `until` as a future Unix timestamp in seconds to remove the status automatically.

```ts
const until = Math.floor(Date.now() / 1_000) + 60 * 60;

await client.setUserEmojiStatus(userId, {
  type: "customEmoji",
  customEmojiId,
}, { until });
```

## Removing an Emoji Status

Use {{ "removeUserEmojiStatus" |> m }} to remove the user's current emoji status.

```ts
await client.removeUserEmojiStatus(userId);
```
