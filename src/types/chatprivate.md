---
title: ChatPrivate
---

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;private&quot;</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">color</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Identifier of a color that can be displayed instead of the chat's photo.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether this is a bot's chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">firstName</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The first name of the user.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">lastName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The last name of the user.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">username</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The user's main username.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">also</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The user's additional usernames.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isScam</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the user has been identified as scam.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isFake</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the user has been identified as an impersonator.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isSupport</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the user is official support.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isVerified</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the user has been verified.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isRestricted</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the user has been restricted.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">restrictionReason</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/restrictionreason"  >RestrictionReason</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The reason why the user has been restricted.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">photo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/photo"  >Photo</a></div></div><div class="pl-3"><div class="no-margin">

The chat's photo.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">birthday</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/birthday"  >Birthday</a></div></div><div class="pl-3"><div class="no-margin">

The user's birthday.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">address</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The written address of the business.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">location</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/location"  >Location</a></div></div><div class="pl-3"><div class="no-margin">

The exact location of the business.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">openingHours</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/openinghours"  >OpeningHours</a></div></div><div class="pl-3"><div class="no-margin">

The opening hours of the business.

</div></div></div></div>
