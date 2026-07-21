---
title: Chat Navigation
parent: /#walkthrough
walkthrough:
  track: main
  order: 24
---

Clients can retrieve chats and control whether they are open in the Telegram interface.

## Resolving a Public Chat

{{ "resolveUsername" |> m }} resolves a public username without the leading `@`.

```ts
const chat = await client.resolveUsername("telegram");
```

## Getting a Chat

{{ "getChat" |> m }} returns complete chat information.

```ts
const chat = await client.getChat(chatId);
```

## Getting a Chat Peer

{{ "getChatP" |> m }} returns a chat's peer representation.

```ts
const peer = await client.getChatP(chatId);
```

## Opening and Closing a Chat

{{ "openChat" |> m }} and {{ "closeChat" |> m }} notify Telegram when the interface opens or closes a chat.

```ts
await client.openChat(chatId);
await client.closeChat(chatId);
```

## Leaving a Chat

{{ "leaveChat" |> m }} leaves a group, supergroup, or channel.

```ts
await client.leaveChat(chatId);
```

## Managing the Sticker Set

{{ "setChatStickerSet" |> m }} assigns a sticker set to a supergroup; {{ "deleteChatStickerSet" |> m }} removes it.

```ts
await client.setChatStickerSet(chatId, stickerSetSlug);
await client.deleteChatStickerSet(chatId);
```
