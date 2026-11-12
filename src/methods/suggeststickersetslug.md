---
title: suggestStickerSetSlug
parent: /methods
metas:
  description: Suggest a sticker set slug from its title. User-only.
---

Suggest a sticker set slug from its title.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

A sticker set title.

</div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div><div class="pl-3"><div class="no-margin">

The suggested slug.

</div></div>

### Syntax

```ts
await client.suggestStickerSetSlug(title);
```



