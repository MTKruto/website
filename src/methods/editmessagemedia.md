---
title: editMessageMedia
---

Edit a message's media.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that contains the message.

</div></div></div><div><div class="font-mono"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The message's identifier.

</div></div></div><div><div class="font-mono"><span class="font-bold">media</span><span class="opacity-50">:</span> <a href="/types/inputmedia"  >InputMedia</a></div><div class="pl-3"><div class="no-margin">

The new media of the message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/message"  >Message</a></div>

### Syntax

```ts
// Required parameters only.
await client.editMessageMedia(chatId, messageId, media);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editMessageMedia(chatId, messageId, media, {
    replyMarkup,
    businessConnectionId,
});
```



