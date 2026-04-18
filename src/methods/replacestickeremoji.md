---
title: replaceStickerEmoji
parent: /methods
metas:
  description: Replace a sticker's emoji.
---

Replace a sticker's emoji.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_fileId" data-anchor="true"><span class="font-bold">fileId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the sticker.

</div></div></div><div><div class="font-mono" id="p_emoji" data-anchor="true"><span class="font-bold">emoji</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The new emoji to use for the sticker.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.replaceStickerEmoji(fileId, emoji);
```



