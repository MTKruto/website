---
title: addChatMembers
---

Add multiple users at once to a channel or a supergroup.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the channel or supergroup to add the users to.

</div></div></div><div><div class="font-mono"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifiers of the users to add to the channel or supergroup.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">historyLimit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.addChatMembers(chatId, userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addChatMembers(chatId, userId, { historyLimit });
```



