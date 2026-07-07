---
title: createStickerSet
parent: /methods
metas:
  description: Create a sticker set.
---

Create a sticker set.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_name" data-anchor="true"><span class="font-bold">name</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The sticker set's name.

</div></div></div><div><div class="font-mono" id="p_slug" data-anchor="true"><span class="font-bold">slug</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The sticker set's slug.

</div></div></div><div><div class="font-mono" id="p_stickers" data-anchor="true"><span class="font-bold">stickers</span><span class="opacity-50">:</span> <span href="/">InputSticker</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The initial stickers of the set.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">StickerSet</span></div>

### Syntax

```ts
await client.createStickerSet(name, slug, stickers);
```



