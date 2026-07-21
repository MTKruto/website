---
title: Personal Channel
parent: /#walkthrough
walkthrough:
  track: user
  order: 16
---

User clients can display a channel on the account's profile.

## Setting a Personal Channel

Use {{ "setPersonalChannel" |> m }} with the channel's identifier.

```ts
await client.setPersonalChannel({ chatId: channelId });
```

## Removing the Personal Channel

Call {{ "setPersonalChannel" |> m }} without a channel.

```ts
await client.setPersonalChannel();
```
