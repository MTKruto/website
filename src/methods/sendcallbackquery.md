---
title: sendCallbackQuery
parent: /methods
metas:
  description: Send a callback query. User-only.
---

Send a callback query.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to send the callback query in.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message that includes a button responsible for the callback query question.

</div></div></div><div><div class="font-mono" id="p_question" data-anchor><span class="font-bold">question</span><span class="opacity-50">:</span> <a href="/types/callbackqueryquestion"  >CallbackQueryQuestion</a></div><div class="pl-3"><div class="no-margin">

The callback query's question.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/callbackqueryanswer"  >CallbackQueryAnswer</a></div><div class="pl-3"><div class="no-margin">

The bot's answer to the callback query.

</div></div>

### Syntax

```ts
await client.sendCallbackQuery(chatId, messageId, question);
```



