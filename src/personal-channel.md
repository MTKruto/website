---
title: Personal Channel
parent: /#walkthrough
walkthrough:
  track: user
  order: 16
---

Users can display a channel on the account's profile.

## Setting a Personal Channel

{{ "setPersonalChannel" |> m }} accepts the channel's identifier.

```ts
await client.setPersonalChannel({ chatId: channelId });
```

## Removing the Personal Channel

An empty {{ "setPersonalChannel" |> m }} call removes the channel.

```ts
await client.setPersonalChannel();
```
