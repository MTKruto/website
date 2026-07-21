---
title: Saved Messages
parent: /#walkthrough
walkthrough:
  track: user
  order: 5
---

Users can list chats with saved messages and get the messages saved from each chat.

## Listing Saved Chats

To get a {{ "SavedChats" |> t }} object, call {{ "getSavedChats" |> m }}.

```ts
const { chats } = await client.getSavedChats();

for (const { chat } of chats) {
  console.log(chat.id, chat.type);
}
```

## Getting Saved Messages

{{ "getSavedMessages" |> m }} accepts a chat identifier.

```ts
const messages = await client.getSavedMessages(chatId);
```
