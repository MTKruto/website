---
title: PreCheckoutQuery
parent: /types
metas:
  description: A pre-checkout query.
---

A pre-checkout query.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the pre-checkout query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_from" data-anchor="true"><span class="font-bold">from</span><span class="opacity-50">:</span> <a href="/gh/types/user">User</a></div></div><div class="pl-3"><div class="no-margin">

The user that created the pre-checkout query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_currency" data-anchor="true"><span class="font-bold">currency</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The currency in which the pre-checkout query is in.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_totalAmount" data-anchor="true"><span class="font-bold">totalAmount</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The payment's total amount.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_invoicePayload" data-anchor="true"><span class="font-bold">invoicePayload</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The payload of the payment's invoice.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_shippingOptionId" data-anchor="true"><span class="font-bold">shippingOptionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The payment's shipping option ID.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_orderInfo" data-anchor="true"><span class="font-bold">orderInfo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/orderinfo">OrderInfo</a></div></div><div class="pl-3"><div class="no-margin">

The payment's order info.

</div></div></div></div>

