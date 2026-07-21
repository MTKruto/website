---
title: Takeout Sessions
parent: /#walkthrough
walkthrough:
  track: user
  order: 39
---

Takeout sessions let users export account data with higher request limits.

## Starting a Session

{{ "startTakeoutSession" |> m }} starts an export.

```ts
const takeoutId = await client.startTakeoutSession();
```

## Exporting Left Channels

{{ "getLeftChannels" |> m }} retrieves channels that the account has left while the session is active.

The takeout identifier connects left-channel and chat-history exports to the session.

```ts
const leftChannels = await client.getLeftChannels(takeoutId);
```

Methods that support takeout sessions, such as {{ "getHistory" |> m }}, accept the same identifier.

```ts
const history = await client.getHistory(chatId, { takeoutId });
```

## Ending a Session

{{ "endTakeoutSession" |> m }} finishes the export.

```ts
await client.endTakeoutSession(takeoutId);
```
