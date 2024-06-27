---
title: UpdateDeletedMessages
---

One or more messages were deleted.

```
client.on("deletedMessages", (ctx) => {
  for (const deletedMessage of ctx.deletedMessages) {
    console.log(deletedMessage);
  }
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">deletedMessages</span><span class="opacity-50">:</span> <a href="/types/messagereference"  >MessageReference</a><span class="opacity-50">[]</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The deleted messages

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div></div>

