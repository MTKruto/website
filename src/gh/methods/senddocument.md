---
title: sendDocument
parent: /methods
metas:
  description: Send a document.
---

Send a document.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the document to.

</div></div></div><div><div class="font-mono" id="p_document" data-anchor="true"><span class="font-bold">document</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The document to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagedocument">MessageDocument</a></div><div class="pl-3"><div class="no-margin">

The sent document.

</div></div>

### Syntax

```ts
await client.sendDocument(chatId, document);
```



