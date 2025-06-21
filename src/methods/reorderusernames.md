---
title: reorderUsernames
---

Reorder the usernames of the current account, a bot account, a supergroup, or a channel's profile.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

`"me"`, a bot ID, a supergroup ID, or a channel ID.

</div></div></div><div><div class="font-mono" id="p_order" data-anchor><span class="font-bold">order</span><span class="opacity-50">:</span> <span>string</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The new order to use.

</div></div></div></div>

### Result 

<div class="font-mono"><span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether the order was changed.

</div></div>

### Syntax

```ts
await client.reorderUsernames(id, order);
```



