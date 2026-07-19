---
title: Invite Links and Join Requests
parent: /#walkthrough
walkthrough:
  track: main
  order: 15
  sections:
    listing-join-requests: user
---

Invite links let people join a group, supergroup, or channel.

## Creating an Invite Link

Use {{ "createInviteLink" |> m }} to create an invite link.

```ts
const inviteLink = await client.createInviteLink(chatId, {
  title: "Community invite",
  limit: 100,
});

console.log(inviteLink.inviteLink);
```

Set `expireAt` to a future Unix timestamp in seconds to make the link temporary.

## Requiring Approval

Set `isApprovalRequired` to make users send a join request instead of joining immediately. It cannot be used together with `limit`.

```ts
const inviteLink = await client.createInviteLink(chatId, {
  isApprovalRequired: true,
});
```

User clients can use {{ "enableJoinRequests" |> m }} and {{ "disableJoinRequests" |> m }} to enable or disable join requests for a channel or supergroup.

## Handling Join Requests

Bots receive a `joinRequest` update containing the chat and the user who requested to join.

```ts
client.on("joinRequest", async (ctx) => {
  const { chat, from } = ctx.update.joinRequest;
  await client.approveJoinRequest(chat.id, from.id);
});
```

Use {{ "declineJoinRequest" |> m }} to decline a request instead.

## Listing Join Requests

User clients can list pending requests with {{ "getJoinRequests" |> m }}.

```ts
const requests = await client.getJoinRequests(chatId);

for (const request of requests) {
  console.log(request.from.id, request.date);
}
```

Use {{ "approveJoinRequests" |> m }} or {{ "declineJoinRequests" |> m }} to handle all pending requests at once.
