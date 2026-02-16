---
title: getChatAdministrators
parent: /methods
metas:
  description: Get the administrators of a chat. 
---

Get the administrators of a chat.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatmember">ChatMember</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The chat's administrators.

</div></div>

### Syntax

```ts
await client.getChatAdministrators(chatId);
```



