---
title: setMessageTtl
---

Set the time to live of the messages of a chat. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div><div class="font-mono" id="p_messageTtl" data-anchor><span class="font-bold">messageTtl</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The time to live of the messages.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setMessageTtl(chatId, messageTtl);
```



