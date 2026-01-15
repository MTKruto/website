---
title: downloadLiveStreamSegment
parent: /methods
---

Download a live stream segment.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.

</div></div></div><div><div class="font-mono" id="p_channelId" data-anchor><span class="font-bold">channelId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

Stream channel ID.

</div></div></div><div><div class="font-mono" id="p_scale" data-anchor><span class="font-bold">scale</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

Stream channel scale.

</div></div></div><div><div class="font-mono" id="p_timestamp" data-anchor><span class="font-bold">timestamp</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

Millisecond timestamp of the chunk to download.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_quality" data-anchor><span class="font-bold">quality</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>&quot;low&quot;</span> <span class="opacity-50">|</span> <span>&quot;medium&quot;</span> <span class="opacity-50">|</span> <span>&quot;high&quot;</span></div></div><div class="pl-3"><div class="no-margin">

Video quality.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_signal" data-anchor><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span></div></div><div class="pl-3"><div class="no-margin">

Download abort signal.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer noopener">Uint8Array</a></div>

### Syntax

```ts
// Required parameters only.
await client.downloadLiveStreamSegment(id, channelId, scale, timestamp);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.downloadLiveStreamSegment(id, channelId, scale, timestamp, {
    quality,
    signal,
});
```



