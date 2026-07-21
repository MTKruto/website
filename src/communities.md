---
title: Communities
parent: /#walkthrough
walkthrough:
  track: user
  order: 3
---

Users can organize related chats into communities.

## Creating a Community

{{ "createCommunity" |> m }} accepts a name and the identifier of its first chat.

```ts
const community = await client.createCommunity("Project", chatId, {
  description: "Project discussions",
});
```

## Listing Communities

With {{ "getJoinedCommunities" |> m }}, you can get the account's communities as {{ "CommunityP" |> t }} objects.

```ts
const communities = await client.getJoinedCommunities();

for (const community of communities) {
  console.log(community.id, community.name);
}
```

## Getting a Community

{{ "getCommunity" |> m }} returns a {{ "Community" |> t }}, including its chats.

```ts
const community = await client.getCommunity(communityId);

for (const { chat } of community.chats) {
  console.log(chat.id, chat.type);
}
```

{{ "getCommunityP" |> m }} returns only the community's peer representation.

## Managing Chats

To manage a community's chats, call {{ "addChatToCommunity" |> m }} and {{ "removeChatFromCommunity" |> m }}.

```ts
await client.addChatToCommunity(communityId, chatId);
await client.removeChatFromCommunity(communityId, chatId);
```

## Changing the Display

The community can appear as one chat or as separate chats.

```ts
await client.showCommunityAsOneChat(communityId);
await client.showCommunityAsDifferentChats(communityId);
```

## Deleting a Community

{{ "deleteCommunity" |> m }} deletes the community identified by its argument.

```ts
await client.deleteCommunity(communityId);
```
