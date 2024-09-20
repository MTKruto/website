---
title: Poll
---

A poll.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_id" data-anchor><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the poll.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_question" data-anchor><span class="font-bold">question</span><span class="opacity-50">:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The poll's question.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_questionEntities" data-anchor><span class="font-bold">questionEntities</span><span class="opacity-50">:</span> <a href="/gh/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the poll's question.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_options" data-anchor><span class="font-bold">options</span><span class="opacity-50">:</span> <a href="/gh/types/polloption"  >PollOption</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The poll's options.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_totalVoterCount" data-anchor><span class="font-bold">totalVoterCount</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of users who have participated in the poll.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isClosed" data-anchor><span class="font-bold">isClosed</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the poll is closed.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAnonymous" data-anchor><span class="font-bold">isAnonymous</span><span class="opacity-50">:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the poll is anonymous.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;regular&quot;</span> <span class="opacity-50">|</span> <span>&quot;quiz&quot;</span></div></div><div class="pl-3"><div class="no-margin">

The type of the poll.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_allowMultipleAnswers" data-anchor><span class="font-bold">allowMultipleAnswers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the poll allows multiple answers.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_correctOptionIndex" data-anchor><span class="font-bold">correctOptionIndex</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Index of the correct option.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_explanation" data-anchor><span class="font-bold">explanation</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A text that is shown to the user when the poll is answered.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_explanationEntities" data-anchor><span class="font-bold">explanationEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The explanation's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_openPeriod" data-anchor><span class="font-bold">openPeriod</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Duration of the poll in seconds.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_closeDate" data-anchor><span class="font-bold">closeDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

The time in which the poll will be closed.

</div></div></div></div>

