---
title: sendGift
parent: /methods
metas:
  description: Send a gift.
---

Send a gift.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user or a channel to send the gift to.

</div></div></div><div><div class="font-mono" id="p_giftId" data-anchor="true"><span class="font-bold">giftId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the gift to send.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.sendGift(chatId, giftId);
```



