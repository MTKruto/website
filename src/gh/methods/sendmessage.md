---
title: sendMessage
parent: /methods
metas:
  description: Send a text message.
---

Send a text message.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message to.

</div></div></div><div><div class="font-mono" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The message's text.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagetext">MessageText</a></div><div class="pl-3"><div class="no-margin">

The sent text message.

</div></div>

### Syntax

```ts
await client.sendMessage(chatId, text);
```



