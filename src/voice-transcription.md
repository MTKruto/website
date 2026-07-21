---
title: Voice Transcription
parent: /#walkthrough
walkthrough:
  track: user
  order: 29
---

Users can transcribe voice messages through {{ "transcribeVoice" |> m }}.

```ts
const transcription = await client.transcribeVoice(chatId, messageId);
console.log(transcription.text);
```
