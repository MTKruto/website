---
title: sendScheduledMessages
parent: /methods
metas:
  description: Send multiple scheduled messages before their schedule. User-only.
---

Send multiple scheduled messages before their schedule.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_messageIds" data-anchor><span class="font-bold">messageIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the scheduled messages to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/message"  >Message</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.sendScheduledMessages(chatId, messageIds);
```



