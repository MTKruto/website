---
title: setProfileColor
---

Set the profile color of the current user. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_color" data-anchor><span class="font-bold">color</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the color to set.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_customEmojiId" data-anchor><span class="font-bold">customEmojiId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Identifier of a custom emoji to display in the profile.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setProfileColor(color);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setProfileColor(color, { customEmojiId });
```



