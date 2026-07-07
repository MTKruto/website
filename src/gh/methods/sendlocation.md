---
title: sendLocation
parent: /methods
metas:
  description: Send a location.
---

Send a location.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the location to.

</div></div></div><div><div class="font-mono" id="p_latitude" data-anchor="true"><span class="font-bold">latitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The location's latitude.

</div></div></div><div><div class="font-mono" id="p_longitude" data-anchor="true"><span class="font-bold">longitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The location's longitude.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagelocation">MessageLocation</a></div><div class="pl-3"><div class="no-margin">

The sent location.

</div></div>

### Syntax

```ts
await client.sendLocation(chatId, latitude, longitude);
```



