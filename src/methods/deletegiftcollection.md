---
title: deleteGiftCollection
parent: /methods
metas:
  description: Delete a gift collection.
---

Delete a gift collection.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the gift collection.

</div></div></div><div><div class="font-mono" id="p_collectionId" data-anchor="true"><span class="font-bold">collectionId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a gift collection.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.deleteGiftCollection(chatId, collectionId);
```



