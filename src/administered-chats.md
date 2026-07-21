---
title: Administered Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 50
---

{{ "getAdministeredChats" |> m }} lists chats administered by the current account.

```ts
const chats = await client.getAdministeredChats();
```
