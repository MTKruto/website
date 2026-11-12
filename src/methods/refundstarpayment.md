---
title: refundStarPayment
parent: /methods
metas:
  description: Refund a star payment. Bot-only.
---

Refund a star payment.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user that was charged.

</div></div></div><div><div class="font-mono" id="p_telegramPaymentChargeId" data-anchor><span class="font-bold">telegramPaymentChargeId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the charge.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.refundStarPayment(userId, telegramPaymentChargeId);
```



