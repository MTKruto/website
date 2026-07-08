---
title: editMessageRichText
parent: /methods
metas:
  description: Edit a message's rich text.
---

Edit a message's rich text.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the message belongs to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message.

</div></div></div><div><div class="font-mono" id="p_richText" data-anchor="true"><span class="font-bold">richText</span><span class="opacity-50">:</span> <a href="/gh/types/inputrichtext">InputRichText</a></div><div class="pl-3"><div class="no-margin">

The new rich text of the message.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagerichtext">MessageRichText</a></div><div class="pl-3"><div class="no-margin">

The edited rich text message.

</div></div>

### Syntax

```ts
await client.editMessageRichText(chatId, messageId, richText);
```



