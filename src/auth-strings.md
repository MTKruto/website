---
title: Auth Strings
parent: /#guides
---

Auth strings (or session strings) are a piece of text that holds the necessary
information to authorize your client. They can be used to move authorized
sessions around easily.

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

This will remove the need for going through the authorization flow when your
storage is cleared. It is especially recommended if you are using the memory
storage adapter.
