---
title: getHistory
---

Get chat history.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to get its history.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_fromMessageId" data-anchor><span class="font-bold">fromMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message. If specified, the chat history will be fetched from that message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message"  >Message</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Required parameters only.
await client.getHistory(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getHistory(chatId, { fromMessageId, limit });
```



