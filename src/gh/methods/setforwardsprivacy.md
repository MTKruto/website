---
title: setForwardsPrivacy
parent: /methods
metas:
  description: Set forwards privacy setting. User-only.
---

Set forwards privacy setting.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_rules" data-anchor="true"><span class="font-bold">rules</span><span class="opacity-50">:</span> <a href="/gh/types/inputprivacyrule">InputPrivacyRule</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The rules to set.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/privacyrule">PrivacyRule</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.setForwardsPrivacy(rules);
```



