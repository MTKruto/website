---
title: Chat Settings
parent: /#walkthrough
prev: /invite-links-and-join-requests
next: /secret-chats
---

Administrators can change a chat's details and behavior.

## Changing the Title and Description

Use {{ "setChatTitle" |> m }} and {{ "setChatDescription" |> m }} to update a group, supergroup, or channel.

```ts
await client.setChatTitle(chatId, "MTKruto Community");
await client.setChatDescription(chatId, "A place to discuss MTKruto.");
```

Set the description to an empty string to remove it.

## Changing the Photo

```ts
await client.setChatPhoto(chatId, "./community.jpg");
```

Use {{ "deleteChatPhoto" |> m }} to remove the current photo.

```ts
await client.deleteChatPhoto(chatId);
```

## Enabling Slow Mode

User clients can use {{ "setSlowMode" |> m }} to limit how often members can send messages in a supergroup.

```ts
await client.setSlowMode(chatId, "30s");
```

See {{ "SlowModeDuration" |> t }} for the available durations. Use {{ "disableSlowMode" |> m }} to turn slow mode off.

## Automatically Deleting Messages

User clients can use {{ "setMessageTtl" |> m }} to automatically delete messages after a number of seconds.

```ts
await client.setMessageTtl(chatId, 7 * 24 * 60 * 60);
```
