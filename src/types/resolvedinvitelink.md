---
title: ResolvedInviteLink
parent: /types
metas:
  description: A resolved invite link.
---

A resolved invite link.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;group&quot;</span> <span class="opacity-50">|</span> <span>&quot;supergroup&quot;</span> <span class="opacity-50">|</span> <span>&quot;channel&quot;</span></div></div><div class="pl-3"><div class="no-margin">

The type of the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isPublic" data-anchor="true"><span class="font-bold">isPublic</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat is public.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isApprovalNeeded" data-anchor="true"><span class="font-bold">isApprovalNeeded</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether approval is needed by an admin of the chat prior to joining.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isVerified" data-anchor="true"><span class="font-bold">isVerified</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat is verified.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isScam" data-anchor="true"><span class="font-bold">isScam</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat has been identified as a scam.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isFake" data-anchor="true"><span class="font-bold">isFake</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat has been identifier as a fake.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAlreadySubscribed" data-anchor="true"><span class="font-bold">isAlreadySubscribed</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether no repayment is required to join the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The title of the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_description" data-anchor="true"><span class="font-bold">description</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The description of the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_photo" data-anchor="true"><span class="font-bold">photo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/photo">Photo</a></div></div><div class="pl-3"><div class="no-margin">

The chat's photo.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_memberCount" data-anchor="true"><span class="font-bold">memberCount</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The chat's member count.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_members" data-anchor="true"><span class="font-bold">members</span><span class="opacity-50">:</span> <a href="/types/user">User</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

A preview of the chat's members.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_color" data-anchor="true"><span class="font-bold">color</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The chat's color.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_subscriptionPeriod" data-anchor="true"><span class="font-bold">subscriptionPeriod</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The chat's subscription period.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_subscriptionPrice" data-anchor="true"><span class="font-bold">subscriptionPrice</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The chat's subscription price.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_verificationBotId" data-anchor="true"><span class="font-bold">verificationBotId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The chat verification bot's identifier.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_verificationCustomEmojiId" data-anchor="true"><span class="font-bold">verificationCustomEmojiId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The chat verification's custom emoji identifier.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_verificationDescription" data-anchor="true"><span class="font-bold">verificationDescription</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The chat verification's description.

</div></div></div></div>

