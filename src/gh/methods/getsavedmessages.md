---
title: getSavedMessages
parent: /methods
metas:
  description: Get messages saved from a specific chat.
---

Get messages saved from a specific chat.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_offsetId" data-anchor="true"><span class="font-bold">offsetId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message. If specified, the messages will be fetched from that message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offsetDate" data-anchor="true"><span class="font-bold">offsetDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time. If specified, the messages will be fetched from that date.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addOffset" data-anchor="true"><span class="font-bold">addOffset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Additional offset.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message">Message</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Required parameters only.
await client.getSavedMessages(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getSavedMessages(chatId, {
    offsetId,
    offsetDate,
    addOffset,
    limit,
});
```



