---
title: UpdateNewMessage
---

A message was sent or received.

```ts
// Handle text messages
client.on("message:text", (ctx) => {
  const receivedOrSent = ctx.message.out ? "sent" : "received";
  console.log("Just", receivedOrSent, "a text message:", ctx.message.text);
});

// Handle other messages
client.on("message", (ctx) => {
  if (ctx.message.out) {
   console.log("Just sent a message.");
  }
});
```

Note that updates on outgoing messages are disabled by default for bots.

### Properties



