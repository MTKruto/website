---
title: UpdateNewMessage
parent: /types
metas:
  description: A message was sent or received.
---

A message was sent or received.

```ts
// Handle text messages
client.on("message:text", (ctx) => {
  const receivedOrSent = ctx.update.message.isOutgoing ? "sent" : "received";
  console.log("Just", receivedOrSent, "a text message:", ctx.update.message.text);
});

// Handle other messages
client.on("message", (ctx) => {
  if (ctx.update.message.isOutgoing) {
   console.log("Just sent a message.");
  }
});
```

Note that updates on outgoing messages are disabled by default for bots.

### Properties



