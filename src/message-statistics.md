---
title: Message Statistics
parent: /#walkthrough
walkthrough:
  track: user
  order: 28
---

Users can inspect message counters, viewers, and read dates.

## Getting Counters

{{ "getMessageCounters" |> m }} returns counters for one message. For several messages, call {{ "getMessagesCounters" |> m }}.

```ts
const counters = await client.getMessageCounters(chatId, messageId);
const allCounters = await client.getMessagesCounters(chatId, messageIds);
```

## Listing Viewers

{{ "getMessageViewers" |> m }} lists recent viewers.

```ts
const viewers = await client.getMessageViewers(chatId, messageId);
```

## Getting the Read Date

{{ "getMessageReadDate" |> m }} returns when a private-chat message was read.

```ts
const readDate = await client.getMessageReadDate(chatId, messageId);
```
