---
title: Sticker
parent: /types
metas:
  description: A sticker.
---

A sticker.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_fileId" data-anchor="true"><span class="font-bold">fileId</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A file identifier that can be used to download or reuse this file.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileUniqueId" data-anchor="true"><span class="font-bold">fileUniqueId</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A file identifier that can be used to identify this file.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;regular&quot;</span> <span class="opacity-50">|</span> <span>&quot;mask&quot;</span> <span class="opacity-50">|</span> <span>&quot;customEmoji&quot;</span></div></div><div class="pl-3"><div class="no-margin">

Type of the sticker, currently one of "regular", "mask", "customEmoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_width" data-anchor="true"><span class="font-bold">width</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Sticker width

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_height" data-anchor="true"><span class="font-bold">height</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Sticker height

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAnimated" data-anchor="true"><span class="font-bold">isAnimated</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

True, if the sticker is [animated](https://telegram.org/blog/animated-stickers)

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isVideo" data-anchor="true"><span class="font-bold">isVideo</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

True, if the sticker is a [video sticker](https://telegram.org/blog/video-stickers-better-reactions)

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_thumbnails" data-anchor="true"><span class="font-bold">thumbnails</span><span class="opacity-50">:</span> <a href="/types/thumbnail">Thumbnail</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

Sticker thumbnail in the .WEBP or .JPG format

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_emoji" data-anchor="true"><span class="font-bold">emoji</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Emoji associated with the sticker

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_setName" data-anchor="true"><span class="font-bold">setName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Name of the sticker set to which the sticker belongs

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_premiumAnimation" data-anchor="true"><span class="font-bold">premiumAnimation</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">File</span></div></div><div class="pl-3"><div class="no-margin">

For premium regular stickers, premium animation for the sticker

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_maskPosition" data-anchor="true"><span class="font-bold">maskPosition</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/maskposition">MaskPosition</a></div></div><div class="pl-3"><div class="no-margin">

For mask stickers, the position where the mask should be placed

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_customEmojiId" data-anchor="true"><span class="font-bold">customEmojiId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

For custom emoji stickers, unique identifier of the custom emoji

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_needsRepainting" data-anchor="true"><span class="font-bold">needsRepainting</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileSize" data-anchor="true"><span class="font-bold">fileSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

File size in bytes

</div></div></div></div>

