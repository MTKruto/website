---
title: signUp
parent: /methods
metas:
  description: Sign up.
---

Sign up.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_firstName" data-anchor="true"><span class="font-bold">firstName</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The first name to use for the account that is to be created.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_lastName" data-anchor="true"><span class="font-bold">lastName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

An optional last name to use for the account that is to be created.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>number</span></div><div class="pl-3"><div class="no-margin">

The user identifier of the new account.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.signUp(firstName);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.signUp(firstName, { lastName });
```



