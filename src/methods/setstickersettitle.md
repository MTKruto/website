---
title: setStickerSetTitle
parent: /methods
metas:
  description: Set the title of a sticker set.
---

Set the title of a sticker set.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_slug" data-anchor="true"><span class="font-bold">slug</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The slug of the sticker set or its link.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The sticker set's new title.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setStickerSetTitle(slug, title);
```



