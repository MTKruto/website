---
title: sendLocation
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to send the location to.

</div></div></div><div><div class="font-mono"><span class="font-bold">latitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The location's latitude.

</div></div></div><div><div class="font-mono"><span class="font-bold">longitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The location's longitude.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">horizontalAccuracy</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The accuracy radius of the location in meters. Must be in the range of 0-1500.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">livePeriod</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The duration in which the location can be updated in seconds. Must be in the range of 80-864,000.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">heading</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The direction which the user is moving towards. Must be in the range of 1-350.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">proximityAlertRadius</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum distance for proximity alerts on approaching another chat member in meters. Must be in the range 1-100,000.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">disableNotification</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to send the message in a silent way without making a sound on the recipients' clients.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the message from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyToMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message to reply to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyQuote</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replyquote"  >ReplyQuote</a></div></div><div class="pl-3"><div class="no-margin">

A specific part of the replying message's text to quote.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a thread to send the message to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message on behalf of. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/messagelocation"  >MessageLocation</a></div>

### Syntax

```ts
// Required parameters only.
await client.sendLocation(chatId, latitude, longitude);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendLocation(chatId, latitude, longitude, {
    horizontalAccuracy,
    livePeriod,
    heading,
    proximityAlertRadius,
    disableNotification,
    protectContent,
    replyToMessageId,
    replyQuote,
    messageThreadId,
    sendAs,
    replyMarkup,
    businessConnectionId,
});
```


