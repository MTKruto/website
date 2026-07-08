---
title: sendMessageDraft
parent: /methods
metas:
  description: Stream a drafted text message. Bot-only.
---

Stream a drafted text message.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message to.

</div></div></div><div><div class="font-mono" id="p_draftId" data-anchor="true"><span class="font-bold">draftId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the draft.

</div></div></div><div><div class="font-mono" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The message's text.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.sendMessageDraft(chatId, draftId, text);
```



