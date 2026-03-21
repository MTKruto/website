---
title: removeGiftsFromCollection
parent: /methods
metas:
  description: Remove gifts from a gift collection. User-only.
---

Remove gifts from a gift collection.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the gift collection.

</div></div></div><div><div class="font-mono" id="p_collectionId" data-anchor="true"><span class="font-bold">collectionId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a gift collection.

</div></div></div><div><div class="font-mono" id="p_gifts" data-anchor="true"><span class="font-bold">gifts</span><span class="opacity-50">:</span> <a href="/gh/types/inputgift">InputGift</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The gifts to remove from the collection.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/giftcollection">GiftCollection</a></div>

### Syntax

```ts
await client.removeGiftsFromCollection(chatId, collectionId, gifts);
```



