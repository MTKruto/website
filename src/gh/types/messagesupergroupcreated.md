---
title: MessageSupergroupCreated
parent: /types
---

A message that is received by user accounts when a supergroup is created.
While bots don't receive them, they are able to see them if someone replies to them.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isOutgoing" data-anchor><span class="font-bold">isOutgoing</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message is outgoing (sent by the current user).

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_threadId" data-anchor><span class="font-bold">threadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message's thread.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_from" data-anchor><span class="font-bold">from</span><span class="opacity-50">:</span> <a href="/gh/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The sender of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_date" data-anchor><span class="font-bold">date</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The point in time in which the message was sent.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chat" data-anchor><span class="font-bold">chat</span><span class="opacity-50">:</span> <a href="/gh/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The chat where the message was sent to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_link" data-anchor><span class="font-bold">link</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A link to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_forwardFrom" data-anchor><span class="font-bold">forwardFrom</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/forwardheader"  >ForwardHeader</a></div></div><div class="pl-3"><div class="no-margin">

Information on the original message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isTopicMessage" data-anchor><span class="font-bold">isTopicMessage</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message was sent in a topic thread.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAutomaticForward" data-anchor><span class="font-bold">isAutomaticForward</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message is an automatic forward.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyToMessage" data-anchor><span class="font-bold">replyToMessage</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/message"  >Message</a></div></div><div class="pl-3"><div class="no-margin">

The message that is being replied to. Not always available even if a message is being replied to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyToMessageId" data-anchor><span class="font-bold">replyToMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message that is being replied to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_reactions" data-anchor><span class="font-bold">reactions</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messagereaction"  >MessageReaction</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The reactions of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyQuote" data-anchor><span class="font-bold">replyQuote</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/replyquote"  >ReplyQuote</a></div></div><div class="pl-3"><div class="no-margin">

The part of the message that is being replied to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_viaBot" data-anchor><span class="font-bold">viaBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The inline bot that was used to send this message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_editDate" data-anchor><span class="font-bold">editDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The point in time in which the message's last edit was made.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_hasProtectedContent" data-anchor><span class="font-bold">hasProtectedContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the contents of the message is protected.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_mediaGroupId" data-anchor><span class="font-bold">mediaGroupId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message's media group.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_authorSignature" data-anchor><span class="font-bold">authorSignature</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The signature of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_views" data-anchor><span class="font-bold">views</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of times the message was viewed.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_forwards" data-anchor><span class="font-bold">forwards</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of times the message was forwarded.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyMarkup" data-anchor><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The message's reply markup.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business conection that the message was sent in.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_senderBoostCount" data-anchor><span class="font-bold">senderBoostCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of the boosts made by the sender of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_viaBusinessBot" data-anchor><span class="font-bold">viaBusinessBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of the business connection in which the message was sent.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_effectId" data-anchor><span class="font-bold">effectId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message effect that has been attached to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_scheduled" data-anchor><span class="font-bold">scheduled</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message is scheduled.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_selfDestruct" data-anchor><span class="font-bold">selfDestruct</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/selfdestructoption"  >SelfDestructOption</a></div></div><div class="pl-3"><div class="no-margin">

The message's self-destruct preference.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_supergroupCreated" data-anchor><span class="font-bold">supergroupCreated</span><span class="opacity-50">:</span> true</div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div></div>

