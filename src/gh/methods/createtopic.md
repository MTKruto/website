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

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_color" data-anchor="true"><span class="font-bold">color</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The color to use for the default topic icon.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_customEmojiId" data-anchor="true"><span class="font-bold">customEmojiId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Identifier of a custom emoji to display as the icon of the topic.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAs" data-anchor="true"><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to create the topic on behalf of. User-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/topic">Topic</a></div><div class="pl-3"><div class="no-margin">

The created topic.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.createTopic(chatId, title);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createTopic(chatId, title, {
    color,
    customEmojiId,
    sendAs,
});
```



