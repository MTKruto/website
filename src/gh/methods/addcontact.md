---
title: addContact
parent: /methods
metas:
  description: Add a contact. User-only.
---

Add a contact.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user to add as contact.

</div></div></div><div><div class="font-mono" id="p_firstName" data-anchor="true"><span class="font-bold">firstName</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The contact's first name.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_lastName" data-anchor="true"><span class="font-bold">lastName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The contact's last name.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isPhoneNumberShared" data-anchor="true"><span class="font-bold">isPhoneNumberShared</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the phone number of the current account should be shared with the new contact.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_phoneNumber" data-anchor="true"><span class="font-bold">phoneNumber</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The contact's phone number.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_note" data-anchor="true"><span class="font-bold">note</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A note to attach to the contact.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_noteEntities" data-anchor="true"><span class="font-bold">noteEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The note's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_noteParseMode" data-anchor="true"><span class="font-bold">noteParseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/parsemode">ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the note

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.addContact(userId, firstName);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addContact(userId, firstName, {
    lastName,
    isPhoneNumberShared,
    phoneNumber,
    note,
    noteEntities,
    noteParseMode,
});
```



