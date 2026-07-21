---
title: User Emoji Statuses
parent: /#walkthrough
walkthrough:
  track: bot
  order: 13
---

Bots can set and remove emoji statuses for users who allow them to do so.

## Setting an Emoji Status

{{ "setUserEmojiStatus" |> m }} accepts a custom emoji ID.

```ts
await client.setUserEmojiStatus(userId, {
  type: "customEmoji",
  customEmojiId,
});
```

A future Unix timestamp in `until` removes the status automatically.

```ts
const until = Math.floor(Date.now() / 1_000) + 60 * 60;

await client.setUserEmojiStatus(userId, {
  type: "customEmoji",
  customEmojiId,
}, { until });
```

## Removing an Emoji Status

To remove the user's current emoji status, call {{ "removeUserEmojiStatus" |> m }}.

```ts
await client.removeUserEmojiStatus(userId);
```
