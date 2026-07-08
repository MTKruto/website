---
title: summarizeText
parent: /methods
metas:
  description: Summarize a message's text. User-only.
---

Summarize a message's text.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_languageCode" data-anchor="true"><span class="font-bold">languageCode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A language code. If specified, the message will be summarized into that language.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/summarizedtext">SummarizedText</a></div>

### Syntax

```ts
// Required parameters only.
await client.summarizeText(chatId, messageId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.summarizeText(chatId, messageId, { languageCode });
```



