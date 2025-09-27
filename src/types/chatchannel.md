---
title: ChatChannel
parent: /types
---

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The title of the chat or channel.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_username" data-anchor><span class="font-bold">username</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The main username of the chat or channel.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_also" data-anchor><span class="font-bold">also</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The chat or channel's additional usernames.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isScam" data-anchor><span class="font-bold">isScam</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat or channel has been identified as scam.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isFake" data-anchor><span class="font-bold">isFake</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat or channel has been identified as an impersonator.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isVerified" data-anchor><span class="font-bold">isVerified</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat or channel has been verified.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isRestricted" data-anchor><span class="font-bold">isRestricted</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat or channel has been restricted.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_restrictionReason" data-anchor><span class="font-bold">restrictionReason</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/restrictionreason"  >RestrictionReason</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The reason why the chat or channel has been restricted.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;channel&quot;</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_photo" data-anchor><span class="font-bold">photo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/photo"  >Photo</a></div></div><div class="pl-3"><div class="no-margin">

The chat's photo.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_videoChatId" data-anchor><span class="font-bold">videoChatId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The channel's video chat ID.

</div></div></div></div>

