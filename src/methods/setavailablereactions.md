---
title: setAvailableReactions
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div><div class="font-mono"><span class="font-bold">availableReactions</span><span class="opacity-50">:</span> <span>&quot;none&quot;</span> <span class="opacity-50">|</span> <span>&quot;all&quot;</span> <span class="opacity-50">|</span> <a href="/types/reaction"  >Reaction</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The new available reactions.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setAvailableReactions(chatId, availableReactions);
```


