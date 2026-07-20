---
title: Chat Recommendations
parent: /#walkthrough
walkthrough:
  track: user
  order: 15
---

User clients can get recommended channels and find similar channels or bots.

## Getting Recommended Channels

Use {{ "getRecommendedChannels" |> m }} to get recommended channels as {{ "ChatPChannel" |> t }} objects.

```ts
const channels = await client.getRecommendedChannels();

for (const channel of channels) {
  console.log(channel.id, channel.title);
}
```

## Getting Similar Channels

Use {{ "getSimilarChannels" |> m }} with a channel's identifier.

```ts
const channels = await client.getSimilarChannels(channelId);
```

## Getting Similar Bots

Use {{ "getSimilarBots" |> m }} with a bot's identifier.

```ts
const bots = await client.getSimilarBots(botId);
```
