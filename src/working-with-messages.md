---
title: Working with Messages
parent: /#walkthrough
walkthrough:
  track: main
  order: 6
  sections:
    notes: bot
    link-previews: user
    screenshot-notifications: user
---

## Message Updates

There are three updates that are directly related to messages:

- {{ "UpdateNewMessage" |> t }} --- Received when a message is received or sent.
- {{ "UpdateMessageEdited" |> t }} --- Received when a message is edited.
- {{ "UpdateMessagesDeleted" |> t }} --- Received when one or more messages are deleted.

Here are some examples on adding listeners for each of them:

```ts
client.on("message", (ctx) => {
  // called when a message is received or sent
});

client.on("editedMessage", (ctx) => {
  // called when a message is edited
});

client.on("deletedMessages", (ctx) => {
  // called when one or more messages are deleted
});
```

To see how the context object would look like for each update, you can refer to their specific documentation pages linked above.

### Filtering Message Types

There is a significant number of {{ "Message" |> t }} variants, which makes processing all of them in a single handler a little harder.

Fortunately, you can easily filter out messages by their types when assigning your handler. Here are some examples:

```ts
client.on("message:text", (ctx) => {
  // This handler is called only when text messages are received.
  // So ctx.msg.text is always set.
});

client.on("editedMessage:photo", (ctx) => {
  // This handler is called only when photo messages are edited.
  // So ctx.msg.photo is always set.
});
```

### Accessing the Message in Handlers

You can access the received message through `ctx.msg` or `ctx.update.message`.

```ts
client.on("message", (ctx) => {
  // Both ctx.msg and ctx.update.message are referring to the received message.
});
```

Edited messages are accessed through `ctx.msg` and `ctx.update.editedMessage`.

```ts
client.on("editedMessage", (ctx) => {
  // Both ctx.msg and ctx.update.editedMessage are referring to the edited message.
});
```

`ctx.msg` is just a shortcut that resolves to `ctx.update.message ?? ctx.update.editedMessage`. See {{ "Message" |> t }}.

Updates for deleted messages don't include full message objects, only references to them (see {{ "MessageReference" |> t }}).

```ts
client.on("deletedMessages", (ctx) => {
  // ctx.update.deletedMessages is an array of MessageReference.
});
```

### Notes

- UpdateMessagesDeleted is **not always sent to bots**, so it is recommended that you don't depend on it for bots.
- Outgoing messages are not sent as high-level updates by default. Enable the `outgoingMessages` option to receive them:

```ts
const client = new Client({
  outgoingMessages: true,
  /* ... */
});
```

## Sending Messages

There are multiple methods that can be used to send messages. Each of them is used for sending a specific type of message.

- {{ "sendMessage" |> m }} --- For sending text messages.
- {{ "sendPhoto" |> m }} --- For sending photos.
- {{ "sendDocument" |> m }} --- For sending files.
- {{ "sendVideo" |> m }} --- For sending videos.
- {{ "sendAnimation" |> m }} --- For sending {{ "Animation" |> t }} messages.
- {{ "sendAudio" |> m }} --- For sending audio files.
- {{ "sendVoice" |> m }} --- For sending voice messages.
- {{ "sendVideoNote" |> m }} --- For sending video notes.
- {{ "sendDice" |> m }} --- For sending dice messages.
- {{ "sendLocation" |> m }} --- For sending locations.
- {{ "sendVenue" |> m }} --- For sending venues.
- {{ "sendPoll" |> m }} --- For sending polls.
- {{ "sendContact" |> m }} --- For sending contacts.
- {{ "sendChecklist" |> m }} --- For sending checklists.

Here are some example calls:

```ts
const chat = /* ... */; // ID
const file = /* ... */; // FileSource

await client.sendMessage(
  chat,
  "Hey!",
  { isSilent: true, /* other optional options */ }
);

await client.sendPhoto(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendDocument(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendVideo(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendAnimation(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendAudio(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendVoice(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendDice(chat); // defaults to 🎲
await client.sendDice(chat, { emoji: "🏀" }); // but you can send any valid dice
```

To use the above example calls, `chat` must be replaced with a valid {{ "ID" |> t }}, and `file` must be replaced with a valid {{ "FileSource" |> t }}.

As previously said, the last parameters are optional and can always be omitted, so for example you can do just `await client.sendMessage(chat, "Hey!");` if you don't specify any optional parameter. Optional parameters are those parameters marked with `?` in the method documentation.

Inside handlers, you can call the respective `reply*` shortcuts to easily reply the context message:

```ts
client.on("message", async (ctx) => {
  await ctx.reply(text); // same as client.sendMessage(ctx.chat.id, text, { replyTo: { type: "message", messageId: ctx.msg.id } });
  await ctx.replyPhoto(file); // same as client.sendPhoto(ctx.chat.id, file, { replyTo: { type: "message", messageId: ctx.msg.id } });
});
```

