---
title: reorderStoriesInAlbum
parent: /methods
metas:
  description: Reorder stories in an album. User-only.
---

Reorder stories in an album.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat including the album.

</div></div></div><div><div class="font-mono" id="p_albumId" data-anchor="true"><span class="font-bold">albumId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of an album.

</div></div></div><div><div class="font-mono" id="p_storyIds" data-anchor="true"><span class="font-bold">storyIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The new order of stories.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/storyalbum">StoryAlbum</a></div>

### Syntax

```ts
await client.reorderStoriesInAlbum(chatId, albumId, storyIds);
```



