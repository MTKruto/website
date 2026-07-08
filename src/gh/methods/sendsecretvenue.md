---
title: sendSecretVenue
parent: /methods
metas:
  description: Send a venue to a secret chat. User-only.
---

Send a venue to a secret chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the secret chat.

</div></div></div><div><div class="font-mono" id="p_latitude" data-anchor="true"><span class="font-bold">latitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The latitude of the venue.

</div></div></div><div><div class="font-mono" id="p_longitude" data-anchor="true"><span class="font-bold">longitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The longitude of the venue.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the venue.

</div></div></div><div><div class="font-mono" id="p_address" data-anchor="true"><span class="font-bold">address</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The written address of the venue.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.sendSecretVenue(id, latitude, longitude, title, address);
```



