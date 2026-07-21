---
title: Chat Boosts
parent: /#walkthrough
walkthrough:
  track: user
  order: 47
---

## Assigning a Boost

{{ "boostChat" |> m }} assigns one of the account's boosts to a chat.

```ts
await client.boostChat(chatId);
```

## Bypassing Restrictions

{{ "setBoostsRequiredToCircumventRestrictions" |> m }} sets how many boosts a user needs to bypass chat restrictions.

```ts
await client.setBoostsRequiredToCircumventRestrictions(chatId, 1);
```
