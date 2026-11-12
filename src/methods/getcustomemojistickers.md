---
title: getCustomEmojiStickers
parent: /methods
metas:
  description: Get custom emoji documents for download.
---

Get custom emoji documents for download.<span class="select-none">  <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span> <span class="opacity-50">|</span> <span>string</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

Identifier of one or more custom emojis.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/sticker"  >Sticker</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The custom emoji documents.

</div></div>

### Syntax

```ts
await client.getCustomEmojiStickers(id);
```



