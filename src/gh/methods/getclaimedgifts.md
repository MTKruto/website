---
title: getClaimedGifts
---

Get gifts claimed by a user or a channel. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user or a channel to get gifts for.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An offset key returned by a previous result.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/claimedgifts"  >ClaimedGifts</a></div>

### Syntax

```ts
// Required parameters only.
await client.getClaimedGifts(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getClaimedGifts(chatId, { offset, limit });
```



