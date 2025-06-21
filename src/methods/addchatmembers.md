---
title: addChatMembers
---

Add multiple users at once to a channel or a supergroup.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the channel or supergroup to add the users to.

</div></div></div><div><div class="font-mono" id="p_userIds" data-anchor><span class="font-bold">userIds</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a><span class="opacity-50">[]</span></div></div></div>

### Result 

<div class="font-mono"><a href="/types/failedinvitation"  >FailedInvitation</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.addChatMembers(chatId, userIds);
```



