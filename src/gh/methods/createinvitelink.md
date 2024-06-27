---
title: createInviteLink
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to create the invite link for.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">title</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An optional title to be attached to the link that can only be seen by admins.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">expireAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

A point in time within the future in which the invite link will be invalidated.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The times the invite link can be used. Cannot be specified while `requireApproval` is `true`.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">requireApproval</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether an admin must explicitly approve join requests originating from this invite link. Cannot be `true` while `limit` is specified.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/invitelink"  >InviteLink</a></div>

### Syntax

```ts
// Required parameters only.
await client.createInviteLink(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createInviteLink(chatId, {
    title,
    expireAt,
    limit,
    requireApproval,
});
```



