---
title: Checklist
parent: /types
metas:
  description: A checklist.
---

A checklist.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The checklist's title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_titleEntities" data-anchor="true"><span class="font-bold">titleEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the checklist's title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_items" data-anchor="true"><span class="font-bold">items</span><span class="opacity-50">:</span> <a href="/types/checklistitem">ChecklistItem</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The checklist's items. At least one item must be provided.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExtendableByOthers" data-anchor="true"><span class="font-bold">isExtendableByOthers</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether users other than the creator of the checklist can add more items.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isCheckableByOthers" data-anchor="true"><span class="font-bold">isCheckableByOthers</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether users other than the creator of the checklist can mark items as completed.

</div></div></div></div>

