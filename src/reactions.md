---
title: Reactions
prev: /commands
---

## Reacting to Messages

There are three methods you can use to react to messages:

1. {{ "setReactions" |> m }}
2. {{ "addReaction" |> m }}
3. {{ "removeReaction" |> m }}

If you want to change all the reactions made to a message at once, use
setReactions.

```ts
// react with thumbs up
await client.setReactions(
  chatId,
  messageId,
  [{ type: "emoji", emoji: "👍" }],
  { big: true },
);

// remove all reactions
await client.setReactions(chatId, messageId, []);

// react with a custom emoji
await client.setReactions(
  chatId,
  messageId,
  [{ type: "customEmoji", id: "1234567" }],
);

client.on("message", async (ctx) => {
  // react to the received message with thumbs up
  await ctx.react([{ type: "emoji", emoji: "👍" }]);
});
```

If you just want to add or remove a specific reaction, use addReaction or
removeReaction.

```ts
// removes thumbs down
await client.removeReaction(
  chatId,
  messageId,
  { type: "emoji", emoji: "👎" },
);

// adds thumbs up
await client.addReaction(
  chatId,
  messageId,
  { type: "emoji", emoji: "👍" },
);
```

## Reaction Updates

Bots receive two kinds of updates for reactions: {{ "UpdateMessageReactions" |>
t }}, and {{ "UpdateMessageReactionCount" |> t }}.

The former is received when a user reacts to a message in a private chat, a
basic group, or a supergroup chat. It includes information on the user who made
the reaction.

The latter on the other hand, is received when the reactions to a channel post
change. It only includes reaction counts, and no references to the users who
made them.

```ts
// received only for private chats and groups
client.on("messageReactions", (ctx) => {
  const {
    // the user who made the reaction
    user,
    // the chat that the reaction was made on behalf of
    chat,
    // the user's previous reactions to the message
    oldReactions,
    // the user's new reactions to the message
    newReactions,
  } = ctx.messageReactions;
});

// received only for channels
client.on("messageReactionCount", (ctx) => {
  const { reactions } = ctx.messageReactionCount;
  console.log("-----");
  for (const { reaction, count } of reactions) {
    console.log("The reaction", reaction, "was made", count, "time(s).");
  }
});
```

Users have only one update type related to reactions: {{
"UpdateMessageInteractions" |> t }}. It is received for all types of chats.

```ts
client.on("messageInteractions", (ctx) => {
  console.log("New message interactions:", ctx.messageInteractions);
});
```
