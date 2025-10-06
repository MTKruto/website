---
title: sendInlineQuery
parent: /methods
---

Send an inline query.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor><span class="font-bold">botId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a bot to send the inline query to.

</div></div></div><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat from which the inline query is sent.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_query" data-anchor><span class="font-bold">query</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The inline query's text. Defaults to empty string.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Bot-provided pagination offset.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/inlinequeryanswer"  >InlineQueryAnswer</a></div><div class="pl-3"><div class="no-margin">

The bot's answer to the inline query.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.sendInlineQuery(botId, chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendInlineQuery(botId, chatId, { query, offset });
```



