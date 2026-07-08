---
title: getClaimedGifts
parent: /methods
metas:
  description: Get gifts claimed by a user or a channel.
---

Get gifts claimed by a user or a channel.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user or a channel to get gifts for.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/claimedgifts">ClaimedGifts</a></div>

### Syntax

```ts
await client.getClaimedGifts(chatId);
```



