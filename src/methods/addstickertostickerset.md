---
title: addStickerToStickerSet
parent: /methods
metas:
  description: Add a sticker to a sticker set.
---

Add a sticker to a sticker set.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_slug" data-anchor="true"><span class="font-bold">slug</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The slug of the sticker set or its link.

</div></div></div><div><div class="font-mono" id="p_sticker" data-anchor="true"><span class="font-bold">sticker</span><span class="opacity-50">:</span> <a href="/types/inputsticker">InputSticker</a></div><div class="pl-3"><div class="no-margin">

The sticker to add.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of the owner of the sticker set. Required for bots. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.addStickerToStickerSet(slug, sticker);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addStickerToStickerSet(slug, sticker, { userId });
```



