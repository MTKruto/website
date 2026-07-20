---
title: Bot Commands
parent: /#walkthrough
walkthrough:
  track: bot
  order: 12
---

Bots can publish a list of commands that Telegram shows to users.

## Setting Commands

Use {{ "setMyCommands" |> m }} with each command's name and description.

```ts
await client.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Show help" },
]);
```

This only changes the displayed command list. Register handlers separately with `client.command()`.

## Scoping and Localizing Commands

Pass a `scope` to show a command list only in specific chats. This example sets a command for group administrators.

```ts
await client.setMyCommands(
  [{ command: "settings", description: "Manage this chat" }],
  { scope: { type: "allChatAdministrators" } },
);
```

Pass `languageCode` to set a localized command list.

```ts
await client.setMyCommands(
  [{ command: "help", description: "Hilfe anzeigen" }],
  { languageCode: "de" },
);
```

## Reading and Deleting Commands

Use {{ "getMyCommands" |> m }} to read a command list and {{ "deleteMyCommands" |> m }} to delete it.

```ts
const commands = await client.getMyCommands();
await client.deleteMyCommands();
```
