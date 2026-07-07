---
title: sendDice
parent: /methods
metas:
  description: Send a dice.
---

Send a dice.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the dice to.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagedice">MessageDice</a></div><div class="pl-3"><div class="no-margin">

The sent dice.

</div></div>

### Syntax

```ts
await client.sendDice(chatId);
```



