---
title: getStories
---

Retrieve multiple stories. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to retrieve the stories from.

</div></div></div><div><div class="font-mono" id="p_storyIds" data-anchor><span class="font-bold">storyIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the stories to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/story"  >Story</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getStories(chatId, storyIds);
```



