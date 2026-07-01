---
title: signIn
parent: /methods
metas:
  description: Signs in using the provided parameters if not already signed in.
---

Signs in using the provided parameters if not already signed in.
If no parameters are provided, the credentials will be prompted in runtime.

Notes:
1. Requires the `apiId` and `apiHash` parameters to be passed when constructing the client.
2. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_params" data-anchor="true"><span class="font-bold">params</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">SignInParams</span></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Without the optional parameter.
await client.signIn();

// With the optional parameter.
await client.signIn(params);
```



