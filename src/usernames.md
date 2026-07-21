---
title: Usernames
parent: /#walkthrough
walkthrough:
  track: user
  order: 12
---

Users can check and manage the account's usernames.

With {{ "hideUsernames" |> m }}, you can hide every collectible username at once.

## Checking a Username

{{ "checkUsername" |> m }} reports whether a username is available.

```ts
const isAvailable = await client.checkUsername("example_username");

console.log(isAvailable);
```

## Setting a Username

{{ "setUsername" |> m }} lets you set the account's username.

```ts
await client.setUsername("example_username");
```

## Showing a Username

To show a username on the account's profile, call {{ "showUsername" |> m }}.

```ts
await client.showUsername("me", "example_username");
```

## Hiding a Username

With {{ "hideUsername" |> m }}, you can hide a username from the account's profile.

```ts
await client.hideUsername("me", "example_username");
```

## Reordering Usernames

{{ "reorderUsernames" |> m }} changes the order of the account's usernames.

```ts
await client.reorderUsernames("me", ["primary_username", "example_username"]);
```

## Removing a Username

{{ "removeUsername" |> m }} lets you remove the account's username.

```ts
await client.removeUsername();
```
