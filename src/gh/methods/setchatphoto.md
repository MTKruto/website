---
title: setChatPhoto
parent: /methods
metas:
  description: Set a chat's photo.
---

Set a chat's photo.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_photo" data-anchor="true"><span class="font-bold">photo</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

A photo to set as the chat's photo.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setChatPhoto(chatId, photo);
```



