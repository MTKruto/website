---
title: sendSticker
parent: /methods
metas:
  description: Send a sticker.
---

Send a sticker.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the sticker to.

</div></div></div><div><div class="font-mono" id="p_sticker" data-anchor="true"><span class="font-bold">sticker</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The sticker to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagesticker">MessageSticker</a></div><div class="pl-3"><div class="no-margin">

The sent sticker.

</div></div>

### Syntax

```ts
await client.sendSticker(chatId, sticker);
```



