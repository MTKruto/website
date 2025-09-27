---
title: getCustomEmojiStickers
parent: /methods
---

Get custom emoji documents for download.<span class="select-none">  <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span> <span class="opacity-50">|</span> <span>string</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

Identifier of one or more of custom emojis.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/sticker"  >Sticker</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The custom emoji documents.

</div></div>

### Syntax

```ts
await client.getCustomEmojiStickers(id);
```



