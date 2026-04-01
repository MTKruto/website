---
title: getStarBalance
parent: /methods
metas:
  description: Get the star balance of a chat.
---

Get the star balance of a chat.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to get the star balance for.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/staramount">StarAmount</a></div>

### Syntax

```ts
await client.getStarBalance(chatId);
```



