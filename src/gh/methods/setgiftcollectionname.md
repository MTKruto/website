---
title: setGiftCollectionName
parent: /methods
metas:
  description: Set the name of a gift collection.
---

Set the name of a gift collection.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the gift collection.

</div></div></div><div><div class="font-mono" id="p_collectionId" data-anchor="true"><span class="font-bold">collectionId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a gift collection.

</div></div></div><div><div class="font-mono" id="p_name" data-anchor="true"><span class="font-bold">name</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The gift collection's new name.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/giftcollection">GiftCollection</a></div>

### Syntax

```ts
await client.setGiftCollectionName(chatId, collectionId, name);
```



