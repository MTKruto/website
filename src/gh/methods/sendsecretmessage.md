---
title: sendSecretMessage
parent: /methods
metas:
  description: Send a message to a secret chat. User-only.
---

Send a message to a secret chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of a secret chat.

</div></div></div><div><div class="font-mono" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The message's text.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/secretmessageentity">SecretMessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the message's text.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isSilent" data-anchor="true"><span class="font-bold">isSilent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message should be sent silently.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyToMessageId" data-anchor="true"><span class="font-bold">replyToMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message to reply to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_ttl" data-anchor="true"><span class="font-bold">ttl</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The message's time-to-live.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_viaBot" data-anchor="true"><span class="font-bold">viaBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The name of the bot that was used to send the message.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.sendSecretMessage(id, text);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendSecretMessage(id, text, {
    entities,
    isSilent,
    replyToMessageId,
    ttl,
    viaBot,
});
```



