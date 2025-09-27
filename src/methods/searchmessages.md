---
title: searchMessages
parent: /methods
---

Search for messages.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

A chat ID. If specified, only the corresponding chat will be searched.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_query" data-anchor><span class="font-bold">query</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A search query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_from" data-anchor><span class="font-bold">from</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

If specified, only messages sent by `from` are returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_filter" data-anchor><span class="font-bold">filter</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messagesearchfilter"  >MessageSearchFilter</a></div></div><div class="pl-3"><div class="no-margin">

A search filter to apply.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A message identifier to start searching after.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addOffset" data-anchor><span class="font-bold">addOffset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Additional offset.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_threadId" data-anchor><span class="font-bold">threadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message thread to search in.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/message"  >Message</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.searchMessages( {
    chatId,
    query,
    from,
    filter,
    offset,
    addOffset,
    threadId,
    limit,
});
```



