---
title: InviteLink
parent: /types
---

A chat invite link.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_inviteLink" data-anchor><span class="font-bold">inviteLink</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The link itself.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_creator" data-anchor><span class="font-bold">creator</span><span class="opacity-50">:</span> <a href="/gh/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The user who created the invite link.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_requiresApproval" data-anchor><span class="font-bold">requiresApproval</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether an admin must explicitly approve join requests originating from this invite link.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_revoked" data-anchor><span class="font-bold">revoked</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the invite link is revoked.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An optional title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_expiresAt" data-anchor><span class="font-bold">expiresAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time within the future in which the invite link will be revoked.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The times the invite link can be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_pendingJoinRequestCount" data-anchor><span class="font-bold">pendingJoinRequestCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of pending join requests originating from this invite link.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_subscriptionPrice" data-anchor><span class="font-bold">subscriptionPrice</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The amount of stars required to renew the subscription.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_subscriptionExpiresIn" data-anchor><span class="font-bold">subscriptionExpiresIn</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The remaining duration (in seconds) until the subscription expires.

</div></div></div></div>

