---
title: createTopic
parent: /methods
metas:
  description: Create a forum topic.
---

Create a forum topic.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the topic.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/topic">Topic</a></div><div class="pl-3"><div class="no-margin">

The created topic.

</div></div>

### Syntax

```ts
await client.createTopic(chatId, title);
```



