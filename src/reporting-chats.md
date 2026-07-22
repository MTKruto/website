---
title: Reporting Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 48
---

## Reporting a Chat

{{ "reportChat" |> m }} reports a chat to Telegram.

```ts
await client.reportChat(chatId, reportReason);
```

## Reporting an Ephemeral Message

Users can report an ephemeral message through {{ "reportEphemeralMessage" |> m }}.

```ts
await client.reportEphemeralMessage(chatId, messageId);
```
