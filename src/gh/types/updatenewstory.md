---
title: UpdateNewStory
parent: /types
---

A story was posted.

```ts
client.on("story", (ctx) => {
  console.log("title" in ctx.chat ? ctx.chat.title : ctx.chat.firstName, "posted a story");
  console.log(ctx.story);
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_story" data-anchor><span class="font-bold">story</span><span class="opacity-50">:</span> <a href="/gh/types/story"  >Story</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div></div>

