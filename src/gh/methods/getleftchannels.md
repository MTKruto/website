---
title: getLeftChannels
parent: /methods
metas:
  description: Get left channels. User-only.
---

Get left channels.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_takeoutId" data-anchor="true"><span class="font-bold">takeoutId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a takeout session.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of results to skip.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/leftchannellist">LeftChannelList</a></div>

### Syntax

```ts
// Required parameters only.
await client.getLeftChannels(takeoutId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getLeftChannels(takeoutId, { offset });
```



