---
title: Topics
parent: /#walkthrough
prev: /stories
next: /chat-members
---

Forum topics separate conversations in a supergroup. The supergroup must have topics enabled.

## Enabling Topics

User clients can enable topics with {{ "enableTopics" |> m }}. The second argument controls whether topics are shown as tabs.

```ts
await client.enableTopics(chatId, false);
```

## Creating a Topic

```ts
const topic = await client.createTopic(chatId, "Announcements");
```

## Sending Messages to a Topic

Set `messageThreadId` to the topic identifier.

```ts
await client.sendMessage(chatId, "Welcome.", {
  messageThreadId: topic.id,
});
```

The same option is available on other message-sending methods.

## Handling Topic Messages

Messages sent in a topic have `isTopicMessage` set to `true`. Their `threadId` is the topic identifier.

```ts
client.on("message", (ctx) => {
  if (ctx.msg.isTopicMessage) {
    console.log(ctx.msg.threadId);
  }
});
```

## Listing Topics

User clients can list a forum's topics with {{ "getTopics" |> m }}.

```ts
const { items } = await client.getTopics(chatId);

for (const { topic } of items) {
  if (topic.type === "active") {
    console.log(topic.id, topic.name);
  }
}
```

## Managing a Topic

```ts
await client.editTopic(chatId, topic.id, "News");
await client.closeTopic(chatId, topic.id);
await client.reopenTopic(chatId, topic.id);
await client.deleteTopic(chatId, topic.id);
```
