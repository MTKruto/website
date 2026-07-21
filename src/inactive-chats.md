---
title: Inactive Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 44
---

{{ "getInactiveChats" |> m }} returns inactive chats that the account may want to leave.

```ts
const chats = await client.getInactiveChats();
```
