---
title: Application Configuration
parent: /#walkthrough
walkthrough:
  track: user
  order: 40
---

{{ "getApplicationConfiguration" |> m }} returns Telegram's current application configuration.

```ts
const configuration = await client.getApplicationConfiguration();
```
