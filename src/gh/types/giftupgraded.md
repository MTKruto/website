---
title: GiftUpgraded
---

An upgraded gift.


### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;upgraded&quot;</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The title of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_index" data-anchor><span class="font-bold">index</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The unique index of the gift among others of the same type.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_owner" data-anchor><span class="font-bold">owner</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The user that owns the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_currentUpgrades" data-anchor><span class="font-bold">currentUpgrades</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The count of the amount of upgraded gifts of the same type.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_maxUpgrades" data-anchor><span class="font-bold">maxUpgrades</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum count of gifts of the same type that can be upgraded.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_components" data-anchor><span class="font-bold">components</span><span class="opacity-50">:</span> <a href="/gh/types/giftupgradedcomponent"  >GiftUpgradedComponent</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The components of the gift.

</div></div></div></div>

