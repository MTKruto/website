---
title: UpdateDeletedStory
parent: /types
metas:
  description: A story was deleted.
---

A story was deleted.

```ts
client.on("deletedStory", (ctx) => {
  console.log("The story", ctx.update.deletedStory, "was deleted");
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;deletedStory&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_deletedStory" data-anchor="true"><span class="font-bold">deletedStory</span><span class="opacity-50">:</span> <a href="/types/storyreference">StoryReference</a></div></div></div></div>

