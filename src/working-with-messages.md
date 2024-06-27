---
title: Working with Messages
prev: /handling-updates
next: /commands
---

## Message Updates

There are three updates that are directly related to messages:

- {{ "UpdateNewMessage" |> t }} --- Received when a message is received or sent.
- {{ "UpdateEditedMessage" |> t }} --- Received when a message is edited.
- {{ "UpdateDeletedMessages" |> t }} --- Received when one or more messages are
  deleted.

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

To see how the context object would look like for each update, you can refer to
their specific documentation pages linked above.

### Filtering Message Types

There is a significant number of different types of [messages](/types/Message),
which makes processing all of them in a single handler a little harder.

Fortunately, you can easily filter out messages by their types when assigning
your handler. Here are some examples:

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

You can access the received message in through `ctx.msg` or `ctx.message`.

```ts
client.on("message", (ctx) => {
  // Both ctx.msg and ctx.message are referring to the received message.
});
```

Edited messages are accessed through `ctx.msg` and `ctx.editedMessage`.

```ts
client.on("editedMessage", (ctx) => {
  // Both ctx.msg and ctx.editedMessage are referring to the edited message.
});
```

`ctx.msg` is just a shortcut that resolves to
`ctx.message ?? ctx.editedMessage`. See {{ "Message" |> t }}.

Updates for deleted messages don't include full message objects, only references
to them (see {{ "MessageReference" |> t }}).

```ts
client.on("deletedMessages", (ctx) => {
  // ctx.deletedMessages is an array of MessageReference.
});
```

### Notes

- UpdateDeletedMessages is **not always sent to bots**, so it is recommended
  that you don't depend on it for bots.
- Updates for outgoing messages are not sent for bots by default, but you can
  disable the `ignoreOutgoing` option to receive them:

```ts
const client = new Client({
  ignoreOutgoing: false,
  /* ... */
});
```

## Sending Messages

There are multiple methods that can be used to send messages. Each of them is
used for sending a specific type of message.

- {{ "sendMessage" |> m }} --- For sending text messages.
- {{ "sendPhoto" |> m }} --- For sending photos.
- {{ "sendDocument" |> m }} --- For sending files.
- {{ "sendVideo" |> m }} --- For sending videos.
- {{ "sendAnimation" |> m }} --- For sending [animations](/types/Animation).
- {{ "sendAudio" |> m }} --- For sending audio files.
- {{ "sendVoice" |> m }} --- For sending voice messages.
- {{ "sendVideoNote" |> m }} --- For sending video notes.
- {{ "sendDice" |> m }} --- For sending dices.
- {{ "sendLocation" |> m }} --- For sending locations.
- {{ "sendVenue" |> m }} --- For sending venues.
- {{ "sendPoll" |> m }} --- For sending polls.
- {{ "sendContact" |> m }} --- For sending contacts.

Here are some example calls:

```ts
const chat = /* ... */; // ID
const file = /* ... */; // FileSource

await client.sendMessage(
  chat,
  "Hey!",
  { disableNotification: true, /* other optional options */ }
);

await client.sendPhoto(chat, file, { caption: "Optional Caption", /* other optional options */ });

await client.sendDocument(chat, file, { caption: "Optional Caption", /* ooo */ });

await client.sendVideo(chat, file, { caption: "Optional Caption", /* ooo */ });

await client.sendAnimation(chat, file, { caption: "Optional Caption", /* ooo */ });

await client.sendAnimation(chat, file, { caption: "Optional Caption", /* ooo */ });

await client.sendAudio(chat, file, { caption: "Optional Caption", /* ooo */ });

await client.sendVoice(chat, file, { caption: "Optional Caption", /* ooo */ });

await client.sendDice(chat); // defaults to 🎲
await client.sendDice(chat, { emoji: "🏀" }); // but you can send any valid dice
```

To use the above example calls, `chat` must be replaced with a valid {{ "ID" |>
t }}, and `file` must be replaced a valid {{ "FileSource" |> t }}.

As previously said, the last parameters are optional and can always be omitted,
so for example you can do just `await client.sendMessage(chat, "Hey!");` if you
don't specify any optional parameter. Optional parameters are those parameters
marked with `?` in the method documentations.

Inside handlers, you can call the respective `reply*` shortcuts to easily reply
the context message:

```ts
client.on("message", async (ctx) => {
  await ctx.reply(text); // same as client.sendMessage(ctx.chat.id, text, { replyToMessageId: ctx.msg.id });
  await ctx.replyPhoto(file); // same as client.sendPhoto(ctx.chat.id, file, { replyToMessageId: ctx.msg.id });
});
```

## Deleting Messages

You can delete messages by calling either {{ "deleteMessage" |> m }} or {{
"deleteMessages" |> m }}.

```ts
await ctx.deleteMessage(chat, messageId);
await ctx.deleteMessages(chat, [...messageIds]);
```

You can delete the context message with `delete`:

```ts
client.on("message", async (ctx) => {
  await ctx.delete(); // This deletes the received message.
});
```

## Forwarding Messages

You can forward messages by calling either {{ "forwardMessage" |> m }} or {{
"forwardMessages" |> m }}.

```ts
await ctx.forwardMessage(fromChat, toChat);
await ctx.forwardMessages(fromChat, toChat);
```

You can forward the context message with `forward`:

```ts
client.on("message", async (ctx) => {
  await ctx.forward(toChat); // This forwards the received message.
});
```
