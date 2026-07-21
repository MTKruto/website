---
title: Birthday
parent: /#walkthrough
walkthrough:
  track: user
  order: 14
---

Users can set or remove the account's birthday.

## Setting a Birthday

{{ "setBirthday" |> m }} accepts the day, month, and optionally the year.

```ts
await client.setBirthday({
  birthday: { day: 9, month: 9, year: 1995 },
});
```

## Removing the Birthday

An empty {{ "setBirthday" |> m }} call removes the birthday.

```ts
await client.setBirthday();
```

## Suggesting a Birthday

{{ "suggestBirthday" |> m }} suggests a birthday to another user.

```ts
await client.suggestBirthday(userId, { day: 1, month: 1, year: 2000 });
```
