---
title: Bot Commands
parent: /#walkthrough
walkthrough:
  track: bot
  order: 2
---

Bots can publish a list of commands that Telegram shows to users.

## Setting Commands

{{ "setMyCommands" |> m }} accepts each command's name and description.

```ts
await client.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Show help" },
]);
```

This only changes the displayed command list. Register handlers separately with `client.command()`.

## Scoping and Localizing Commands

A `scope` limits a command list to specific audiences or chats. This example sets a command for group administrators.

```ts
await client.setMyCommands(
  [{ command: "settings", description: "Manage this chat" }],
  { scope: { type: "allChatAdministrators" } },
);
```

The `languageCode` option sets a localized command list.

```ts
await client.setMyCommands(
  [{ command: "help", description: "Показать справку" }],
  { languageCode: "ru" },
);
```

## Reading and Deleting Commands

{{ "getMyCommands" |> m }} reads a command list, while {{ "deleteMyCommands" |> m }} deletes it.

```ts
const commands = await client.getMyCommands();
await client.deleteMyCommands();
```
