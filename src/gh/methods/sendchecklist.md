---
title: sendChecklist
parent: /methods
metas:
  description: Send a checklist.
---

Send a checklist.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the checklist to.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The checklist's title.

</div></div></div><div><div class="font-mono" id="p_items" data-anchor="true"><span class="font-bold">items</span><span class="opacity-50">:</span> <span href="/">InputChecklistItem</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The checklist's items.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagechecklist">MessageChecklist</a></div><div class="pl-3"><div class="no-margin">

The sent checklist.

</div></div>

### Syntax

```ts
await client.sendChecklist(chatId, title, items);
```



