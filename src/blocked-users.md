---
title: Blocked Users
parent: /#walkthrough
walkthrough:
  track: user
  order: 18
---

Users can block users and manage the account's block list.

## Blocking a User

{{ "blockUser" |> m }} accepts the user's identifier.

```ts
await client.blockUser(userId);
```

## Listing Blocked Users

{{ "getBlockedUsers" |> m }} lets you get a {{ "BlockedUserList" |> t }}.

```ts
const { blockedUsers } = await client.getBlockedUsers();

for (const { user, blockedAt } of blockedUsers) {
  console.log(user.id, user.firstName, blockedAt);
}
```

## Unblocking a User

{{ "unblockUser" |> m }} accepts the user's identifier.

```ts
await client.unblockUser(userId);
```
