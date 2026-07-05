---
title: removeMusicFromProfile
parent: /methods
metas:
  description: Remove music from profile. User-only.
---

Remove music from profile.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_fileId" data-anchor="true"><span class="font-bold">fileId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the audio file to remove from profile.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.removeMusicFromProfile(fileId);
```



