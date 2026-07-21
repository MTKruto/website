---
title: Managed Bots
parent: /#walkthrough
walkthrough:
  track: bot
  order: 18
---

Bots that manage other bots can control their access settings and tokens.

## Handling Updates

The `managedBot` update is sent when a managed bot is updated. It contains the managed bot and its owner.

```ts
client.on("managedBot", (ctx) => {
  const { user: owner, bot } = ctx.update.managedBot;
  console.log(owner.id, bot.id);
});
```

## Managing Access

{{ "setManagedBotAccessSettings" |> m }} restricts access to specific users. The bot owner always retains access.

```ts
await client.setManagedBotAccessSettings(managedBotId, true, {
  usersWithAccess: [userId],
});
```

{{ "getManagedBotAccessSettings" |> m }} lets you read the current settings.

```ts
const settings = await client.getManagedBotAccessSettings(managedBotId);
```

A value of `false` for `isAccessRestricted` removes the restriction.

```ts
await client.setManagedBotAccessSettings(managedBotId, false);
```

## Managing Tokens

To get the current token, call {{ "getManagedBotToken" |> m }}.

```ts
const token = await client.getManagedBotToken(managedBotId);
```

With {{ "revokeManagedBotToken" |> m }}, you can revoke it. The method returns the new token.

```ts
const newToken = await client.revokeManagedBotToken(managedBotId);
```
