---
title: forwardMessages
parent: /methods
metas:
  description: Forward multiple messages.
---

Forward multiple messages.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_from" data-anchor="true"><span class="font-bold">from</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to forward the messages from.

</div></div></div><div><div class="font-mono" id="p_to" data-anchor="true"><span class="font-bold">to</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to forward the messages to.

</div></div></div><div><div class="font-mono" id="p_messageIds" data-anchor="true"><span class="font-bold">messageIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the messages to forward.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message">Message</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The forwarded messages.

</div></div>

### Syntax

```ts
await client.forwardMessages(from, to, messageIds);
```



