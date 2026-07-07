---
title: replaceStickerInStickerSet
parent: /methods
metas:
  description: Replace a sticker in a sticker set.
---

Replace a sticker in a sticker set.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_currentStickerFileId" data-anchor="true"><span class="font-bold">currentStickerFileId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the current sticker.

</div></div></div><div><div class="font-mono" id="p_newSticker" data-anchor="true"><span class="font-bold">newSticker</span><span class="opacity-50">:</span> <span href="/">InputSticker</span></div><div class="pl-3"><div class="no-margin">

The new sticker to use.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.replaceStickerInStickerSet(currentStickerFileId, newSticker);
```



