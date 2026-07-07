---
title: sendVideo
parent: /methods
metas:
  description: Send a video.
---

Send a video.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the video to.

</div></div></div><div><div class="font-mono" id="p_video" data-anchor="true"><span class="font-bold">video</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The video to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagevideo">MessageVideo</a></div><div class="pl-3"><div class="no-margin">

The sent video.

</div></div>

### Syntax

```ts
await client.sendVideo(chatId, video);
```



