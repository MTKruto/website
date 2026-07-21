---
title: Administration Log
parent: /#walkthrough
walkthrough:
  track: user
  order: 49
---

{{ "getRecentActions" |> m }} returns recent administrative actions in a chat.

```ts
const actions = await client.getRecentActions(chatId);
```
