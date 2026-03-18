---
title: createGiftCollection
parent: /methods
metas:
  description: Create a gift collection.
---

Create a gift collection.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to create the gift collection in.

</div></div></div><div><div class="font-mono" id="p_name" data-anchor="true"><span class="font-bold">name</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The name of the collection.

</div></div></div><div><div class="font-mono" id="p_gifts" data-anchor="true"><span class="font-bold">gifts</span><span class="opacity-50">:</span> <a href="/gh/types/inputgift">InputGift</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The collection's initial gifts.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/giftcollection">GiftCollection</a></div>

### Syntax

```ts
await client.createGiftCollection(chatId, name, gifts);
```



