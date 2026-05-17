---
title: deleteAccount
parent: /methods
metas:
  description: Delete the current account. User-only.
---

Delete the current account.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_reason" data-anchor="true"><span class="font-bold">reason</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The reason of the deletion.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_password" data-anchor="true"><span class="font-bold">password</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The account's password.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.deleteAccount(reason);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.deleteAccount(reason, { password });
```



