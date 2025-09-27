---
title: getJoinRequests
parent: /methods
---

Get pending join requests in a chat.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat with the join requests.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_inviteLink" data-anchor><span class="font-bold">inviteLink</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An invite link. If specified, only join requests from that invite link will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_search" data-anchor><span class="font-bold">search</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A search query. If specified, only matching users results will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fromDate" data-anchor><span class="font-bold">fromDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time. If specified, results will be fetched from that date.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fromUserId" data-anchor><span class="font-bold">fromUserId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

A user ID. If specified, results will be fetched from that user.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/joinrequest"  >JoinRequest</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Required parameters only.
await client.getJoinRequests(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getJoinRequests(chatId, {
    inviteLink,
    search,
    fromDate,
    fromUserId,
    limit,
});
```



