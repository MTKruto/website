---
title: Chat Antispam
parent: /#walkthrough
walkthrough:
  track: user
  order: 46
---

Users who administer a supergroup can enable or disable Telegram's native antispam system.

```ts
await client.enableAntispam(chatId);
await client.disableAntispam(chatId);
```
