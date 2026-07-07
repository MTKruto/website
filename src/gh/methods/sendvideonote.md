---
title: sendVideoNote
parent: /methods
metas:
  description: Send a video note.
---

Send a video note.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the video note to.

</div></div></div><div><div class="font-mono" id="p_videoNote" data-anchor="true"><span class="font-bold">videoNote</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The video note to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagevideonote">MessageVideoNote</a></div><div class="pl-3"><div class="no-margin">

The sent video note.

</div></div>

### Syntax

```ts
await client.sendVideoNote(chatId, videoNote);
```



