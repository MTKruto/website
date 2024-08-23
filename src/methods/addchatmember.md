---
title: addChatMember
---

Add a single user to a chat.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat to add the user to.

</div></div></div><div><div class="font-mono"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user to add to the chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">historyLimit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of current messages to make visible to the user that is about to be added.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/failedinvitation"  >FailedInvitation</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Required parameters only.
await client.addChatMember(chatId, userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addChatMember(chatId, userId, { historyLimit });
```



