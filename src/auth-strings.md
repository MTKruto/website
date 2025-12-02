---
title: Auth Strings
parent: /#guides
---

Auth strings (or session strings) are a piece of text that holds the necessary information to authorize your client. They can be used to conveniently move around authorized sessions.

After authorizing your client, you can export the auth string like this:

```ts
const authString = await client.exportAuthString();
console.log("The auth string is", authString);
```

You can then store the returned value, and import it again whenever required:

```ts
await client.importAuthString(authString);
await client.start();
```

This will remove the need for going through the authorization flow when your storage is cleared. It is especially recommended if you are using the memory storage adapter.

## CLI Tool

[create-auth-string](https://github.com/MTKruto/create-auth-string) is a tool that lets you create auth strings without leaving the command line. To use it, run one of the following commands depending on your runtime.

{{ "@mtkruto/auth-string" |> create }}

## One Thing to Note

An auth string must only be used from a single network and only through a single connection. It will otherwise get invalidated, and a new one must be recreated.

For bots, the recreation will be handled automatically if a bot token is provided when [`start`](https://jsr.io/@mtkruto/mtkruto/doc/~/Client.prototype.start) or [`signIn`](https://jsr.io/@mtkruto/mtkruto/doc/~/Client.prototype.signIn) is called. But if you use a non-memory [storage adapter](/storage-adapters) and already have a bot token provided, it doesn't make sense to use auth strings in the first place.
