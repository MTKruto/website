---
title: UpdateEmojiStatusRemoved
parent: /types
metas:
  description: A user's emoji status was removed. User-only.
---

A user's emoji status was removed. User-only.

```ts
client.on("emojiStatusRemoved", (ctx) => {
  // ctx.update.emojiStatusRemoved
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_emojiStatusRemoved" data-anchor="true"><span class="font-bold">emojiStatusRemoved</span><span class="opacity-50">:</span> true</div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <span>number</span></div></div></div></div>

