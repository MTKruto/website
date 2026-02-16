---
title: scheduleVideoChat
parent: /methods
metas:
  description: Schedule a video chat. User-only. 
---

Schedule a video chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to schedule the video chat in.

</div></div></div><div><div class="font-mono" id="p_startAt" data-anchor="true"><span class="font-bold">startAt</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

A point in time within the future in which the video chat will be started.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The video chat's title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_liveStream" data-anchor="true"><span class="font-bold">liveStream</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether this is going to be a live stream.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/videochatscheduled">VideoChatScheduled</a></div><div class="pl-3"><div class="no-margin">

The scheduled video chat.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.scheduleVideoChat(chatId, startAt);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.scheduleVideoChat(chatId, startAt, { title, liveStream });
```



