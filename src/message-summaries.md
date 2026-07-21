---
title: Message Summaries
parent: /#walkthrough
walkthrough:
  track: user
  order: 30
---

{{ "summarizeText" |> m }} generates a summary of a text message.

```ts
const summary = await client.summarizeText(chatId, messageId);
console.log(summary.text);
```
