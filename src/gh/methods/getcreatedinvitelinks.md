---
title: getCreatedInviteLinks
---

Get the invite links created for a chat. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_by" data-anchor><span class="font-bold">by</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of an admin. If specified, only invite links created by this admin will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range 1-100. Defaults to 100.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_revoked" data-anchor><span class="font-bold">revoked</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether only revoked invite links must be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_afterDate" data-anchor><span class="font-bold">afterDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

Only get the invite links created after a specific date.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_afterInviteLink" data-anchor><span class="font-bold">afterInviteLink</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Only get the invite links created after a specific invite link.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/invitelink"  >InviteLink</a><span class="opacity-50">[]</span></div>

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



