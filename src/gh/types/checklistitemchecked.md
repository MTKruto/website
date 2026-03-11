---
title: ChecklistItemChecked
parent: /types
metas:
  description: A checked checklist item.
---

A checked checklist item.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;checked&quot;</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The type of the checklist item.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the to-do item.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The item's text.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the text.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_checkedAt" data-anchor="true"><span class="font-bold">checkedAt</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time in which the checklist item was checked.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_checkedBy" data-anchor="true"><span class="font-bold">checkedBy</span><span class="opacity-50">:</span> <a href="/gh/types/user">User</a></div></div><div class="pl-3"><div class="no-margin">

The user who checked the item.

</div></div></div></div>

