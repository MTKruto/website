---
title: Secret Chats
parent: /#walkthrough
walkthrough:
  track: user
  order: 9
---

Secret chats are one-to-one, end-to-end encrypted conversations available to user clients. MTKruto handles the key exchange, encryption, and key rotation.

A secret chat has its own identifier. Use the other user's ordinary chat identifier only to request one; methods that operate on it use the returned secret chat identifier.

## Persisting Secret Chats

MTKruto stores secret chat keys and sequencing state in the client cache. To keep secret chats usable after a restart, use [persistent storage](/storage-adapters) and set `persistCache` to `true`.

```ts
const client = new Client({
  storage,
  persistCache: true,
  // ...
});
```

The storage contains secret chat key material and must be protected.

## Requesting a Secret Chat

Use {{ "requestSecretChat" |> m }} with the identifier of a private chat.

```ts
const secretChat = await client.requestSecretChat(chatId);

console.log(secretChat.id);
console.log(secretChat.type); // "pending"
```

Keep `secretChat.id`. It is the identifier used by every method that operates on the secret chat.

## Handling Secret Chat States

The `secretChat` update contains a {{ "SecretChat" |> t }} whenever a secret chat changes state. Access it through `ctx.secretChat`.

- `pending` means the request was sent and is waiting for the other user.
- `requested` means the other user requested a secret chat.
- `active` means messages can be sent.
- `discarded` means the secret chat has ended.

Accept incoming requests with {{ "acceptSecretChat" |> m }}. Check `userId` before accepting one.

```ts
client.on("secretChat", async (ctx) => {
  const secretChat = ctx.secretChat;

  if (
    secretChat.type === "requested" &&
    secretChat.userId === expectedUserId
  ) {
    await ctx.acceptSecretChat();
  }
});
```

Wait for an `active` secret chat before sending messages.

## Sending Messages

Use {{ "sendSecretMessage" |> m }} with the secret chat identifier.

```ts
await client.sendSecretMessage(secretChatId, "This message is encrypted.");
```

Set `ttl` to request a self-destruct timer in seconds. A value of `0` disables the timer.

```ts
await client.sendSecretMessage(secretChatId, "This message expires.", {
  ttl: 30,
});
```

Text and captions support `parseMode` and {{ "SecretMessageEntity" |> t }} objects. Secret message identifiers are strings. Pass one as `replyToMessageId` to quote a message.

```ts
await client.sendSecretMessage(secretChatId, "**Understood.**", {
  parseMode: "Markdown",
  replyToMessageId: message.id,
});
```

Secret sending methods return `void`, not the outgoing message.

## Sending Media and Other Content

Secret chats have separate methods for each supported content type:

- {{ "sendSecretPhoto" |> m }}, {{ "sendSecretVideo" |> m }}, and {{ "sendSecretAnimation" |> m }}
- {{ "sendSecretDocument" |> m }}, {{ "sendSecretAudio" |> m }}, and {{ "sendSecretVoice" |> m }}
- {{ "sendSecretVideoNote" |> m }} and {{ "sendSecretSticker" |> m }}
- {{ "sendSecretLocation" |> m }}, {{ "sendSecretVenue" |> m }}, and {{ "sendSecretContact" |> m }}

File methods accept a {{ "FileSource" |> t }}. MTKruto encrypts the file before uploading it.

```ts
await client.sendSecretPhoto(secretChatId, "./photo.jpg", {
  caption: "Encrypted photo",
  ttl: 30,
});
```

## Handling Secret Messages

Incoming messages arrive in the `secretMessage` update as a {{ "SecretMessage" |> t }}. Access them through `ctx.secretMessage`, not `ctx.msg`.

```ts
client.on("secretMessage", (ctx) => {
  const message = ctx.secretMessage;

  console.log(message.chatId, message.id, message.type, message.ttl);
});
```

Secret messages do not contain an ordinary chat or user. Keep the corresponding secret chat's `userId` if the participant's identity is needed.

Filter secret messages by content type when needed.

```ts
client.on("secretMessage:text", async (ctx) => {
  console.log(ctx.secretMessage.text);
  await ctx.replySecret("Received.", { isQuoted: true });
});
```

If an application stores or displays secret messages, it must respect each message's `ttl`.

## Downloading Secret Media

Encrypted media includes `fileInformation`. Pass it to {{ "download" |> m }} with the file identifier so MTKruto can decrypt the file.

```ts
client.on("secretMessage:document", async (ctx) => {
  const message = ctx.secretMessage;

  for await (
    const chunk of client.download(message.document.fileId, {
      fileInformation: message.fileInformation,
    })
  ) {
    // Process the decrypted chunk.
  }
});
```

## Typing and Screenshots

Use {{ "sendSecretTypingAction" |> m }} and {{ "sendSecretCancelTypingAction" |> m }} to update the typing state. The `secretTyping` update contains the identifier of a secret chat in which the other user is typing.

```ts
await client.sendSecretTypingAction(secretChatId);
await client.sendSecretCancelTypingAction(secretChatId);

client.on("secretTyping", (ctx) => {
  console.log(ctx.update.chatId);
});
```

If the application detects a screenshot, use {{ "sendSecretScreenshotNotification" |> m }} to notify the other participant. MTKruto does not detect screenshots.

```ts
await client.sendSecretScreenshotNotification(secretChatId, [message.id]);
```

## Ending a Secret Chat

Use {{ "endSecretChat" |> m }} to discard a secret chat. Set `isHistoryDeleted` to request deletion of its history.

```ts
await client.endSecretChat(secretChatId, {
  isHistoryDeleted: true,
});
```
