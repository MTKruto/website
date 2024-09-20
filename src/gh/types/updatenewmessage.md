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

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_message" data-anchor><span class="font-bold">message</span><span class="opacity-50">:</span> <a href="/gh/types/message"  >Message</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The sent or received message

</div></div></div></div>

