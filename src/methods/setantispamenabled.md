---
title: setAntispamEnabled
---

Enable or disable automatic anti-spam in a group. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a group.

</div></div></div><div><div class="font-mono" id="p_enabled" data-anchor><span class="font-bold">enabled</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether automatic anti-spam should be enabled in the group.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setAntispamEnabled(chatId, enabled);
```



