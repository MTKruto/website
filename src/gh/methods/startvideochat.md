---
title: startVideoChat
---

Start a video chat. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to start the video chat in.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The video chat's title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_liveStream" data-anchor><span class="font-bold">liveStream</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether this is going to be a live stream.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/videochatactive"  >VideoChatActive</a></div>

### Syntax

```ts
// Required parameters only.
await client.startVideoChat(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.startVideoChat(chatId, { title, liveStream });
```



