---
title: updateChecklist
parent: /methods
metas:
  description: Update a checklist. User-only.
---

Update a checklist.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the checklist message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_itemsToCheck" data-anchor="true"><span class="font-bold">itemsToCheck</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

List of identifiers of items to check.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_itemsToUncheck" data-anchor="true"><span class="font-bold">itemsToUncheck</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

List of identifiers of items to uncheck.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.updateChecklist(chatId, messageId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.updateChecklist(chatId, messageId, { itemsToCheck, itemsToUncheck });
```



