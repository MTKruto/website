---
title: sendInlineQuery
---

Send an inline query. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The ID of the bot to send the inline query to.

</div></div></div><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The ID of the chat from which the inline query is sent.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_query" data-anchor><span class="font-bold">query</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The inline query's text. Defaults to empty string.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Bot-provided pagination offset.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/inlinequeryanswer"  >InlineQueryAnswer</a></div><div class="pl-3"><div class="no-margin">

The bot's answer to the inline query.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.sendInlineQuery(userId, chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendInlineQuery(userId, chatId, { query, offset });
```



