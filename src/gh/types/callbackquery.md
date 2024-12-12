---
title: CallbackQuery
---

A received callback query.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the callback query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_from" data-anchor><span class="font-bold">from</span><span class="opacity-50">:</span> <a href="/gh/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The user who made the callback query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_message" data-anchor><span class="font-bold">message</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/message"  >Message</a></div></div><div class="pl-3"><div class="no-margin">

The message from which the callback query was made. Unset if made from an inline result message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_inlineMessageId" data-anchor><span class="font-bold">inlineMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the inline result message from which the callback query was made. Unset if made from a message not originating from an inline query result.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chatInstance" data-anchor><span class="font-bold">chatInstance</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A special identifier for the chat in which the callback was made from. Useful for inline result messages.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_data" data-anchor><span class="font-bold">data</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The data associated with the button that was used to make the callback query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_gameShortName" data-anchor><span class="font-bold">gameShortName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The short name of the game to be returned.

</div></div></div></div>

