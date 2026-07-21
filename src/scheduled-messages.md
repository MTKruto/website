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

Use {{ "getScheduledMessages" |> m }} to get all scheduled messages in a chat.

```ts
const messages = await client.getScheduledMessages(chatId);

for (const message of messages) {
  console.log(message.id, message.date);
}
```

## Sending a Message Early

Use {{ "sendScheduledMessage" |> m }} to send a scheduled message immediately.

```ts
await client.sendScheduledMessage(chatId, message.id);
```

Use {{ "sendScheduledMessages" |> m }} to send multiple scheduled messages at once.

## Deleting a Scheduled Message

```ts
await client.deleteScheduledMessage(chatId, message.id);
```

Use {{ "deleteScheduledMessages" |> m }} to delete multiple scheduled messages at once.
