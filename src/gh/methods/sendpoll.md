---
title: sendPoll
parent: /methods
metas:
  description: Send a poll.
---

Send a poll.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the poll to.

</div></div></div><div><div class="font-mono" id="p_question" data-anchor="true"><span class="font-bold">question</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The poll's question.

</div></div></div><div><div class="font-mono" id="p_options" data-anchor="true"><span class="font-bold">options</span><span class="opacity-50">:</span> <a href="/gh/types/inputpolloption">InputPollOption</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The poll's options.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagepoll">MessagePoll</a></div><div class="pl-3"><div class="no-margin">

The sent poll.

</div></div>

### Syntax

```ts
await client.sendPoll(chatId, question, options);
```



