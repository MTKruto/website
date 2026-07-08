---
title: sendSecretContact
parent: /methods
metas:
  description: Send a contact to a secret chat. User-only.
---

Send a contact to a secret chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the secret chat.

</div></div></div><div><div class="font-mono" id="p_firstName" data-anchor="true"><span class="font-bold">firstName</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The contact's first name.

</div></div></div><div><div class="font-mono" id="p_phoneNumber" data-anchor="true"><span class="font-bold">phoneNumber</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The contact's phone number.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.sendSecretContact(id, firstName, phoneNumber);
```



