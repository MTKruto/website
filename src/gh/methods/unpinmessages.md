---
title: unpinMessages
parent: /methods
metas:
  description: Unpin all pinned messages.
---

Unpin all pinned messages.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_topicId" data-anchor="true"><span class="font-bold">topicId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A topic ID. If provided, messages in that topic will be unpinned.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.unpinMessages(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.unpinMessages(chatId, { topicId });
```



