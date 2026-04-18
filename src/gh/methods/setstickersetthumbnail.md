---
title: setStickerSetThumbnail
parent: /methods
metas:
  description: Set a sticker set's thumbnail.
---

Set a sticker set's thumbnail.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_slug" data-anchor="true"><span class="font-bold">slug</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The slug of the sticker set or its link.

</div></div></div><div><div class="font-mono" id="p_thumbnail" data-anchor="true"><span class="font-bold">thumbnail</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The new thumbnail of the sticker set.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setStickerSetThumbnail(slug, thumbnail);
```



