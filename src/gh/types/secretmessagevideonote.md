---
title: SecretMessageVideoNote
parent: /types
metas:
  description: A secret message sharing a video note.
---

A secret message sharing a video note.

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

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_mediaGroupId" data-anchor="true"><span class="font-bold">mediaGroupId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The message's media group ID.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_caption" data-anchor="true"><span class="font-bold">caption</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The message's caption.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50">:</span> <a href="/gh/types/secretmessageentity">SecretMessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the message's caption.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;videoNote&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_videoNote" data-anchor="true"><span class="font-bold">videoNote</span><span class="opacity-50">:</span> <a href="/gh/types/videonote">VideoNote</a></div></div><div class="pl-3"><div class="no-margin">

The video note included in the message.

</div></div></div></div>

