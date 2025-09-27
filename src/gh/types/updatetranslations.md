---
title: UpdateTranslations
parent: /types
---

Translations were updated.

```ts
client.on("translations", (ctx) => {
  console.log("Translations were just updated.");
  // ctx.translations
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_translations" data-anchor><span class="font-bold">translations</span><span class="opacity-50">:</span> <a href="/gh/types/translation"  >Translation</a><span class="opacity-50">[]</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The new translations.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_platform" data-anchor><span class="font-bold">platform</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The platform of the translations that were updated.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_language" data-anchor><span class="font-bold">language</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The language of the translations that were updated.

</div></div></div></div>

