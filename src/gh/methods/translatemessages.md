---
title: translateMessages
parent: /methods
metas:
  description: Translate multiple texts. User-only.
---

Translate multiple texts.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_toLanguage" data-anchor="true"><span class="font-bold">toLanguage</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The code of the language to translate into.

</div></div></div><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat including the messages.

</div></div></div><div><div class="font-mono" id="p_messageIds" data-anchor="true"><span class="font-bold">messageIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the messages to translate.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">TranslatedText</span><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.translateMessages(toLanguage, chatId, messageIds);
```



