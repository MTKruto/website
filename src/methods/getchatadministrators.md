---
title: getChatAdministrators
---

Get the administrators of a chat.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/chatmember"  >ChatMember</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getChatAdministrators(chatId);
```



