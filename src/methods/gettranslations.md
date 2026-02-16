---
title: getTranslations
parent: /methods
metas:
  description: Get translations. User-only.
---

Get translations.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_platform" data-anchor="true"><span class="font-bold">platform</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The platform to get translations for. Defaults to the client's platform.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_language" data-anchor="true"><span class="font-bold">language</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The language to get translations for. Defaults to the client's language.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/translation">Translation</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.getTranslations( { platform, language });
```



