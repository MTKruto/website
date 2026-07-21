---
title: Chat Recommendations
parent: /#walkthrough
walkthrough:
  track: user
  order: 2
---

Users can get recommended channels and find similar channels or bots.

## Getting Recommended Channels

{{ "getRecommendedChannels" |> m }} returns recommended channels as {{ "ChatPChannel" |> t }} objects.

```ts
const channels = await client.getRecommendedChannels();

for (const channel of channels) {
  console.log(channel.id, channel.title);
}
```

## Getting Similar Channels

{{ "getSimilarChannels" |> m }} accepts a channel's identifier.

```ts
const channels = await client.getSimilarChannels(channelId);
```

## Getting Similar Bots

{{ "getSimilarBots" |> m }} accepts a bot's identifier.

```ts
const bots = await client.getSimilarBots(botId);
```
