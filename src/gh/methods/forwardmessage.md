---
title: forwardMessage
parent: /methods
metas:
  description: Forward a single message.
---

Forward a single message.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_from" data-anchor="true"><span class="font-bold">from</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to forward the message from.

</div></div></div><div><div class="font-mono" id="p_to" data-anchor="true"><span class="font-bold">to</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to forward the message to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message to forward.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message">Message</a></div><div class="pl-3"><div class="no-margin">

The forwarded message.

</div></div>

### Syntax

```ts
await client.forwardMessage(from, to, messageId);
```



