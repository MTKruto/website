---
title: Chat Members
parent: /#walkthrough
prev: /topics
next: /invite-links-and-join-requests
---

Chat members are represented by {{ "ChatMember" |> t }} objects. Each object contains the member and their status in the chat.

## Listing Members

Use {{ "getChatMembers" |> m }} to list the members of a group, supergroup, or channel.

```ts
const members = await client.getChatMembers(chatId);

for (const { member, status } of members) {
  console.log(member.id, status);
}
```

Use {{ "getChatMember" |> m }} to retrieve one member.

```ts
const member = await client.getChatMember(chatId, userId);
```

## Handling Membership Changes

The `chatMember` update contains the previous and current state of a member.

```ts
client.on("chatMember", (ctx) => {
  const { oldChatMember, newChatMember } = ctx.update.chatMember;
  console.log(oldChatMember.status, newChatMember.status);
});
```

Use the `myChatMember` update to handle changes to the current account's membership.

## Restricting a Member

Use {{ "setChatMemberRights" |> m }} to restrict a member of a supergroup.

```ts
await client.setChatMemberRights(chatId, userId, {
  rights: {
    canSendMessages: false,
  },
});
```

Set `until` to a future Unix timestamp in seconds to make the restriction temporary.

## Promoting a Member

Use {{ "promoteChatMember" |> m }} to grant administrator rights.

```ts
await client.promoteChatMember(chatId, userId, {
  canDeleteMessages: true,
  canManageTopics: true,
});
```

## Removing a Member

Ban a member to prevent them from rejoining. Unban them to allow them to join again.

```ts
await client.banChatMember(chatId, userId);
await client.unbanChatMember(chatId, userId);
```

Use {{ "kickChatMember" |> m }} to remove a member without keeping them banned.

```ts
await client.kickChatMember(chatId, userId);
```