### Sending Stickers

{{ "sendSticker" |> m }} accepts a sticker file source or file identifier.

```ts
await client.sendSticker(chatId, sticker);
```

### Sending Media Groups

With {{ "sendMediaGroup" |> m }}, you can send several photos or videos as one album.

```ts
await client.sendMediaGroup(chatId, media);
```

### Sending Live Photos

{{ "sendLivePhoto" |> m }} accepts the photo and video parts.

```ts
await client.sendLivePhoto(chatId, photo, video);
```

## Getting Messages

{{ "getMessage" |> m }} retrieves one message, while {{ "getMessages" |> m }} retrieves several.

```ts
const message = await client.getMessage(chatId, messageId);
const messages = await client.getMessages(chatId, messageIds);
```

To resolve a Telegram message link, call {{ "resolveMessageLink" |> m }}.

```ts
const message = await client.resolveMessageLink(link);
```

## Link Previews

With {{ "getLinkPreview" |> m }}, you can preview a link before sending it.

## Screenshot Notifications

Users can send a screenshot notification with {{ "sendScreenshotNotification" |> m }}.

```ts
await client.sendScreenshotNotification(chatId, messageId);
```

## Editing Messages

You can edit messages that have already been sent. Each method targets a specific part of the message, and the referenced message must already be of a matching type.

### Editing Text

{{ "editMessageText" |> m }} changes the text of a text message.

```ts
await client.editMessageText(chatId, messageId, "Updated text");
```

Like {{ "sendMessage" |> m }}, it accepts formatting options.

```ts
await client.editMessageText(chatId, messageId, "*Updated* text", {
  parseMode: "Markdown",
});
```

### Editing Captions

{{ "editMessageCaption" |> m }} lets you change the caption of a media message.

```ts
await client.editMessageCaption(chatId, messageId, {
  caption: "New caption",
});
```

### Replacing Media

Replace a media message's content through {{ "editMessageMedia" |> m }}. Pass an {{ "InputMedia" |> t }} describing the new media.

```ts
await client.editMessageMedia(chatId, messageId, {
  type: "photo",
  photo: new URL("https://example.com/photo.jpg"),
  caption: "New caption",
});
```

### Editing Reply Markup

With {{ "editMessageReplyMarkup" |> m }}, you can update the buttons attached to a message without changing its content.

```ts
await client.editMessageReplyMarkup(chatId, messageId, {
  replyMarkup: {/* ... */},
});
```

Live locations can be updated with {{ "editMessageLiveLocation" |> m }}, and rich text messages with {{ "editMessageRichText" |> m }}.

## Deleting Messages

You can delete messages by calling either {{ "deleteMessage" |> m }} or {{ "deleteMessages" |> m }}.

```ts
await ctx.deleteMessage(messageId);
await ctx.deleteMessages([...messageIds]);
```

You can delete the context message with `delete`:

```ts
client.on("message", async (ctx) => {
  await ctx.delete(); // This deletes the received message.
});
```

## Forwarding Messages

You can forward messages by calling either {{ "forwardMessage" |> m }} or {{ "forwardMessages" |> m }}.

```ts
await ctx.forwardMessage(toChat, messageId);
await ctx.forwardMessages(toChat, messageIds);
```

You can forward the context message with `forward`:

```ts
client.on("message", async (ctx) => {
  await ctx.forward(toChat); // This forwards the received message.
});
```

## Pinned Messages

Pinning a message keeps it at the top of a chat so members can find it easily. Both users and bots can pin messages, provided they have the rights to do so in the chat.

### Pinning a Message

{{ "pinMessage" |> m }} pins a message.

```ts
await client.pinMessage(chatId, messageId);
```

In private chats, the pin is visible to both participants by default. Pass `isForBothSides` as `false` to pin it only for the current account.

```ts
await client.pinMessage(chatId, messageId, {
  isForBothSides: false,
});
```

The `isSilent` option prevents a pin notification.

```ts
await client.pinMessage(chatId, messageId, {
  isSilent: true,
});
```

### Unpinning Messages

{{ "unpinMessage" |> m }} lets you unpin a single message.

```ts
await client.unpinMessage(chatId, messageId);
```

To unpin every pinned message in a chat at once, call {{ "unpinMessages" |> m }}.

```ts
await client.unpinMessages(chatId);
```

In a forum, pass a `topicId` to unpin only the messages in that topic.

```ts
await client.unpinMessages(chatId, {
  topicId,
});
```

### Receiving Pin Notifications

When a message is pinned in a group, a service message of type `pinnedMessage` is added to the chat. Listen for it like any other message, and read the pinned message through `ctx.msg.pinnedMessage`.

```ts
client.on("message:pinnedMessage", (ctx) => {
  const pinned = ctx.msg.pinnedMessage;
  console.log("Pinned:", pinned.id);
});
```
