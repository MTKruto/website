---
title: refundStarPayment
---

Refund a star payment. Bot-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user that was charged.

</div></div></div><div><div class="font-mono"><span class="font-bold">telegramPaymentChargeId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the charge.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.refundStarPayment(userId, telegramPaymentChargeId);
```



