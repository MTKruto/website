---
title: setMessageTtl
parent: /methods
---

Set the time to live of the messages of a chat.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_messageTtl" data-anchor><span class="font-bold">messageTtl</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The time to live of the messages in seconds.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setMessageTtl(chatId, messageTtl);
```



