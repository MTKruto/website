---
title: setDefaultMessageTtl
parent: /methods
metas:
  description: Set the default message TTL. User-only.
---

Set the default message TTL.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_ttl" data-anchor="true"><span class="font-bold">ttl</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The default message TTL in seconds.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setDefaultMessageTtl(ttl);
```



