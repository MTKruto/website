---
title: Chat Settings
parent: /#walkthrough
walkthrough:
  track: main
  order: 16
  sections:
    enabling-slow-mode: user
    automatically-deleting-messages: user
    personal-chat-settings: user
---

Administrators can change a chat's details and behavior.

## Changing the Title and Description

With {{ "setChatTitle" |> m }} and {{ "setChatDescription" |> m }}, you can update a group, supergroup, or channel.

```ts
await client.setChatTitle(chatId, "MTKruto Community");
await client.setChatDescription(chatId, "A place to discuss MTKruto.");
```

An empty description removes the current one.

## Changing the Photo

```ts
await client.setChatPhoto(chatId, "./community.jpg");
```

{{ "deleteChatPhoto" |> m }} removes the current photo.

```ts
await client.deleteChatPhoto(chatId);
```

## Enabling Slow Mode

{{ "setSlowMode" |> m }} lets you limit how often members can send messages in a supergroup.

```ts
await client.setSlowMode(chatId, "30s");
```

See {{ "SlowModeDuration" |> t }} for the available durations. {{ "disableSlowMode" |> m }} turns slow mode off.

## Automatically Deleting Messages

To automatically delete messages after a number of seconds, call {{ "setMessageTtl" |> m }}.

```ts
await client.setMessageTtl(chatId, 7 * 24 * 60 * 60);
```

{{ "setDefaultMessageTtl" |> m }} sets the auto-delete period applied to new chats.

```ts
await client.setDefaultMessageTtl(7 * 24 * 60 * 60);
```

## Personal Chat Settings

{{ "getChatSettings" |> m }} returns the current user's settings for a chat.

```ts
const settings = await client.getChatSettings(chatId);
```
