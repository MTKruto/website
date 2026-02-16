---
title: checkCode
parent: /methods
metas:
  description: Check if a code entered by the user was the same as the verification code. 
---

Check if a code entered by the user was the same as the verification code.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_code" data-anchor="true"><span class="font-bold">code</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

A code entered by the user.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/codecheckresult">CodeCheckResult</a></div>

### Syntax

```ts
await client.checkCode(code);
```



