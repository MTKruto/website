---
title: sendInvoice
parent: /methods
metas:
  description: Send an invoice. Bot-only.
---

Send an invoice.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the invoice to.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's title.

</div></div></div><div><div class="font-mono" id="p_description" data-anchor="true"><span class="font-bold">description</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's description.

</div></div></div><div><div class="font-mono" id="p_payload" data-anchor="true"><span class="font-bold">payload</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's payload.

</div></div></div><div><div class="font-mono" id="p_currency" data-anchor="true"><span class="font-bold">currency</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's currency.

</div></div></div><div><div class="font-mono" id="p_prices" data-anchor="true"><span class="font-bold">prices</span><span class="opacity-50">:</span> <span href="/">PriceTag</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The invoice's price tags.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messageinvoice">MessageInvoice</a></div><div class="pl-3"><div class="no-margin">

The sent invoice.

</div></div>

### Syntax

```ts
await client.sendInvoice(chatId, title, description, payload, currency, prices);
```



