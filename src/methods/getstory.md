---
title: getStory
---

Retrieve a single story. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to retrieve the story from.

</div></div></div><div><div class="font-mono" id="p_storyId" data-anchor><span class="font-bold">storyId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the story to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/story"  >Story</a> <span class="opacity-50">|</span> <span>null</span></div><div class="pl-3"><div class="no-margin">

The retrieved story.

</div></div>

### Syntax

```ts
await client.getStory(chatId, storyId);
```



