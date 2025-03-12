---
title: setLocation
---

Set the location of the current user. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_address" data-anchor><span class="font-bold">address</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Written address of the business. If not set, address will be removed.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_latitude" data-anchor><span class="font-bold">latitude</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Latitude of the business.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_longitude" data-anchor><span class="font-bold">longitude</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Longitude of the business.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.setLocation( { address, latitude, longitude });
```



