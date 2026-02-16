---
title: GiftUpgraded
parent: /types
metas:
  description: An upgraded gift. 
---

An upgraded gift.


### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;upgraded&quot;</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The title of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_index" data-anchor="true"><span class="font-bold">index</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The unique index of the gift among others of the same type.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_ownerName" data-anchor="true"><span class="font-bold">ownerName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The name of the user that owns the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_ownerAddress" data-anchor="true"><span class="font-bold">ownerAddress</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The address of the TON wallet that owns the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_owner" data-anchor="true"><span class="font-bold">owner</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/chatp">ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The user or chat that owns the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_currentUpgrades" data-anchor="true"><span class="font-bold">currentUpgrades</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The count of the amount of upgraded gifts of the same type.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_maxUpgrades" data-anchor="true"><span class="font-bold">maxUpgrades</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum count of gifts of the same type that can be upgraded.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_components" data-anchor="true"><span class="font-bold">components</span><span class="opacity-50">:</span> <a href="/gh/types/giftupgradedcomponent">GiftUpgradedComponent</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The components of the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_address" data-anchor="true"><span class="font-bold">address</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The address of the gift in TON blockchain.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_price" data-anchor="true"><span class="font-bold">price</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The amount of stars that can be used to buy the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_priceTon" data-anchor="true"><span class="font-bold">priceTon</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The amount of TON that can be used to buy the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isTonOnly" data-anchor="true"><span class="font-bold">isTonOnly</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the gift can be bought only using TON.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_value" data-anchor="true"><span class="font-bold">value</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/giftvalue">GiftValue</a></div></div><div class="pl-3"><div class="no-margin">

The value of the gift.

</div></div></div></div>

