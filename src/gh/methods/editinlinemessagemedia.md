---
title: editInlineMessageMedia
parent: /methods
metas:
  description: Edit an inline message's media. Bot-only.
---

Edit an inline message's media.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_inlineMessageId" data-anchor="true"><span class="font-bold">inlineMessageId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the inline message.

</div></div></div><div><div class="font-mono" id="p_media" data-anchor="true"><span class="font-bold">media</span><span class="opacity-50">:</span> <a href="/gh/types/inputmedia">InputMedia</a></div><div class="pl-3"><div class="no-margin">

The new media of the message.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.editInlineMessageMedia(inlineMessageId, media);
```



