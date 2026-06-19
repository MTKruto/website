---
title: PollOption
parent: /types
metas:
  description: A poll option.
---

A poll option.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the option.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The option's text (1-100 characters).

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50">:</span> <a href="/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the option's text.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_voterCount" data-anchor="true"><span class="font-bold">voterCount</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Number of users that voted for this option.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isChosen" data-anchor="true"><span class="font-bold">isChosen</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether this option has been chosen.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_media" data-anchor="true"><span class="font-bold">media</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/pollmedia">PollMedia</a></div></div><div class="pl-3"><div class="no-margin">

The option's media.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addedBy" data-anchor="true"><span class="font-bold">addedBy</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/chatp">ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The user or chat which added the poll option.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addedAt" data-anchor="true"><span class="font-bold">addedAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

A point in time when the poll option was added.

</div></div></div></div>

