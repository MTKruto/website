---
title: setBoostsRequiredToCircumventRestrictions
---

Set the number of boosts required to circument a chat's default restrictions. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div><div class="font-mono" id="p_boosts" data-anchor><span class="font-bold">boosts</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The number of boosts required to circumvent its restrictions.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
```



