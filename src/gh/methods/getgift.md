---
title: getGift
parent: /methods
metas:
  description: Get a gift using its slug. User-only.
---

Get a gift using its slug.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_slug" data-anchor="true"><span class="font-bold">slug</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The slug of a gift.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/gift">Gift</a></div>

### Syntax

```ts
await client.getGift(slug);
```



