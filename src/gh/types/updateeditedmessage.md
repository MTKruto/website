---
title: UpdateEditedMessage
---

A message was edited.

```
client.on("editedMessage", (ctx) => {
  console.log("A message was just edited.");
  // ctx.editedMessage
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">editedMessage</span><span class="opacity-50">:</span> <a href="/gh/types/message"  >Message</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The edited message

</div></div></div></div>

