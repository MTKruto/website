---
title: getPrivacySetting
parent: /methods
metas:
  description: Get a privacy setting. User-only.
---

Get a privacy setting.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_key" data-anchor><span class="font-bold">key</span><span class="opacity-50">:</span> <a href="/types/privacysettingkey"  >PrivacySettingKey</a></div><div class="pl-3"><div class="no-margin">

The key of the privacy setting.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/privacyrule"  >PrivacyRule</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getPrivacySetting(key);
```



