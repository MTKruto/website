---
title: reorderGiftsInCollection
parent: /methods
metas:
  description: Reorder gifts in a gift collection.
---

Reorder gifts in a gift collection.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the gift collection.

</div></div></div><div><div class="font-mono" id="p_collectionId" data-anchor="true"><span class="font-bold">collectionId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a gift collection.

</div></div></div><div><div class="font-mono" id="p_gifts" data-anchor="true"><span class="font-bold">gifts</span><span class="opacity-50">:</span> <a href="/types/inputgift">InputGift</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The gifts to remove from the collection.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/giftcollection">GiftCollection</a></div>

### Syntax

```ts
await client.reorderGiftsInCollection(chatId, collectionId, gifts);
```



