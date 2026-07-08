---
title: editMessageRichText
parent: /methods
metas:
  description: Edit a message's rich text.
---

Edit a message's rich text.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the message belongs to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message.

</div></div></div><div><div class="font-mono" id="p_richText" data-anchor="true"><span class="font-bold">richText</span><span class="opacity-50">:</span> <a href="/types/inputrichtext">InputRichText</a></div><div class="pl-3"><div class="no-margin">

The new rich text of the message.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor="true"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business connection to perform the action on. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/messagerichtext">MessageRichText</a></div><div class="pl-3"><div class="no-margin">

The edited rich text message.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.editMessageRichText(chatId, messageId, richText);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editMessageRichText(chatId, messageId, richText, { businessConnectionId });
```



