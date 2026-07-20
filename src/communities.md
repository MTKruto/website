---
title: Communities
parent: /#walkthrough
walkthrough:
  track: user
  order: 9
---

User clients can organize related chats into communities.

## Creating a Community

Use {{ "createCommunity" |> m }} with a name and the identifier of its first chat.

```ts
const community = await client.createCommunity("Project", chatId, {
  description: "Project discussions",
});
```

## Listing Communities

Use {{ "getJoinedCommunities" |> m }} to get the account's communities as {{ "CommunityP" |> t }} objects.

```ts
const communities = await client.getJoinedCommunities();

for (const community of communities) {
  console.log(community.id, community.name);
}
```

## Getting a Community

Use {{ "getCommunity" |> m }} to get a {{ "Community" |> t }}, including its chats.

```ts
const community = await client.getCommunity(communityId);

for (const { chat } of community.chats) {
  console.log(chat.id, chat.type);
}
```

## Managing Chats

Use {{ "addChatToCommunity" |> m }} and {{ "removeChatFromCommunity" |> m }} to manage a community's chats.

```ts
await client.addChatToCommunity(communityId, chatId);
await client.removeChatFromCommunity(communityId, chatId);
```

## Changing the Display

Choose whether the community appears as one chat or as separate chats.

```ts
await client.showCommunityAsOneChat(communityId);
await client.showCommunityAsDifferentChats(communityId);
```

## Deleting a Community

Use {{ "deleteCommunity" |> m }} with the community's identifier.

```ts
await client.deleteCommunity(communityId);
```
