---
title: sendScheduledMessage
---

Send a scheduled message before its schedule.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that contains the scheduled message.

</div></div></div><div><div class="font-mono"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the scheduled message to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message"  >Message</a></div>

### Syntax

```ts
await client.sendScheduledMessage(chatId, messageId);
```



