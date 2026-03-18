---
title: getGiftCollections
parent: /methods
metas:
  description: Get gift collections of a chat.
---

Get gift collections of a chat.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to get gift collections for.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/giftcollection">GiftCollection</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getGiftCollections(chatId);
```



