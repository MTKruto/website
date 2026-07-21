---
title: Bots and Mini Apps
parent: /#walkthrough
walkthrough:
  track: user
  order: 32
---

Users can start bots and open their mini apps.

## Listing Owned Bots

{{ "getOwnedBots" |> m }} lists bots owned by the account.

```ts
const bots = await client.getOwnedBots();
```

## Starting a Bot

{{ "startBot" |> m }} starts a bot with an optional deep link.

```ts
await client.startBot(botId, { deeplink: "help" });
```

## Opening a Mini App

{{ "openMiniApp" |> m }} returns the information needed to open a bot's mini app.

```ts
const miniApp = await client.openMiniApp(botId, chatId);
```
