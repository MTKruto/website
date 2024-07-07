---
title: sendVenue
---

Send a venue.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to send the venue to.

</div></div></div><div><div class="font-mono"><span class="font-bold">latitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The latitude of the venue.

</div></div></div><div><div class="font-mono"><span class="font-bold">longitude</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The longitude of the venue.

</div></div></div><div><div class="font-mono"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the venue.

</div></div></div><div><div class="font-mono"><span class="font-bold">address</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The written address of the venue.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">foursquareId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Foursquare identifier of the venue.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">foursquareType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Foursquare type of the venue, if known. For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">disableNotification</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to send the message in a silent way without making a sound on the recipients' clients.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the message from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyTo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replyto"  >ReplyTo</a></div></div><div class="pl-3"><div class="no-margin">

Information on what the message is replying to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a thread to send the message to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message on behalf of. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">messageEffectId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/messagevenue"  >MessageVenue</a></div>

### Syntax

```ts
// Required parameters only.
await client.sendVenue(chatId, latitude, longitude, title, address);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendVenue(chatId, latitude, longitude, title, address, {
    foursquareId,
    foursquareType,
    disableNotification,
    protectContent,
    replyTo,
    messageThreadId,
    sendAs,
    messageEffectId,
    businessConnectionId,
    replyMarkup,
});
```



