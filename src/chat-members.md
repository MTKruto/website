---
title: Chat Members
parent: /#walkthrough
walkthrough:
  track: main
  order: 14
  sections:
    deleting-a-members-messages: user
    online-members: user
---

Chat members are represented by {{ "ChatMember" |> t }} objects. Each object contains the member and their status in the chat.

With {{ "setChatMemberTag" |> m }}, you can set or remove a member's tag when the chat supports member tags.

## Listing Members

{{ "getChatMembers" |> m }} lists the members of a group, supergroup, or channel.

```ts
const members = await client.getChatMembers(chatId);

for (const { member, status } of members) {
  console.log(member.id, status);
}
```

{{ "getChatMember" |> m }} lets you retrieve one member.

```ts
const member = await client.getChatMember(chatId, userId);
```

## Listing Administrators

{{ "getChatAdministrators" |> m }} lists a chat's administrators.

```ts
const administrators = await client.getChatAdministrators(chatId);
```

## Online Members

To get the approximate number of online members, call {{ "getOnlineCount" |> m }}.

## Handling Membership Changes

The `chatMember` update contains the previous and current state of a member.

```ts
client.on("chatMember", (ctx) => {
  const { oldChatMember, newChatMember } = ctx.update.chatMember;
  console.log(oldChatMember.status, newChatMember.status);
});
```

With the `myChatMember` update, you can handle changes to the current account's membership.

## Adding Members

{{ "addChatMember" |> m }} adds one member, while {{ "addChatMembers" |> m }} adds several.

## Restricting a Member

{{ "setChatMemberRights" |> m }} lets you restrict a member of a supergroup.

```ts
await client.setChatMemberRights(chatId, userId, {
  rights: {
    canSendMessages: false,
  },
});
```

A future Unix timestamp in `until` makes the restriction temporary.

## Promoting a Member

To grant administrator rights, call {{ "promoteChatMember" |> m }}.

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

With {{ "kickChatMember" |> m }}, you can remove a member without keeping them banned.

```ts
await client.kickChatMember(chatId, userId);
```

## Deleting a Member's Messages

Users who administer a chat can delete all messages from one member with {{ "deleteChatMemberMessages" |> m }}.

```ts
await client.deleteChatMemberMessages(chatId, memberId);
```
