---
title: editInlineMessageLiveLocation
---

Edit an inline message's live location.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_inlineMessageId" data-anchor><span class="font-bold">inlineMessageId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the inline message.

</div></div></div><div><div class="font-mono" id="p_latitude" data-anchor><span class="font-bold">latitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The new latitude.

</div></div></div><div><div class="font-mono" id="p_longitude" data-anchor><span class="font-bold">longitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The new longitude.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_horizontalAccuracy" data-anchor><span class="font-bold">horizontalAccuracy</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The accuracy radius of the location in meters. Must be in the range of 0-1500.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_heading" data-anchor><span class="font-bold">heading</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The direction which the user is moving towards. Must be in the range of 1-350.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_proximityAlertRadius" data-anchor><span class="font-bold">proximityAlertRadius</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business connection ID to perform the action on. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyMarkup" data-anchor><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div><div class="pl-3"><div class="no-margin">

The edited location message.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, {
    horizontalAccuracy,
    heading,
    proximityAlertRadius,
    businessConnectionId,
    replyMarkup,
});
```



