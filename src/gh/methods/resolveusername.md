---
title: resolveUsername
parent: /methods
metas:
  description: Resolve a username.
---

Resolve a username.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_username" data-anchor="true"><span class="font-bold">username</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_referrer" data-anchor="true"><span class="font-bold">referrer</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Affiliate program referrer.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatp">ChatP</a></div>

### Syntax

```ts
// Required parameters only.
await client.resolveUsername(username);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.resolveUsername(username, { referrer });
```



