---
title: getCreatedInviteLinks
parent: /methods
---

Get the invite links created for a chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_by" data-anchor><span class="font-bold">by</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of an admin. If specified, only invite links created by this admin will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range 1-100. Defaults to 100.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_revoked" data-anchor><span class="font-bold">revoked</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether only revoked invite links must be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_afterDate" data-anchor><span class="font-bold">afterDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Only get the invite links created after a specific date.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_afterInviteLink" data-anchor><span class="font-bold">afterInviteLink</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Only get the invite links created after a specific invite link.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/invitelink"  >InviteLink</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.getCreatedInviteLinks(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getCreatedInviteLinks(chatId, {
    by,
    limit,
    revoked,
    afterDate,
    afterInviteLink,
});
```



