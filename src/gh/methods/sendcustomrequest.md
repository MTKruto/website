---
title: sendCustomRequest
parent: /methods
metas:
  description: Send a custom request. Bot-only.
---

Send a custom request.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_method" data-anchor><span class="font-bold">method</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The name of the method.

</div></div></div><div><div class="font-mono" id="p_params" data-anchor><span class="font-bold">params</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The parameters of the method.

</div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div>

### Syntax

```ts
await client.sendCustomRequest(method, params);
```



