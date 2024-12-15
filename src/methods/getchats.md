---
title: getChats
---

Get chats from a chat list. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_from" data-anchor><span class="font-bold">from</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>&quot;main&quot;</span> <span class="opacity-50">|</span> <span>&quot;archived&quot;</span></div></div><div class="pl-3"><div class="no-margin">

The chat list to get the chats from. Defaults to main.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_after" data-anchor><span class="font-bold">after</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/chatlistitem"  >ChatListItem</a></div></div><div class="pl-3"><div class="no-margin">

The last chat to get chats after.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/chatlistitem"  >ChatListItem</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.getChats( { from, after, limit });
```



