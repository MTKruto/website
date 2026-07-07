---
title: setBusinessGreetingMessage
parent: /methods
metas:
  description: Set the business greeting message. User-only.
---

Set the business greeting message.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_shortcutId" data-anchor="true"><span class="font-bold">shortcutId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the quick reply shortcut to send.

</div></div></div><div><div class="font-mono" id="p_recipients" data-anchor="true"><span class="font-bold">recipients</span><span class="opacity-50">:</span> <span href="/">InputBusinessRecipients</span></div><div class="pl-3"><div class="no-margin">

The recipients to send the greeting message to.

</div></div></div><div><div class="font-mono" id="p_inactivityDayCount" data-anchor="true"><span class="font-bold">inactivityDayCount</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

Inactivity day count.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setBusinessGreetingMessage(shortcutId, recipients, inactivityDayCount);
```



