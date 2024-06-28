---
title: addStoryToHighlights
---

Add a single story to highlights. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that has the story.

</div></div></div><div><div class="font-mono"><span class="font-bold">storyId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the story to add to highlights.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.addStoryToHighlights(chatId, storyId);
```



