---
title: giftPremiumSubscription
parent: /methods
metas:
  description: Gift a Telegram Premium subscription. Bot-only.
---

Gift a Telegram Premium subscription.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user to gift the Telegram Premium subscription to.

</div></div></div><div><div class="font-mono" id="p_duration" data-anchor="true"><span class="font-bold">duration</span><span class="opacity-50">:</span> <a href="/types/premiumsubscriptionduration">PremiumSubscriptionDuration</a></div><div class="pl-3"><div class="no-margin">

The duration of the subscription.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A text to attach to the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_parseMode" data-anchor="true"><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode">ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use. If omitted, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The text's entities.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.giftPremiumSubscription(userId, duration);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.giftPremiumSubscription(userId, duration, {
    text,
    parseMode,
    entities,
});
```



