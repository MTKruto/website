---
title: Calling Methods
prev: /starting-the-client
next: /handling-updates
---

## High-level Methods

All high-level methods are available directly on MTKruto client instances. You
can see a list of all methods and links to their reference [here](/methods).

To call one, you need to access it from a client instance using its identifier,
and call it providing the values of its required parameters in the correct
order, and optionally, a subset of the optional parameters in an object as the
last parameter. Inside the reference of each method, optional parameters are
marked with `?`. Don't forget that all methods return a promise, so you have to
await them.

```ts
await client.methodIdentifier(requiredParam1, requiredParam2);
await client.methodIdentifier(requiredParam1, requiredParam2, {
  optionalParam1Name: optionalParam1,
});
```

Here's an example on how you can call [`sendMessage`](/methods/sendMessage)
which has two required parameters (`chatId` and `text`), and a number of
optional parameters.

```ts
await client.sendMessage(36265675, "Hey you!", {
  disableNotification: true,
});
```

You can also omit the optional parameters completely.

```ts
await client.sendMessage(36265675, "Hey you!");
```

## Telegram API Functions

To call a Telegram API function directly, use `client.invoke()`.

```ts
// Call the MTProto ping function ping#7abe77ec
const pong = await client.invoke({ _: "ping", ping_id: 2132n });

// https://core.telegram.org/method/messages.sendMessage
const updates = await client.invoke({
  _: "messages.sendMessage",
  peer: { _: "inputPeerSelf" },
  message: "Hey there!",
  random_id: 2132n,
});
```

You can learn more on direct interactions with the Telegram API
[here](/interacting-with-telegram-api).
