---
title: SecretMessageVenue
parent: /types
metas:
  description: A secret message sharing a venue.
---

A secret message sharing a venue.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the secret chat that the message belongs to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The message's identifier.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyToMessageId" data-anchor="true"><span class="font-bold">replyToMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message that this message replies to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isSilent" data-anchor="true"><span class="font-bold">isSilent</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message was sent silently.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_ttl" data-anchor="true"><span class="font-bold">ttl</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The message's time-to-live.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_viaBot" data-anchor="true"><span class="font-bold">viaBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The name of the inline bot that was used to send the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;venue&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_venue" data-anchor="true"><span class="font-bold">venue</span><span class="opacity-50">:</span> <a href="/types/venue">Venue</a></div></div><div class="pl-3"><div class="no-margin">

The venue.

</div></div></div></div>

