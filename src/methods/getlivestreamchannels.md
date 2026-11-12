---
title: getLiveStreamChannels
parent: /methods
metas:
  description: Get live stream channels. User-only.
---

Get live stream channels.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/livestreamchannel"  >LiveStreamChannel</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getLiveStreamChannels(id);
```



