---
title: sendVoice
parent: /methods
metas:
  description: Send a voice message.
---

Send a voice message.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the voice message to.

</div></div></div><div><div class="font-mono" id="p_voice" data-anchor="true"><span class="font-bold">voice</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The voice to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagevoice">MessageVoice</a></div><div class="pl-3"><div class="no-margin">

The sent voice message.

</div></div>

### Syntax

```ts
await client.sendVoice(chatId, voice);
```



