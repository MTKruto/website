---
title: UpdateMessageDraft
parent: /types
metas:
  description: A message draft was received. User-only.
---

A message draft was received. User-only.

```ts
client.on("messageDraft", (ctx) => {
  // ctx.update.messageDraft
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;messageDraft&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageDraft" data-anchor="true"><span class="font-bold">messageDraft</span><span class="opacity-50">:</span> <a href="/gh/types/messagedraft">MessageDraft</a></div></div></div></div>

