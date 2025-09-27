---
title: updateProfile
parent: /methods
---

Update the profile of the current user. At least one parameter must be specified.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_firstName" data-anchor><span class="font-bold">firstName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

New account first name.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_lastName" data-anchor><span class="font-bold">lastName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

New account last name.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_bio" data-anchor><span class="font-bold">bio</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

New account bio.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.updateProfile( { firstName, lastName, bio });
```



