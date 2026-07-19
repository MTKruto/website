---
title: Bot Profile
parent: /#walkthrough
walkthrough:
  track: bot
  order: 3
---

Bots can manage the name and descriptions Telegram shows to users.

## Updating Profile Information

Use {{ "setMyName" |> m }}, {{ "setMyShortDescription" |> m }}, and {{ "setMyDescription" |> m }} to update the bot's profile information.

```ts
await client.setMyName({ name: "Reminder Bot" });
await client.setMyShortDescription({
  shortDescription: "Creates reminders from chat messages.",
});
await client.setMyDescription({
  description: "Send me a message with a date and time to create a reminder.",
});
```

## Getting Profile Information

Use the corresponding getter methods to read the current values.

```ts
const name = await client.getMyName();
const shortDescription = await client.getMyShortDescription();
const description = await client.getMyDescription();
```

## Localizing Profile Information

Pass `languageCode` to set a value for a specific language.

```ts
await client.setMyShortDescription({
  shortDescription: "Crea recordatorios a partir de mensajes.",
  languageCode: "es",
});
```

The getter methods accept the same option. Omit `languageCode` to use the default value.
