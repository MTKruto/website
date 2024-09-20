---
title: banChatMember
---

Ban a member from a chat.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div><div class="font-mono" id="p_memberId" data-anchor><span class="font-bold">memberId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the member.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_untilDate" data-anchor><span class="font-bold">untilDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

A point in time within the future in which the ban will be reverted.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_deleteMessages" data-anchor><span class="font-bold">deleteMessages</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to delete all of the user's messages.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.banChatMember(chatId, memberId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.banChatMember(chatId, memberId, { untilDate, deleteMessages });
```



