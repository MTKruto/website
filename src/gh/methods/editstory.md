---
title: editStory
parent: /methods
metas:
  description: Edit a story. User-only.
---

Edit a story.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat including the story.

</div></div></div><div><div class="font-mono" id="p_storyId" data-anchor="true"><span class="font-bold">storyId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the story to edit.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/story">Story</a></div><div class="pl-3"><div class="no-margin">

The edited story.

</div></div>

### Syntax

```ts
await client.editStory(chatId, storyId);
```



