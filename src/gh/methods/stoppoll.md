---
title: stopPoll
parent: /methods
metas:
  description: Stop a poll.
---

Stop a poll.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The chat that includes the poll.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the poll's message.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/poll">Poll</a></div><div class="pl-3"><div class="no-margin">

The new state of the poll.

</div></div>

### Syntax

```ts
await client.stopPoll(chatId, messageId);
```



