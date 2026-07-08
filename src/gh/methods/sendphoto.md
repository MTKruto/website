---
title: sendPhoto
parent: /methods
metas:
  description: Send a photo.
---

Send a photo.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the photo to.

</div></div></div><div><div class="font-mono" id="p_photo" data-anchor="true"><span class="font-bold">photo</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The photo to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagephoto">MessagePhoto</a></div><div class="pl-3"><div class="no-margin">

The sent photo.

</div></div>

### Syntax

```ts
await client.sendPhoto(chatId, photo);
```



