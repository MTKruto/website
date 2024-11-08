---
title: getMessage
---

Retrieve a single message.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to retrieve the message from.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/message"  >Message</a> <span class="opacity-50">|</span> <span>null</span></div><div class="pl-3"><div class="no-margin">

The retrieved message.

</div></div>

### Syntax

```ts
await client.getMessage(chatId, messageId);
```

### Examples 

```ts
const message = await client.getMessage("@MTKruto", 212);
```

