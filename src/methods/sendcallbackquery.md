---
title: sendCallbackQuery
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat that includes the messsage.

</div></div></div><div><div class="font-mono"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The message that includes at a button responsible for the callback query question.

</div></div></div><div><div class="font-mono"><span class="font-bold">question</span><span class="opacity-50">:</span> <a href="/types/callbackqueryquestion"  >CallbackQueryQuestion</a></div><div class="pl-3"><div class="no-margin">

The callback query's question.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/callbackqueryanswer"  >CallbackQueryAnswer</a></div>

### Syntax

```ts
await client.sendCallbackQuery(chatId, messageId, question);
```



