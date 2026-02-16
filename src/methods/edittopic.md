---
title: editTopic
parent: /methods
metas:
  description: Edit a forum topic. 
---

Edit a forum topic.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_topicId" data-anchor="true"><span class="font-bold">topicId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the topic.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The new title of the topic.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_customEmojiId" data-anchor="true"><span class="font-bold">customEmojiId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Identifier of a custom emoji to display as the icon of the topic.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/topic">Topic</a></div><div class="pl-3"><div class="no-margin">

The new topic.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.editTopic(chatId, topicId, title);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editTopic(chatId, topicId, title, { customEmojiId });
```



