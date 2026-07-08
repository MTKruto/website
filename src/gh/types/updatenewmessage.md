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

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;message&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_message" data-anchor="true"><span class="font-bold">message</span><span class="opacity-50">:</span> <a href="/gh/types/message">Message</a></div></div><div class="pl-3"><div class="no-margin">

The sent or received message.

</div></div></div></div>

