---
title: UpdateDeletedStory
parent: /types
metas:
  description: A story was deleted.  ``` client.on("deletedStory", (ctx) => {   console.log("The story", ctx.update.deletedStory, "was deleted"); }); ```
---

A story was deleted.

```ts
client.on("deletedStory", (ctx) => {
  console.log("The story", ctx.update.deletedStory, "was deleted");
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_deletedStory" data-anchor="true"><span class="font-bold">deletedStory</span><span class="opacity-50">:</span> <a href="/gh/types/storyreference">StoryReference</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div></div>

