---
title: searchMessages
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to search the messages in.

</div></div></div><div><div class="font-mono"><span class="font-bold">query</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The message search query.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">from</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

If set, only messages sent by `from` are returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">filter</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messagesearchfilter"  >MessageSearchFilter</a></div></div><div class="pl-3"><div class="no-margin">

A search filter to apply.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">after</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A message identifier to start searching after.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message thread to search in.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return. Must be in the range of 1-100. Defaults to 100.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message"  >Message</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Required parameters only.
await client.searchMessages(chatId, query);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.searchMessages(chatId, query, {
    from,
    filter,
    after,
    messageThreadId,
    limit,
});
```


