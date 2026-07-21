---
title: Invite Links and Join Requests
parent: /#walkthrough
walkthrough:
  track: main
  order: 15
  sections:
    deleting-revoked-invite-links: user
    listing-created-invite-links: user
    listing-join-requests: user
---

Invite links let people join a group, supergroup, or channel.

## Creating an Invite Link

To create an invite link, call {{ "createInviteLink" |> m }}.

```ts
const inviteLink = await client.createInviteLink(chatId, {
  title: "Community invite",
  limit: 100,
});

console.log(inviteLink.inviteLink);
```

A future Unix timestamp in `expireAt` makes the link temporary.

## Deleting Revoked Invite Links

{{ "deleteRevokedInviteLinks" |> m }} deletes the revoked links created by an administrator.

```ts
await client.deleteRevokedInviteLinks(chatId, administratorId);
```

## Listing Created Invite Links

With {{ "getCreatedInviteLinks" |> m }}, you can list invite links created by a specific administrator.

## Requiring Approval

The `isApprovalRequired` option makes users send a join request instead of joining immediately. It cannot be used together with `limit`.

```ts
const inviteLink = await client.createInviteLink(chatId, {
  isApprovalRequired: true,
});
```

{{ "enableJoinRequests" |> m }} and {{ "disableJoinRequests" |> m }} control join requests for a channel or supergroup.

## Handling Join Requests

Bots receive a `joinRequest` update containing the chat and the user who requested to join.

```ts
client.on("joinRequest", async (ctx) => {
  const { chat, from } = ctx.update.joinRequest;
  await client.approveJoinRequest(chat.id, from.id);
});
```

{{ "declineJoinRequest" |> m }} lets you decline a request instead.

## Listing Join Requests

Users can list pending requests with {{ "getJoinRequests" |> m }}.

```ts
const requests = await client.getJoinRequests(chatId);

for (const request of requests) {
  console.log(request.from.id, request.date);
}
```

To handle all pending requests at once, call {{ "approveJoinRequests" |> m }} or {{ "declineJoinRequests" |> m }}.
