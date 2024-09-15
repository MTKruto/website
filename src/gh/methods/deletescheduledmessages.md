---
title: deleteScheduledMessages
---

Delete multiple scheduled messages.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that contains the scheduled messages.

</div></div></div><div><div class="font-mono"><span class="font-bold">messageIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the scheduled messages to delete.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.deleteScheduledMessages(chatId, messageIds);
```



