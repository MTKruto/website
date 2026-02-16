---
title: editInlineMessageMedia
parent: /methods
metas:
  description: Edit an inline message's media. 
---

Edit an inline message's media.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_inlineMessageId" data-anchor="true"><span class="font-bold">inlineMessageId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the inline message.

</div></div></div><div><div class="font-mono" id="p_media" data-anchor="true"><span class="font-bold">media</span><span class="opacity-50">:</span> <a href="/gh/types/inputmedia">InputMedia</a></div><div class="pl-3"><div class="no-margin">

The new media of the message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_replyMarkup" data-anchor="true"><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/replymarkup">ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.editInlineMessageMedia(inlineMessageId, media);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editInlineMessageMedia(inlineMessageId, media, { replyMarkup });
```



