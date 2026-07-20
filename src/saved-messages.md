---
title: Saved Messages
parent: /#walkthrough
walkthrough:
  track: user
  order: 16
---

User clients can list chats with saved messages and get the messages saved from each chat.

## Listing Saved Chats

Use {{ "getSavedChats" |> m }} to get a {{ "SavedChats" |> t }} object.

```ts
const { chats } = await client.getSavedChats();

for (const { chat } of chats) {
  console.log(chat.id, chat.type);
}
```

## Getting Saved Messages

Use {{ "getSavedMessages" |> m }} with a chat's identifier.

```ts
const messages = await client.getSavedMessages(chatId);
```
