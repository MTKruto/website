---
title: startTakeoutSession
parent: /methods
metas:
  description: Start a takeout session. User-only.
---

Start a takeout session.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isExportingContacts" data-anchor="true"><span class="font-bold">isExportingContacts</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether contacts will be exported in the takeout session.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExportingPrivateChats" data-anchor="true"><span class="font-bold">isExportingPrivateChats</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether messages from private chats will be exported in the takeout session.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExportingGroupChats" data-anchor="true"><span class="font-bold">isExportingGroupChats</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether messages from group chats will be exported in the takeout session.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExportingSupergroupChats" data-anchor="true"><span class="font-bold">isExportingSupergroupChats</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether messages from supergroup chats will be exported in the takeout session.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExportingChannelChats" data-anchor="true"><span class="font-bold">isExportingChannelChats</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether messages from channel chats will be exported in the takeout session.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExportingFiles" data-anchor="true"><span class="font-bold">isExportingFiles</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether files will be exported in the takeout session.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_maxFileSize" data-anchor="true"><span class="font-bold">maxFileSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum file size that will be exported.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the takeout session.

</div></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.startTakeoutSession( {
    isExportingContacts,
    isExportingPrivateChats,
    isExportingGroupChats,
    isExportingSupergroupChats,
    isExportingChannelChats,
    isExportingFiles,
    maxFileSize,
});
```



