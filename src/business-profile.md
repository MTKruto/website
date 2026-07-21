---
title: Business Profile
parent: /#walkthrough
walkthrough:
  track: user
  order: 26
---

Telegram Business users can configure their public business information and automated messages.

## Location and Hours

{{ "setLocation" |> m }} sets the business location, and {{ "setWorkingHours" |> m }} sets its hours.

```ts
await client.setLocation({ address: "123 Main Street" });
```

```ts
await client.setWorkingHours({ workingHours });
```

## Introduction

{{ "setBusinessIntro" |> m }} publishes the business introduction; {{ "removeBusinessIntro" |> m }} removes it.

```ts
await client.setBusinessIntro("Welcome", "How can we help?");
await client.removeBusinessIntro();
```

## Greeting and Away Messages

The greeting is managed by {{ "setBusinessGreetingMessage" |> m }} and {{ "removeBusinessGreetingMessage" |> m }}.

The corresponding away-message methods are {{ "setBusinessAwayMessage" |> m }} and {{ "removeBusinessAwayMessage" |> m }}.

```ts
await client.setBusinessGreetingMessage(shortcutId, recipients, 7);
await client.removeBusinessGreetingMessage();
```

```ts
await client.setBusinessAwayMessage(shortcutId, schedule, recipients);
await client.removeBusinessAwayMessage();
```

## Connected Bots

Pause or resume a connected bot through {{ "pauseBusinessBotConnection" |> m }} and {{ "resumeBusinessBotConnection" |> m }}. For a specific chat, {{ "disableBusinessBots" |> m }} and {{ "enableBusinessBots" |> m }} control business bot access.

```ts
await client.pauseBusinessBotConnection(chatId);
await client.resumeBusinessBotConnection(chatId);
```

```ts
await client.disableBusinessBots(chatId);
await client.enableBusinessBots(chatId);
```
