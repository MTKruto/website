---
title: getPollVoters
parent: /methods
metas:
  description: Get poll voters. User-only.
---

Get poll voters.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the poll.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message that includes the poll.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_optionIndex" data-anchor="true"><span class="font-bold">optionIndex</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The index of an option. If specified, only voters of that option will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An offset key returned by a previous result.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/pollvoterlist">PollVoterList</a></div>

### Syntax

```ts
// Required parameters only.
await client.getPollVoters(chatId, messageId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getPollVoters(chatId, messageId, {
    optionIndex,
    offset,
    limit,
});
```



