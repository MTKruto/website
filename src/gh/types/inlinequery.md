---
title: InlineQuery
parent: /types
---

An incoming inline query.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the inline query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_from" data-anchor="true"><span class="font-bold">from</span><span class="opacity-50">:</span> <a href="/gh/types/user">User</a></div></div><div class="pl-3"><div class="no-margin">

The user who made the inline query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_query" data-anchor="true"><span class="font-bold">query</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The query that was made.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The offset parameter that was passed to the last [answerInlineQuery](/methods/answerInlineQuery) call.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chatType" data-anchor="true"><span class="font-bold">chatType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>&quot;sender&quot;</span> <span class="opacity-50">|</span> <span>&quot;private&quot;</span> <span class="opacity-50">|</span> <span>&quot;group&quot;</span> <span class="opacity-50">|</span> <span>&quot;supergroup&quot;</span> <span class="opacity-50">|</span> <span>&quot;channel&quot;</span></div></div><div class="pl-3"><div class="no-margin">

The type of the chat from which the inline query was made.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_location" data-anchor="true"><span class="font-bold">location</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/location">Location</a></div></div><div class="pl-3"><div class="no-margin">

The location of the user who made the inline query.

</div></div></div></div>

