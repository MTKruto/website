---
title: Common Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 45
---

{{ "getCommonChats" |> m }} lists chats shared with another user.

```ts
const chats = await client.getCommonChats(userId);
```
