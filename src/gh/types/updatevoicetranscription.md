---
title: UpdateVoiceTranscription
parent: /types
metas:
  description: A voice transcription was updated.
---

A voice transcription was updated.

```ts
client.on("voiceTranscription", (ctx) => {
  // ctx.update.voiceTranscription
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_voiceTranscription" data-anchor="true"><span class="font-bold">voiceTranscription</span><span class="opacity-50">:</span> <a href="/gh/types/voicetranscription">VoiceTranscription</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The new voice transcription.

</div></div></div></div>

