---
title: removeUserReactions
parent: /methods
metas:
  description: Undo recent reactions to messages made by another user.
---

Undo recent reactions to messages made by another user.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the messages belongs to.

</div></div></div><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user who made the reactions.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.removeUserReactions(chatId, userId);
```



