---
title: sendMessage
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to send the message to.

</div></div></div><div><div class="font-mono"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The message's text.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use. If not provided, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The message's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">linkPreview</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/linkpreview"  >LinkPreview</a></div></div><div class="pl-3"><div class="no-margin">

The message's link preview.

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

<div class="font-mono"><a href="/types/messagetext"  >MessageText</a></div>

### Syntax

```ts
// Required parameters only.
await client.sendMessage(chatId, text);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendMessage(chatId, text, {
    parseMode,
    entities,
    linkPreview,
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


