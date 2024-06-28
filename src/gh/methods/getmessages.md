---
title: getMessages
---

Retrieve multiple messages.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to retrieve the messages from.

</div></div></div><div><div class="font-mono"><span class="font-bold">messageIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the messages to retrieve.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message"  >Message</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getMessages(chatId, messageIds);
```

### Examples 

```ts
const message = await client.getMessages("@MTKruto", [210, 212]);
```

