---
title: getChatMember
---

Get information on a user's chat membership.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat that includes the user.

</div></div></div><div><div class="font-mono" id="p_userId" data-anchor><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatmember"  >ChatMember</a></div>

### Syntax

```ts
await client.getChatMember(chatId, userId);
```



