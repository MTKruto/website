---
title: ClaimedGift
parent: /types
metas:
  description: A gift claimed by a user or a channel.
---

A gift claimed by a user or a channel.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_date" data-anchor="true"><span class="font-bold">date</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The time when the gift was claimed.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_gift" data-anchor="true"><span class="font-bold">gift</span><span class="opacity-50">:</span> <a href="/gh/types/gift">Gift</a></div></div><div class="pl-3"><div class="no-margin">

The gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_public" data-anchor="true"><span class="font-bold">public</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the gift is publicly visible.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sender" data-anchor="true"><span class="font-bold">sender</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/chatp">ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The sender of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_message" data-anchor="true"><span class="font-bold">message</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A message shared when the gift was sent.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the service message announcing the receival of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_convertionStars" data-anchor="true"><span class="font-bold">convertionStars</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The amount of stars the gift would be worth.

</div></div></div></div>

