---
title: Archived Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 4
---

Users can move chats between the main and archived chat lists.

## Archiving a Chat

{{ "archiveChat" |> m }} moves a chat to the archive.

```ts
await client.archiveChat(chatId);
```

## Listing Archived Chats

{{ "getChats" |> m }} lists the archive when `from` is set to `"archived"`.

```ts
const chats = await client.getChats({ from: "archived" });

for (const { chat } of chats) {
  console.log(chat.id, chat.type);
}
```

## Unarchiving a Chat

{{ "unarchiveChat" |> m }} moves it back to the main list.

```ts
await client.unarchiveChat(chatId);
```

## Moving Multiple Chats

{{ "archiveChats" |> m }} and {{ "unarchiveChats" |> m }} move several chats at once.

```ts
await client.archiveChats(chatIds);
await client.unarchiveChats(chatIds);
```
