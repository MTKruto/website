---
title: App Support
parent: /#walkthrough
walkthrough:
  track: user
  order: 42
---

Users can retrieve the support information associated with their Telegram application.

{{ "getAppSupport" |> m }} returns the support user and message.

```ts
const support = await client.getAppSupport();
```

{{ "getAppSupportName" |> m }} returns the application's support name.

```ts
const supportName = await client.getAppSupportName();
```
