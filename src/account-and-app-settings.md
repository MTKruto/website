---
title: Account and App Settings
parent: /#walkthrough
walkthrough:
  track: user
  order: 25
---

Users can manage general account behavior and retrieve Telegram app information.

## Updating the Profile

{{ "updateProfile" |> m }} changes the current user's name or bio.

```ts
await client.updateProfile({ firstName: "Ada", bio: "Hello" });
```

{{ "setIsOnline" |> m }} updates the account's online status.

```ts
await client.setIsOnline(true);
```

## Emoji Statuses

{{ "setEmojiStatus" |> m }} and {{ "removeEmojiStatus" |> m }} set or remove the account's status.

```ts
await client.setEmojiStatus({ type: "customEmoji", customEmojiId });
await client.removeEmojiStatus();
```

Channels have corresponding {{ "setChannelEmojiStatus" |> m }} and {{ "removeChannelEmojiStatus" |> m }} methods.

```ts
await client.setChannelEmojiStatus(channelId, { type: "customEmoji", customEmojiId });
await client.removeChannelEmojiStatus(channelId);
```

Recent statuses come from {{ "getRecentEmojiStatuses" |> m }} and can be cleared with {{ "clearRecentEmojiStatuses" |> m }}.

```ts
const statuses = await client.getRecentEmojiStatuses();
await client.clearRecentEmojiStatuses();
```

## Bot Permissions

{{ "allowBotToSetCustomEmojiStatus" |> m }} and {{ "disallowBotToSetCustomEmojiStatus" |> m }} grant or revoke a bot's permission to change the status.

```ts
await client.allowBotToSetCustomEmojiStatus(botId);
await client.disallowBotToSetCustomEmojiStatus(botId);
```

Attachment-menu bots are managed through {{ "addBotToAttachmentsMenu" |> m }} and {{ "removeBotFromAttachmentsMenu" |> m }}.

```ts
await client.addBotToAttachmentsMenu(botId);
await client.removeBotFromAttachmentsMenu(botId);
```

## Paid Messages

Exceptions for paid incoming messages are managed by {{ "allowUnpaidMessagesFromUser" |> m }} and {{ "disallowUnpaidMessagesFromUser" |> m }}.

```ts
await client.allowUnpaidMessagesFromUser(userId);
await client.disallowUnpaidMessagesFromUser(userId);
```

## New Chats

{{ "getArchiveAndMuteNewChatsFromUnknownUsers" |> m }} reads the automatic-archiving setting, and {{ "setArchiveAndMuteNewChatsFromUnknownUsers" |> m }} changes it.

```ts
const isEnabled = await client.getArchiveAndMuteNewChatsFromUnknownUsers();
await client.setArchiveAndMuteNewChatsFromUnknownUsers(true);
```

{{ "getNewChatPrivacy" |> m }} and {{ "setNewChatPrivacy" |> m }} control who can start new chats with the account.

```ts
const privacy = await client.getNewChatPrivacy();
await client.setNewChatPrivacy({
  isNewChatFromNonPremiumUsersAllowed: true,
  messagePrice: 0,
});
```

## Gifts

Gift visibility is available through {{ "getGiftPrivacy" |> m }} and {{ "setGiftPrivacy" |> m }}.

```ts
const privacy = await client.getGiftPrivacy();
await client.setGiftPrivacy({
  isGiftButtonDisplayed: true,
  isRegularGiftAccepted: true,
});
```

## Sponsored Messages

Sponsored messages are controlled by {{ "enableSponsoredMessages" |> m }} and {{ "disableSponsoredMessages" |> m }}.

```ts
await client.enableSponsoredMessages();
await client.disableSponsoredMessages();
```

## Deleting the Account

Permanently delete the current account through {{ "deleteAccount" |> m }}.

```ts
await client.deleteAccount("No longer needed");
```
