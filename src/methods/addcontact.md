---
title: addContact
---

Add a contact. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user to add as contact.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_firstName" data-anchor><span class="font-bold">firstName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_lastName" data-anchor><span class="font-bold">lastName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sharePhoneNumber" data-anchor><span class="font-bold">sharePhoneNumber</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.addContact(userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addContact(userId, { firstName, lastName, sharePhoneNumber });
```


