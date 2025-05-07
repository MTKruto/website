---
title: readMessages
---

Mark messages as read. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the messages.

</div></div></div><div><div class="font-mono" id="p_untilMessageId" data-anchor><span class="font-bold">untilMessageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a message that will be marked as read, along with any other unread messages before it.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.readMessages(chatId, untilMessageId);
```



