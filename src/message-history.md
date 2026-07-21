---
title: Message History
parent: /#walkthrough
walkthrough:
  track: user
  order: 27
---

Users can retrieve, search, read, and view messages.

## Getting History

{{ "getHistory" |> m }} returns a chat's message history.

```ts
const history = await client.getHistory(chatId, { limit: 50 });
```

## Searching Messages

Message searches go through {{ "searchMessages" |> m }}.

```ts
const results = await client.searchMessages({ query: "release" });
```

## Marking Messages as Read

{{ "readMessages" |> m }} marks every message through the specified identifier as read.

```ts
await client.readMessages(chatId, messageId);
```

## Registering Views

{{ "viewMessage" |> m }} registers one view, while {{ "viewMessages" |> m }} handles several messages.

```ts
await client.viewMessage(chatId, messageId);
await client.viewMessages(chatId, messageIds);
```
