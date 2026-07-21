---
title: Notification Settings
parent: /#walkthrough
walkthrough:
  track: user
  order: 19
---

Users can control notifications for individual chats.

## Getting Notification Settings

To get a chat's {{ "NotificationSettings" |> t }}, call {{ "getNotificationSettings" |> m }}.

```ts
const settings = await client.getNotificationSettings(chatId);

console.log(settings.isSilent, settings.muteUntil);
```

## Muting a Chat

{{ "setNotificationSettings" |> m }} accepts a Unix timestamp in seconds.

```ts
const muteUntil = Math.floor(Date.now() / 1_000) + 60 * 60;

await client.setNotificationSettings(chatId, {
  settings: { muteUntil },
});
```

A `muteUntil` value of `0` unmutes the chat.

## Changing Other Settings

An {{ "InputNotificationSettings" |> t }} changes options such as notification previews, sounds, and story notifications.

```ts
await client.setNotificationSettings(chatId, {
  settings: {
    showsPreviews: false,
    isSilent: true,
  },
});
```

## Resetting Notification Settings

{{ "resetNotificationSettings" |> m }} lets you reset all notification settings.

```ts
await client.resetNotificationSettings();
```

## Saved Notification Sounds

{{ "addSavedNotificationSound" |> m }}, {{ "getSavedNotificationSounds" |> m }}, and {{ "removeSavedNotificationSound" |> m }} manage sounds saved to the account.

```ts
await client.addSavedNotificationSound("./notification.mp3");
const sounds = await client.getSavedNotificationSounds();
await client.removeSavedNotificationSound(sounds[0].fileId);
```
