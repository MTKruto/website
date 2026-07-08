---
title: getProfileMusic
parent: /methods
metas:
  description: Get a user's profile music. User-only.
---

Get a user's profile music.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user whose profile music should be fetched.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/audio">Audio</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getProfileMusic(userId);
```



