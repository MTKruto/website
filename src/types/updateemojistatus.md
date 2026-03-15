---
title: UpdateEmojiStatus
parent: /types
metas:
  description: A user's emoji status was changed. User-only.
---

A user's emoji status was changed. User-only.

```ts
client.on("emojiStatus", (ctx) => {
  // ctx.update.emojiStatus
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_emojiStatus" data-anchor="true"><span class="font-bold">emojiStatus</span><span class="opacity-50">:</span> <a href="/types/emojistatus">EmojiStatus</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The new emoji status.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <span>number</span></div></div></div></div>

