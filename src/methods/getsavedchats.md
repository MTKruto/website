---
title: getSavedChats
---

Get a list of saved chats.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_offsetId" data-anchor><span class="font-bold">offsetId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message. If specified, the list of chats will be fetched from that message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offsetDate" data-anchor><span class="font-bold">offsetDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time. If specified, the list of chats will be fetched from that date.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offsetChatId" data-anchor><span class="font-bold">offsetChatId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

A chat ID. If specified, the list of chats will be fetched from that chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addOffset" data-anchor><span class="font-bold">addOffset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Additional offset.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_excludePinned" data-anchor><span class="font-bold">excludePinned</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to exclude pinned chats.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/savedchats"  >SavedChats</a></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.getSavedChats( {
    offsetId,
    offsetDate,
    offsetChatId,
    addOffset,
    limit,
    excludePinned,
});
```



