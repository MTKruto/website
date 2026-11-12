---
title: getBusinessConnection
parent: /methods
metas:
  description: Get a business connection. Bot-only.
---

Get a business connection.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">BOT-ONLY</span></span> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the business connection.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/businessconnection"  >BusinessConnection</a></div>

### Syntax

```ts
await client.getBusinessConnection(id);
```



