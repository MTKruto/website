---
title: vote
---

Cast a vote.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the poll.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message that includes the poll.

</div></div></div><div><div class="font-mono" id="p_optionIndexes" data-anchor><span class="font-bold">optionIndexes</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The indexes of the options to cast for.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.vote(chatId, messageId, optionIndexes);
```



