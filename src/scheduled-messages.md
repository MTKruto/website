---
title: Scheduled Messages
parent: /#walkthrough
walkthrough:
  track: user
  order: 7
---

Users can schedule messages to be sent later. Set `sendAt` to a future Unix timestamp in seconds when sending a message.

## Scheduling a Message

```ts
const sendAt = Math.floor(Date.now() / 1_000) + 60 * 60;

const message = await client.sendMessage(chatId, "The meeting starts now.", {
  sendAt,
});
```

The same option is available on other sending methods, such as {{ "sendPhoto" |> m }} and {{ "sendPoll" |> m }}.

## Listing Scheduled Messages

{{ "getScheduledMessages" |> m }} returns all scheduled messages in a chat.

```ts
const messages = await client.getScheduledMessages(chatId);

for (const message of messages) {
  console.log(message.id, message.date);
}
```

## Sending a Message Early

{{ "sendScheduledMessage" |> m }} lets you send a scheduled message immediately.

```ts
await client.sendScheduledMessage(chatId, message.id);
```

To send multiple scheduled messages at once, call {{ "sendScheduledMessages" |> m }}.

## Deleting a Scheduled Message

```ts
await client.deleteScheduledMessage(chatId, message.id);
```

With {{ "deleteScheduledMessages" |> m }}, you can delete multiple scheduled messages at once.
