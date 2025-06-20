---
title: sendCallbackQuery
---

Send a callback query.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat that includes the messsage.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The message that includes at a button responsible for the callback query question.

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



