---
title: Video Chats and Live Streams
parent: /#walkthrough
walkthrough:
  track: user
  order: 37
---

Users can manage group video chats and channel live streams.

## Starting a Video Chat

{{ "startVideoChat" |> m }} starts a video chat immediately.

```ts
const videoChat = await client.startVideoChat(chatId, {
  title: "Weekly meeting",
});
```

For a later start, call {{ "scheduleVideoChat" |> m }} with a Unix timestamp in seconds.

```ts
const scheduledVideoChat = await client.scheduleVideoChat(
  chatId,
  Math.floor(Date.now() / 1_000) + 3_600,
);
```

## Joining and Leaving

{{ "joinVideoChat" |> m }} and {{ "leaveVideoChat" |> m }} join and leave a video chat.

The method accepts WebRTC connection parameters produced by the library used for the call. The returned parameters belong back in that library.

```ts
const response = await client.joinVideoChat(videoChatId, connectionParams);
await client.leaveVideoChat(videoChatId);
```

Channel live streams have a separate {{ "joinLiveStream" |> m }} method.

```ts
await client.joinLiveStream(liveStreamId);
```

## Getting Stream Information

{{ "getVideoChat" |> m }} retrieves a video chat.

The video chat identifier is available as `videoChatId` on the result of {{ "getChat" |> m }}.

```ts
const { videoChatId } = await client.getChat(chatId);
```

```ts
const videoChat = await client.getVideoChat(videoChatId);
```

{{ "getLiveStreamChannels" |> m }} returns the channels available for a live stream.

```ts
const channels = await client.getLiveStreamChannels(videoChatId);
const channel = channels[0];
```

{{ "downloadLiveStreamSegment" |> m }} accepts a channel's values and downloads its latest segment.

```ts
const segment = await client.downloadLiveStreamSegment(
  videoChatId,
  channel.id,
  channel.scale,
  channel.timestamp,
);
```
