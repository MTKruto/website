---
title: getStoriesInAlbum
parent: /methods
metas:
  description: Get stories inside an album. User-only.
---

Get stories inside an album.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat including albums.

</div></div></div><div><div class="font-mono" id="p_albumId" data-anchor="true"><span class="font-bold">albumId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of an album.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/albumstorylist">AlbumStoryList</a></div>

### Syntax

```ts
await client.getStoriesInAlbum(chatId, albumId);
```



