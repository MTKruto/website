---
title: Birthday
parent: /#walkthrough
walkthrough:
  track: user
  order: 14
---

Users can set or remove the account's birthday.

## Setting a Birthday

Use {{ "setBirthday" |> m }} with the day, month, and optionally the year.

```ts
await client.setBirthday({
  birthday: { day: 9, month: 9, year: 1995 },
});
```

## Removing the Birthday

Call {{ "setBirthday" |> m }} without a birthday.

```ts
await client.setBirthday();
```
