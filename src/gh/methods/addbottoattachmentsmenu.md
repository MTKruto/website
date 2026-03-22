---
title: addBotToAttachmentsMenu
parent: /methods
metas:
  description: Add a bot to the attachments menu. User-only.
---

Add a bot to the attachments menu.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor="true"><span class="font-bold">botId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the bot to add to the attachments menu.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isWriteAllowed" data-anchor="true"><span class="font-bold">isWriteAllowed</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the bot is allowed to write to the user.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.addBotToAttachmentsMenu(botId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addBotToAttachmentsMenu(botId, { isWriteAllowed });
```



