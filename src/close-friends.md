---
title: Close Friends
parent: /#walkthrough
walkthrough:
  track: user
  order: 17
---

Users can manage the account's close friends list.

## Setting Close Friends

Use {{ "setCloseFriends" |> m }} with the identifiers of the users to include.

```ts
await client.setCloseFriends([userId1, userId2]);
```

This replaces the current close friends list. Pass an empty array to clear it.

```ts
await client.setCloseFriends([]);
```
