---
title: removeBotFromAttachmentsMenu
parent: /methods
metas:
  description: Remove a bot from the attachments menu. User-only.
---

Remove a bot from the attachments menu.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor="true"><span class="font-bold">botId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the bot to remove from the attachments menu.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.removeBotFromAttachmentsMenu(botId);
```



