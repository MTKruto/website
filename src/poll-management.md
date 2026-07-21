---
title: Poll Management
parent: /#walkthrough
walkthrough:
  track: user
  order: 33
---

Users can vote in polls and manage poll options.

## Voting

{{ "vote" |> m }} selects poll options, and {{ "retractVote" |> m }} retracts the selection.

```ts
await client.vote(chatId, messageId, [0]);
await client.retractVote(chatId, messageId);
```

## Listing Voters

{{ "getPollVoters" |> m }} lists voters for a non-anonymous poll option.

```ts
const voters = await client.getPollVoters(chatId, messageId, {
  optionIndex: 0,
});
```

## Managing Options

Polls that allow suggestions accept new options with {{ "addPollOption" |> m }} and remove them with {{ "removePollOption" |> m }}.

```ts
await client.addPollOption(chatId, messageId, {
  text: "Another option",
});
```

```ts
await client.removePollOption(chatId, messageId, optionIndex);
```
