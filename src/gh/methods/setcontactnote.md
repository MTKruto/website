---
title: setContactNote
parent: /methods
metas:
  description: Set a contact note.
---

Set a contact note.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user to update the note for.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_note" data-anchor="true"><span class="font-bold">note</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

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
await client.setContactNote(userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setContactNote(userId, { note, noteEntities, noteParseMode });
```



