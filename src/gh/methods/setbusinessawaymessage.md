---
title: setBusinessAwayMessage
parent: /methods
metas:
  description: Set the current user's business away message. User-only.
---

Set the current user's business away message.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_shortcutId" data-anchor="true"><span class="font-bold">shortcutId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the quick reply shortcut to send.

</div></div></div><div><div class="font-mono" id="p_schedule" data-anchor="true"><span class="font-bold">schedule</span><span class="opacity-50">:</span> <span href="/">BusinessAwayMessageSchedule</span></div><div class="pl-3"><div class="no-margin">

The schedule on which to send the away message.

</div></div></div><div><div class="font-mono" id="p_recipients" data-anchor="true"><span class="font-bold">recipients</span><span class="opacity-50">:</span> <span href="/">InputBusinessRecipients</span></div><div class="pl-3"><div class="no-margin">

The recipients to send the away message to.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setBusinessAwayMessage(shortcutId, schedule, recipients);
```



