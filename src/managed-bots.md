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

Use {{ "setManagedBotAccessSettings" |> m }} to restrict access to specific users. The bot owner always retains access.

```ts
await client.setManagedBotAccessSettings(managedBotId, true, {
  usersWithAccess: [userId],
});
```

Use {{ "getManagedBotAccessSettings" |> m }} to read the current settings.

```ts
const settings = await client.getManagedBotAccessSettings(managedBotId);
```

Set `isAccessRestricted` to `false` to remove the restriction.

```ts
await client.setManagedBotAccessSettings(managedBotId, false);
```

## Managing Tokens

Use {{ "getManagedBotToken" |> m }} to get the current token.

```ts
const token = await client.getManagedBotToken(managedBotId);
```

Use {{ "revokeManagedBotToken" |> m }} to revoke it. The method returns the new token.

```ts
const newToken = await client.revokeManagedBotToken(managedBotId);
```
