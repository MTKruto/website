---
title: MessageReactions
---

The reactions of a user to a messages in a group.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_chat" data-anchor><span class="font-bold">chat</span><span class="opacity-50">:</span> <a href="/gh/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The chat containing the message the user reacted to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The message's identifier.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_user" data-anchor><span class="font-bold">user</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The user who changed their reactions to the message. Unset if done on behalf of a chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_actorChat" data-anchor><span class="font-bold">actorChat</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The chat that changed its reactions to the message. Unset if done on behalf of a user.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_date" data-anchor><span class="font-bold">date</span><span class="opacity-50">:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

The point in time in which the change was made.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_oldReactions" data-anchor><span class="font-bold">oldReactions</span><span class="opacity-50">:</span> <a href="/gh/types/reaction"  >Reaction</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The previous reactions.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_newReactions" data-anchor><span class="font-bold">newReactions</span><span class="opacity-50">:</span> <a href="/gh/types/reaction"  >Reaction</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The current reactions.

</div></div></div></div>

