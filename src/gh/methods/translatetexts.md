---
title: translateTexts
parent: /methods
metas:
  description: Translate multiple texts. User-only.
---

Translate multiple texts.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_toLanguage" data-anchor="true"><span class="font-bold">toLanguage</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The code of the language to translate into.

</div></div></div><div><div class="font-mono" id="p_texts" data-anchor="true"><span class="font-bold">texts</span><span class="opacity-50">:</span> <a href="/gh/types/texttotranslate">TextToTranslate</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The texts to translate.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">TranslatedText</span><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.translateTexts(toLanguage, texts);
```



