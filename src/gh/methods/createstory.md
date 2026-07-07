---
title: createStory
parent: /methods
metas:
  description: Create a story. User-only.
---

Create a story.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div></div><div><div class="font-mono" id="p_content" data-anchor="true"><span class="font-bold">content</span><span class="opacity-50">:</span> <span href="/">InputStoryContent</span></div><div class="pl-3"><div class="no-margin">

The content of the story.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">Story</span></div><div class="pl-3"><div class="no-margin">

The created story.

</div></div>

### Syntax

```ts
await client.createStory(chatId, content);
```



