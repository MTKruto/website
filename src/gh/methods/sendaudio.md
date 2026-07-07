---
title: sendAudio
parent: /methods
metas:
  description: Send an audio file.
---

Send an audio file.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the audio file to.

</div></div></div><div><div class="font-mono" id="p_audio" data-anchor="true"><span class="font-bold">audio</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The audio to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messageaudio">MessageAudio</a></div><div class="pl-3"><div class="no-margin">

The sent audio file.

</div></div>

### Syntax

```ts
await client.sendAudio(chatId, audio);
```



