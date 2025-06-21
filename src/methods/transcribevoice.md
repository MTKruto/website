---
title: transcribeVoice
---

Transcribe a voice message.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat that includes the message.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/voicetranscription"  >VoiceTranscription</a></div>

### Syntax

```ts
await client.transcribeVoice(chatId, messageId);
```



