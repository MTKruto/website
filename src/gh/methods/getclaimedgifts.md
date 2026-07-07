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

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_collectionId" data-anchor="true"><span class="font-bold">collectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a gift collection. If provided, only gifts inside it will be fetched.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isHostedExcluded" data-anchor="true"><span class="font-bold">isHostedExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude hosted gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isUnupgradableExcluded" data-anchor="true"><span class="font-bold">isUnupgradableExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude unupgradable gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isUpgradableExcluded" data-anchor="true"><span class="font-bold">isUpgradableExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude upgradable gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isSortedByValue" data-anchor="true"><span class="font-bold">isSortedByValue</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to sort gifts by value.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isUniqueExcluded" data-anchor="true"><span class="font-bold">isUniqueExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude unique gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isUnlimitedExcluded" data-anchor="true"><span class="font-bold">isUnlimitedExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude unlimited gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isSavedExcluded" data-anchor="true"><span class="font-bold">isSavedExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude saved gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isUnsavedExcluded" data-anchor="true"><span class="font-bold">isUnsavedExcluded</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude unsaved gifts.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isWithColors" data-anchor="true"><span class="font-bold">isWithColors</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to get gifts with colors.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An offset key returned by a previous result.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/claimedgifts">ClaimedGifts</a></div>

### Syntax

```ts
// Required parameters only.
await client.getClaimedGifts(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getClaimedGifts(chatId, {
    collectionId,
    isHostedExcluded,
    isUnupgradableExcluded,
    isUpgradableExcluded,
    isSortedByValue,
    isUniqueExcluded,
    isUnlimitedExcluded,
    isSavedExcluded,
    isUnsavedExcluded,
    isWithColors,
    offset,
    limit,
});
```



