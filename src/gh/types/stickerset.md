---
title: StickerSet
parent: /types
metas:
  description: A sticker (or emoji) set.
---

A sticker (or emoji) set.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The unique identifier of the set.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_name" data-anchor="true"><span class="font-bold">name</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The set's slug.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The set's title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;regular&quot;</span> <span class="opacity-50">|</span> <span>&quot;mask&quot;</span> <span class="opacity-50">|</span> <span>&quot;customEmoji&quot;</span></div></div><div class="pl-3"><div class="no-margin">

The type of the set.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_stickers" data-anchor="true"><span class="font-bold">stickers</span><span class="opacity-50">:</span> <a href="/gh/types/sticker">Sticker</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The stickers (or emojis) in the set.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_thumbnails" data-anchor="true"><span class="font-bold">thumbnails</span><span class="opacity-50">:</span> <a href="/gh/types/thumbnail">Thumbnail</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

Thumbnails if available.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAdaptive" data-anchor="true"><span class="font-bold">isAdaptive</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the emojis in the set are adaptive.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canSetAsChannelStatus" data-anchor="true"><span class="font-bold">canSetAsChannelStatus</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the emojis in the set can be set as channel status.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isCreator" data-anchor="true"><span class="font-bold">isCreator</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the current account is the creator of the set.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isOfficial" data-anchor="true"><span class="font-bold">isOfficial</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the set is official.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isArchived" data-anchor="true"><span class="font-bold">isArchived</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the set is archived.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addedAt" data-anchor="true"><span class="font-bold">addedAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time in which the set was added to the current account.

</div></div></div></div>

