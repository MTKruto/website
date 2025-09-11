---
title: setTopicsEnabled
---

Enable or disable topics in a group.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the group.

</div></div></div><div><div class="font-mono" id="p_enabled" data-anchor><span class="font-bold">enabled</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether topics should be enabled in the group.

</div></div></div><div><div class="font-mono" id="p_tabs" data-anchor><span class="font-bold">tabs</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether topics should be displayed as tabs.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setTopicsEnabled(chatId, enabled, tabs);
```



