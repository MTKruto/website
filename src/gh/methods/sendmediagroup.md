---
title: sendMediaGroup
parent: /methods
metas:
  description: Send a media group.
---

Send a media group.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the media group to.

</div></div></div><div><div class="font-mono" id="p_media" data-anchor="true"><span class="font-bold">media</span><span class="opacity-50">:</span> <a href="/gh/types/inputmedia">InputMedia</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The media to include in the media group. Animations are not allowed. All of them must be of the same media type, but an exception is that photos and videos can be mixed.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message">Message</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The sent messages.

</div></div>

### Syntax

```ts
await client.sendMediaGroup(chatId, media);
```



