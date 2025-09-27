---
title: editInlineMessageText
parent: /methods
---

Edit an inline message's text.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_inlineMessageId" data-anchor><span class="font-bold">inlineMessageId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the inline message.

</div></div></div><div><div class="font-mono" id="p_text" data-anchor><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The new text of the message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_parseMode" data-anchor><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use. if omitted, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The message's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_linkPreview" data-anchor><span class="font-bold">linkPreview</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/linkpreview"  >LinkPreview</a></div></div><div class="pl-3"><div class="no-margin">

The message's link preview.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyMarkup" data-anchor><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.editInlineMessageText(inlineMessageId, text);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editInlineMessageText(inlineMessageId, text, {
    parseMode,
    entities,
    linkPreview,
    replyMarkup,
});
```



