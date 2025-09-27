---
title: getStories
parent: /methods
---

Retrieve multiple stories.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_storyIds" data-anchor><span class="font-bold">storyIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the stories to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/story"  >Story</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The retrieved stories.

</div></div>

### Syntax

```ts
await client.getStories(chatId, storyIds);
```



