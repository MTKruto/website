---
title: Chat Administration
parent: /#walkthrough
walkthrough:
  track: user
  order: 34
---

Users can create chats and manage administrative settings.

## Creating Chats

{{ "createGroup" |> m }}, {{ "createSupergroup" |> m }}, and {{ "createChannel" |> m }} create their respective chat types.

```ts
const group = await client.createGroup("Project");
const supergroup = await client.createSupergroup("Community");
const channel = await client.createChannel("Announcements");
```

## Deleting a Chat

A chat owned by the account can be deleted with {{ "deleteChat" |> m }}.

```ts
await client.deleteChat(group.id);
```

## Joining Chats

{{ "joinChat" |> m }} joins a public chat, while {{ "joinChatByInviteLink" |> m }} follows an invite. {{ "resolveInviteLink" |> m }} inspects the invite beforehand.

```ts
const resolved = await client.resolveInviteLink(inviteLink);
```

```ts
await client.joinChat(chatId);
await client.joinChatByInviteLink(inviteLink);
```

## History and Visibility

History visibility for new members is controlled by {{ "enableChatHistoryForNewMembers" |> m }} and {{ "disableChatHistoryForNewMembers" |> m }}.

Member-list visibility is controlled by {{ "showMemberList" |> m }} and {{ "hideMemberList" |> m }}. Content sharing has matching {{ "enableSharing" |> m }} and {{ "disableSharing" |> m }} methods.

```ts
await client.enableChatHistoryForNewMembers(chatId);
```

```ts
await client.showMemberList(chatId);
```

```ts
await client.enableSharing(chatId);
```

## Channel Settings

Post signatures are controlled by {{ "enableSignatures" |> m }} and {{ "disableSignatures" |> m }}. Select the default sender with {{ "setDefaultSendAs" |> m }}.

{{ "getDiscussionChatSuggestions" |> m }} returns possible discussion chats; {{ "setDiscussionChat" |> m }} links the selected one.

```ts
await client.enableSignatures(channelId);
```

```ts
await client.setDefaultSendAs(chatId, sendAsId);
```

```ts
const suggestions = await client.getDiscussionChatSuggestions();
await client.setDiscussionChat(channelId, discussionChatId);
```

## Read State

A chat's read state is updated by {{ "markChatAsRead" |> m }}, {{ "markChatAsUnread" |> m }}, and {{ "markAllMentionsAsRead" |> m }}.

```ts
await client.markChatAsRead(chatId);
await client.markChatAsUnread(chatId);
await client.markAllMentionsAsRead(chatId);
```

## Ownership

After meeting Telegram's security requirements, transfer ownership with {{ "transferChatOwnership" |> m }}.

```ts
await client.transferChatOwnership(chatId, userId, password);
```
