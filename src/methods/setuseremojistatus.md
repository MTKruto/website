---
title: setUserEmojiStatus
---

Set the emoji status of a bot's user. Bot-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user of the bot.

</div></div></div><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the emoji to be used as the new status.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_until" data-anchor><span class="font-bold">until</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

If specified, the emoji status will be unset in that date.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setUserEmojiStatus(userId, id);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setUserEmojiStatus(userId, id, { until });
```



