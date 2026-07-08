---
title: sendRichText
parent: /methods
metas:
  description: Send a rich text message.
---

Send a rich text message.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message to.

</div></div></div><div><div class="font-mono" id="p_richText" data-anchor="true"><span class="font-bold">richText</span><span class="opacity-50">:</span> <a href="/gh/types/inputrichtext">InputRichText</a></div><div class="pl-3"><div class="no-margin">

The message's rich text.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagerichtext">MessageRichText</a></div><div class="pl-3"><div class="no-margin">

The sent rich text message.

</div></div>

### Syntax

```ts
await client.sendRichText(chatId, richText);
```



