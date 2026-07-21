---
title: Usernames
parent: /#walkthrough
walkthrough:
  track: user
  order: 12
---

Users can check and manage the account's usernames.

## Checking a Username

Use {{ "checkUsername" |> m }} to check whether a username is available.

```ts
const isAvailable = await client.checkUsername("example_username");

console.log(isAvailable);
```

## Setting a Username

Use {{ "setUsername" |> m }} to set the account's username.

```ts
await client.setUsername("example_username");
```

## Showing a Username

Use {{ "showUsername" |> m }} to show a username on the account's profile.

```ts
await client.showUsername("me", "example_username");
```

## Hiding a Username

Use {{ "hideUsername" |> m }} to hide a username from the account's profile.

```ts
await client.hideUsername("me", "example_username");
```

## Reordering Usernames

Use {{ "reorderUsernames" |> m }} to change the order of the account's usernames.

```ts
await client.reorderUsernames("me", ["primary_username", "example_username"]);
```

## Removing a Username

Use {{ "removeUsername" |> m }} to remove the account's username.

```ts
await client.removeUsername();
```
