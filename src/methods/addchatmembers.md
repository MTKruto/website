---
title: addChatMembers
parent: /methods
metas:
  description: Add multiple users at once to a channel or a supergroup. 
---

Add multiple users at once to a channel or a supergroup.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the channel or supergroup to add the users to.

</div></div></div><div><div class="font-mono" id="p_userIds" data-anchor="true"><span class="font-bold">userIds</span><span class="opacity-50">:</span> <a href="/types/id">ID</a><span class="opacity-50">[]</span></div></div></div>

### Result 

<div class="font-mono"><a href="/types/failedinvitation">FailedInvitation</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

An array of FailedInvitation that has at most a length that is the same as that of the parameter userIds. If empty, it means that all the provided users were added.

</div></div>

### Syntax

```ts
await client.addChatMembers(chatId, userIds);
```



