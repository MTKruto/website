---
title: endTakeoutSession
parent: /methods
metas:
  description: End a takeout session. User-only.
---

End a takeout session.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_takeoutId" data-anchor="true"><span class="font-bold">takeoutId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a takeout session.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isFailed" data-anchor="true"><span class="font-bold">isFailed</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the takeout failed. Defaults to false.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.endTakeoutSession(takeoutId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.endTakeoutSession(takeoutId, { isFailed });
```



