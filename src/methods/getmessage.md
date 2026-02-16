---
title: getMessage
parent: /methods
metas:
  description: Retrieve a single message.
---

Retrieve a single message.<span class="select-none">  <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/message">Message</a> <span class="opacity-50">|</span> <span>null</span></div><div class="pl-3"><div class="no-margin">

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

