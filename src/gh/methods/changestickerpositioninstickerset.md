---
title: changeStickerPositionInStickerSet
parent: /methods
metas:
  description: Change the position of a sticker in its set.
---

Change the position of a sticker in its set.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_fileId" data-anchor="true"><span class="font-bold">fileId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the sticker.

</div></div></div><div><div class="font-mono" id="p_position" data-anchor="true"><span class="font-bold">position</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The new position of the sticker.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.changeStickerPositionInStickerSet(fileId, position);
```



