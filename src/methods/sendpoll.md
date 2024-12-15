---
title: sendPoll
---

Send a poll.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to send the poll to.

</div></div></div><div><div class="font-mono" id="p_question" data-anchor><span class="font-bold">question</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The poll's question.

</div></div></div><div><div class="font-mono" id="p_options" data-anchor><span class="font-bold">options</span><span class="opacity-50">:</span> <span class="opacity-50">[</span><span>string</span><span class="opacity-50">,</span> <span>string</span><span class="opacity-50">,</span> <span class="opacity-50">...</span><span>string</span><span class="opacity-50">[]</span><span class="opacity-50">]</span></div><div class="pl-3"><div class="no-margin">

The poll's options.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_questionEntities" data-anchor><span class="font-bold">questionEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the poll's question.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_questionParseMode" data-anchor><span class="font-bold">questionParseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the poll's question. If not provided, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_optionParseMode" data-anchor><span class="font-bold">optionParseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the poll's options. If not provided, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAnonymous" data-anchor><span class="font-bold">isAnonymous</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the poll should be anonymous.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor><span class="font-bold">type</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>&quot;quiz&quot;</span> <span class="opacity-50">|</span> <span>&quot;regular&quot;</span></div></div><div class="pl-3"><div class="no-margin">

The type of the poll.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_allowMultipleAnswers" data-anchor><span class="font-bold">allowMultipleAnswers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether multiple selections should be allowed. Only valid for regular polls.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_correctOptionIndex" data-anchor><span class="font-bold">correctOptionIndex</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Index of the correct option. Required for quiz polls.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_explanation" data-anchor><span class="font-bold">explanation</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A text that will be shown to the user when the poll is answered. Only valid for quiz polls.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_explanationParseMode" data-anchor><span class="font-bold">explanationParseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the explanation. If not provided, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_explanationEntities" data-anchor><span class="font-bold">explanationEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The explanation's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_openPeriod" data-anchor><span class="font-bold">openPeriod</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Duration of the poll in seconds. Must be in the range of 5-600. Cannot be used simultaneously with `closeDate`.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_closeDate" data-anchor><span class="font-bold">closeDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

The time in which the poll will be closed. Must be at least 5 seconds in the future, and no more than 600. Cannot be used simultaneously with `openPeriod`.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isClosed" data-anchor><span class="font-bold">isClosed</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the poll should be closed as soon as it is sent, allowing no answers.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_disableNotification" data-anchor><span class="font-bold">disableNotification</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to send the message in a silent way without making a sound on the recipients' clients.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_protectContent" data-anchor><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the message from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyTo" data-anchor><span class="font-bold">replyTo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replyto"  >ReplyTo</a></div></div><div class="pl-3"><div class="no-margin">

Information on what the message is replying to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageThreadId" data-anchor><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a thread to send the message to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAs" data-anchor><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message on behalf of. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_effectId" data-anchor><span class="font-bold">effectId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message effect to be attached to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAt" data-anchor><span class="font-bold">sendAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

If specified, the message will be scheduled to be sent at that date. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business connection ID to perform the action on. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_paidBroadcast" data-anchor><span class="font-bold">paidBroadcast</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyMarkup" data-anchor><span class="font-bold">replyMarkup</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replymarkup"  >ReplyMarkup</a></div></div><div class="pl-3"><div class="no-margin">

The reply markup of the message. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/messagepoll"  >MessagePoll</a></div><div class="pl-3"><div class="no-margin">

The sent poll.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.sendPoll(chatId, question, options);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendPoll(chatId, question, options, {
    questionEntities,
    questionParseMode,
    optionParseMode,
    isAnonymous,
    type,
    allowMultipleAnswers,
    correctOptionIndex,
    explanation,
    explanationParseMode,
    explanationEntities,
    openPeriod,
    closeDate,
    isClosed,
    disableNotification,
    protectContent,
    replyTo,
    messageThreadId,
    sendAs,
    effectId,
    sendAt,
    businessConnectionId,
    paidBroadcast,
    replyMarkup,
});
```



