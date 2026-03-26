---
title: getStarTransactions
parent: /methods
metas:
  description: Get star transactions.
---

Get star transactions.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to get star transactions for.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isTon" data-anchor="true"><span class="font-bold">isTon</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether TON transactions should be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isInbound" data-anchor="true"><span class="font-bold">isInbound</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether only inbound transactions should be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isOutbound" data-anchor="true"><span class="font-bold">isOutbound</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether only outbound transactions should be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAscending" data-anchor="true"><span class="font-bold">isAscending</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether results should be sorted in an ascending order.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_subscriptionId" data-anchor="true"><span class="font-bold">subscriptionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Whether only transactions related to a specific subscription be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An offset key returned by a previous result.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/startransactionlist">StarTransactionList</a></div>

### Syntax

```ts
// Required parameters only.
await client.getStarTransactions(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getStarTransactions(chatId, {
    isTon,
    isInbound,
    isOutbound,
    isAscending,
    subscriptionId,
    offset,
    limit,
});
```



