---
title: Pinned Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 43
---

{{ "getPinnedChats" |> m }} returns the pinned chats in the main or archived chat list.

```ts
const chats = await client.getPinnedChats("main");
```
