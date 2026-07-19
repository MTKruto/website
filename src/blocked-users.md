---
title: Blocked Users
parent: /#walkthrough
walkthrough:
  track: user
  order: 6
---

User clients can block users and manage the account's block list.

## Blocking a User

Use {{ "blockUser" |> m }} with the user's identifier.

```ts
await client.blockUser(userId);
```

## Listing Blocked Users

Use {{ "getBlockedUsers" |> m }} to get a {{ "BlockedUserList" |> t }}.

```ts
const { blockedUsers } = await client.getBlockedUsers();

for (const { user, blockedAt } of blockedUsers) {
  console.log(user.id, user.firstName, blockedAt);
}
```

## Unblocking a User

Use {{ "unblockUser" |> m }} with the user's identifier.

```ts
await client.unblockUser(userId);
```
