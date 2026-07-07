---
title: deleteAccount
parent: /methods
metas:
  description: Delete the current account. User-only.
---

Delete the current account.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_reason" data-anchor="true"><span class="font-bold">reason</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The reason for the deletion.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.deleteAccount(reason);
```



