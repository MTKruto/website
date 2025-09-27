---
title: getMessages
parent: /methods
---

Retrieve multiple messages.<span class="select-none">  <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to retrieve the messages from.

</div></div></div><div><div class="font-mono" id="p_messageIds" data-anchor><span class="font-bold">messageIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the messages to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message"  >Message</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The retrieved messages.

</div></div>

### Syntax

```ts
await client.getMessages(chatId, messageIds);
```

### Examples 

```ts
const message = await client.getMessages("@MTKruto", [210, 212]);
```

