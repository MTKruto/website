---
title: sendContact
parent: /methods
metas:
  description: Send a contact.
---

Send a contact.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the contact to.

</div></div></div><div><div class="font-mono" id="p_firstName" data-anchor="true"><span class="font-bold">firstName</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The contact's first name.

</div></div></div><div><div class="font-mono" id="p_phoneNumber" data-anchor="true"><span class="font-bold">phoneNumber</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The contact's phone number.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagecontact">MessageContact</a></div><div class="pl-3"><div class="no-margin">

The sent contact.

</div></div>

### Syntax

```ts
await client.sendContact(chatId, firstName, phoneNumber);
```



