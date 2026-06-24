---
title: getTopic
parent: /methods
metas:
  description: Get a topic of a forum chat by its identifier. User-only.
---

Get a topic of a forum chat by its identifier.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div><div class="font-mono" id="p_topicId" data-anchor="true"><span class="font-bold">topicId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the topic.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/topiclistitem">TopicListItem</a> <span class="opacity-50">|</span> <span>null</span></div>

### Syntax

```ts
await client.getTopic(chatId, topicId);
```



