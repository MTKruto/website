---
title: Polls
parent: /#walkthrough
walkthrough:
  track: main
  order: 11
---

Polls let users choose from a list of options directly in a chat. Use {{ "sendPoll" |> m }} with a question and an array of {{ "InputPollOption" |> t }} objects.

## Sending a Poll

```ts
const message = await client.sendPoll(
  chatId,
  "Which runtime do you use?",
  [
    { text: "Deno" },
    { text: "Node.js" },
    { text: "Bun" },
  ],
);
```

Polls are anonymous by default. Set `isAnonymous` to `false` when individual votes must be visible. Regular polls can also allow more than one answer.

```ts
await client.sendPoll(chatId, "Which runtimes do you use?", [
  { text: "Deno" },
  { text: "Node.js" },
  { text: "Bun" },
], {
  isAnonymous: false,
  isMultipleAnswersAllowed: true,
});
```

Within an update handler, use `ctx.replyPoll` to send the poll to the current chat.

## Sending a Quiz

A quiz has one or more correct options. Set `type` to `"quiz"` and provide their zero-based indexes. The optional explanation is shown after an answer is submitted.

```ts
await client.sendPoll(chatId, "What does MTProto power?", [
  { text: "Telegram" },
  { text: "Matrix" },
], {
  type: "quiz",
  correctOptionIndexes: [0],
  explanation: "MTProto is Telegram's protocol.",
});
```

## Handling Poll Updates

The `poll` update contains the latest state of a poll, including its options and total voter count.

```ts
client.on("poll", (ctx) => {
  const { options, totalVoterCount } = ctx.update.poll;
  console.log(options, totalVoterCount);
});
```

For non-anonymous polls, `pollAnswer` contains the voter and the indexes they selected.

```ts
client.on("pollAnswer", (ctx) => {
  const { pollId, from, optionIndexes } = ctx.update.pollAnswer;
  console.log(pollId, from, optionIndexes);
});
```

## Stopping a Poll

Stop a poll with {{ "stopPoll" |> m }}. No more answers can be submitted after it is stopped.

```ts
await client.stopPoll(chatId, message.id);
```
