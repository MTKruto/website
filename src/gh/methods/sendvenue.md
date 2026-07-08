---
title: sendVenue
parent: /methods
metas:
  description: Send a venue.
---

Send a venue.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the venue to.

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

<div class="font-mono"><a href="/gh/types/messagevenue">MessageVenue</a></div><div class="pl-3"><div class="no-margin">

The sent venue.

</div></div>

### Syntax

```ts
await client.sendVenue(chatId, latitude, longitude, title, address);
```



