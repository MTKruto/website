---
title: Archived Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 11
---

User clients can move chats between the main and archived chat lists.

## Archiving a Chat

Use {{ "archiveChat" |> m }} with the chat's identifier.

```ts
await client.archiveChat(chatId);
```

## Listing Archived Chats

Use {{ "getChats" |> m }} with `from` set to `"archived"`.

```ts
const chats = await client.getChats({ from: "archived" });

for (const { chat } of chats) {
  console.log(chat.id, chat.type);
}
```

## Unarchiving a Chat

Use {{ "unarchiveChat" |> m }} with the chat's identifier.

```ts
await client.unarchiveChat(chatId);
```
