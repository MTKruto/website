---
title: sendInvoice
---

Send an invoice. Bot-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to send the invoice to.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's title.

</div></div></div><div><div class="font-mono" id="p_description" data-anchor><span class="font-bold">description</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's description.

</div></div></div><div><div class="font-mono" id="p_payload" data-anchor><span class="font-bold">payload</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's payload.

</div></div></div><div><div class="font-mono" id="p_currency" data-anchor><span class="font-bold">currency</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invoice's currency.

</div></div></div><div><div class="font-mono" id="p_prices" data-anchor><span class="font-bold">prices</span><span class="opacity-50">:</span> <a href="/gh/types/pricetag"  >PriceTag</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The invoice's price tags.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_providerToken" data-anchor><span class="font-bold">providerToken</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_maxTipAmount" data-anchor><span class="font-bold">maxTipAmount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_suggestedTipAmounts" data-anchor><span class="font-bold">suggestedTipAmounts</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span><span class="opacity-50">[]</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_startParameter" data-anchor><span class="font-bold">startParameter</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_providerData" data-anchor><span class="font-bold">providerData</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_photoUrl" data-anchor><span class="font-bold">photoUrl</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_photoSize" data-anchor><span class="font-bold">photoSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_photoWidth" data-anchor><span class="font-bold">photoWidth</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_photoHeight" data-anchor><span class="font-bold">photoHeight</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_needName" data-anchor><span class="font-bold">needName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_needPhoneNumber" data-anchor><span class="font-bold">needPhoneNumber</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_needEmail" data-anchor><span class="font-bold">needEmail</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_needShippingAddress" data-anchor><span class="font-bold">needShippingAddress</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendPhoneNumberToProvider" data-anchor><span class="font-bold">sendPhoneNumberToProvider</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendEmailToProvider" data-anchor><span class="font-bold">sendEmailToProvider</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_flexible" data-anchor><span class="font-bold">flexible</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_disableNotification" data-anchor><span class="font-bold">disableNotification</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to send the message in a silent way without making a sound on the recipients' clients.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_protectContent" data-anchor><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the message from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyTo" data-anchor><span class="font-bold">replyTo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/replyto"  >ReplyTo</a></div></div><div class="pl-3"><div class="no-margin">

Information on what the message is replying to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageThreadId" data-anchor><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a thread to send the message to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAs" data-anchor><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message on behalf of. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_effectId" data-anchor><span class="font-bold">effectId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message effect to be attached to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAt" data-anchor><span class="font-bold">sendAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

If specified, the message will be scheduled to be sent at that date. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business connection ID to perform the action on. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_paidBroadcast" data-anchor><span class="font-bold">paidBroadcast</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyMarkup" data-anchor><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messageinvoice"  >MessageInvoice</a></div><div class="pl-3"><div class="no-margin">

The sent invoice.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.sendInvoice(chatId, title, description, payload, currency, prices);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendInvoice(chatId, title, description, payload, currency, prices, {
    providerToken,
    maxTipAmount,
    suggestedTipAmounts,
    startParameter,
    providerData,
    photoUrl,
    photoSize,
    photoWidth,
    photoHeight,
    needName,
    needPhoneNumber,
    needEmail,
    needShippingAddress,
    sendPhoneNumberToProvider,
    sendEmailToProvider,
    flexible,
    disableNotification,
    protectContent,
    replyTo,
    messageThreadId,
    sendAs,
    effectId,
    sendAt,
    businessConnectionId,
    paidBroadcast,
    replyMarkup,
});
```



