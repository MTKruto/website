---
title: MessageText
---

A text message.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">out</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message is outgoing (sent by the current user).

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">threadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message's thread.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">from</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The user who sent the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">senderChat</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The chat which the message was sent on behalf of.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">date</span><span class="opacity-50">:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

The point in time in which the message was sent.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">chat</span><span class="opacity-50">:</span> <a href="/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The chat where the message was sent to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">link</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A link to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwardFrom</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The original sender of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwardFromChat</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/chatp"  >ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The original chat of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwardId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The original identifier of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwardSignature</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The original signature of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwardSenderName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The name of the original sender of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwardDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

The point in time in which the original message was sent.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isTopicMessage</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message was sent in a topic thread.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">isAutomaticForward</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message is an automatic forward.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyToMessage</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/message"  >Message</a></div></div><div class="pl-3"><div class="no-margin">

The message that is being replied to. Not always available even if a message is being replied to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyToMessageId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message that is being replied to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">reactions</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messagereaction"  >MessageReaction</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The reactions of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyQuote</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replyquote"  >ReplyQuote</a></div></div><div class="pl-3"><div class="no-margin">

The part of the message that is being replied to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">viaBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/user"  >User</a></div></div><div class="pl-3"><div class="no-margin">

The inline bot that was used to send this message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">editDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

The point in time in which the message's last edit was made.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">hasProtectedContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the contents of the message is protected.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">mediaGroupId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the message's media group.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">authorSignature</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The signature of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">views</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of times the message was viewed.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">forwards</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of times the message was forwarded.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The message's reply markup.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">senderBoostCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">viaBusinessBot</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/user"  >User</a></div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The text included in the message

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">entities</span><span class="opacity-50">:</span> <a href="/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

Entities of the text

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">linkPreview</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/linkpreview"  >LinkPreview</a></div></div><div class="pl-3"><div class="no-margin">

The message's link preview.

</div></div></div></div>

