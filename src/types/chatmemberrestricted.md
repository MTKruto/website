---
title: ChatMemberRestricted
parent: /types
metas:
  description: A restricted chat member.
---

A restricted chat member.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_status" data-anchor="true"><span class="font-bold">status</span><span class="opacity-50">:</span> <span>&quot;restricted&quot;</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The status of the chat member.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_member" data-anchor="true"><span class="font-bold">member</span><span class="opacity-50">:</span> <a href="/types/chatp">ChatP</a></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isMember" data-anchor="true"><span class="font-bold">isMember</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the restricted user is currently a member of the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_rights" data-anchor="true"><span class="font-bold">rights</span><span class="opacity-50">:</span> <a href="/types/chatmemberrights">ChatMemberRights</a></div></div><div class="pl-3"><div class="no-margin">

The rights of the restricted chat member.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_until" data-anchor="true"><span class="font-bold">until</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time in which the restriction expires.

</div></div></div></div>

