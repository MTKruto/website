---
title: Notification Settings
parent: /#walkthrough
walkthrough:
  track: user
  order: 19
---

Users can control notifications for individual chats.

## Getting Notification Settings

Use {{ "getNotificationSettings" |> m }} to get a chat's {{ "NotificationSettings" |> t }}.

```ts
const settings = await client.getNotificationSettings(chatId);

console.log(settings.isSilent, settings.muteUntil);
```

## Muting a Chat

Use {{ "setNotificationSettings" |> m }} with a Unix timestamp in seconds.

```ts
const muteUntil = Math.floor(Date.now() / 1_000) + 60 * 60;

await client.setNotificationSettings(chatId, {
  settings: { muteUntil },
});
```

Set `muteUntil` to `0` to unmute the chat.

## Changing Other Settings

Use {{ "InputNotificationSettings" |> t }} to change options such as notification previews, sounds, and story notifications.

```ts
await client.setNotificationSettings(chatId, {
  settings: {
    showsPreviews: false,
    isSilent: true,
  },
});
```

## Resetting Notification Settings

Use {{ "resetNotificationSettings" |> m }} to reset all notification settings.

```ts
await client.resetNotificationSettings();
```
