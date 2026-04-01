---
title: sendCode
parent: /methods
metas:
  description: Send a user verification code.
---

Send a user verification code.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_phoneNumber" data-anchor="true"><span class="font-bold">phoneNumber</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The phone number to send the code to.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.sendCode(phoneNumber);
```



