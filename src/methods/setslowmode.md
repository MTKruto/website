---
title: setSlowMode
---

Change slow mode in a group. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the group to change slow mode in.

</div></div></div><div><div class="font-mono" id="p_duration" data-anchor><span class="font-bold">duration</span><span class="opacity-50">:</span> <a href="/types/slowmodeduration"  >SlowModeDuration</a></div><div class="pl-3"><div class="no-margin">

New slow mode duration.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setSlowMode(chatId, duration);
```



