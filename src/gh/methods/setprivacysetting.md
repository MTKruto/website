---
title: setPrivacySetting
parent: /methods
metas:
  description: Set a privacy setting. User-only.
---

Set a privacy setting.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_key" data-anchor="true"><span class="font-bold">key</span><span class="opacity-50">:</span> <a href="/gh/types/privacysettingkey">PrivacySettingKey</a></div><div class="pl-3"><div class="no-margin">

The key of the privacy setting.

</div></div></div><div><div class="font-mono" id="p_rules" data-anchor="true"><span class="font-bold">rules</span><span class="opacity-50">:</span> <span href="/">InputPrivacyRule</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The rules to set.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">PrivacyRule</span><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.setPrivacySetting(key, rules);
```



