---
title: getMessageReactions
parent: /methods
---

Get a list of reactions made to a message.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_reaction" data-anchor="true"><span class="font-bold">reaction</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/reaction">Reaction</a></div></div><div class="pl-3"><div class="no-margin">

A reaction. If specified, only reactions of this type will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A value returned from the field nextOffset of the results. If specified, the retrieval will start from there.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagereactionlist">MessageReactionList</a></div>

### Syntax

```ts
// Required parameters only.
await client.getMessageReactions(chatId, messageId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getMessageReactions(chatId, messageId, {
    reaction,
    offset,
    limit,
});
```



