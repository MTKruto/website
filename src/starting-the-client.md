---
title: Starting the Client
parent: /#walkthrough
prev: /installation
next: /calling-methods
---

Here you will learn how you can construct and start a client assuming that you have already [installed MTKruto](./installation).

## Acquiring API Credentials

For your client to be able to authorize accounts, you need to have your own Telegram API credentials. To do that, you should create an application.

1. Visit [my.telegram.org/apps](https://my.telegram.org/apps).
2. Enter your phone number and login.
3. Fill in the form.
4. Click "Create application."

You should then be moved to somewhere where you can see your app's API ID and API hash.

> It is recommended that these credentials are not leaked.

## Constructing the Client

`Client` is the most essential class---it represents an MTProto client. Through it, you can interact with Telegram.

In fact, the constructor has no required arguments, but you usually pass the parameters `storage`, `apiId`, and `apiHash`, unless you know what you are doing.

The following examples show you how you can construct a client that uses the [storage adapter](/storage-adapters) [`StorageLocalStorage`](/storage-adapters#localstorage).

<code-group>

<code-group-item title="Deno, Web">

```ts
import { Client, StorageLocalStorage } from "{{ deno }}";

const client = new Client({
  storage: new StorageLocalStorage("my_client"),
  // Replace these with your app's credentials.
  apiId: 123456,
  apiHash: "",
});
```

</code-group-item>

<code-group-item title="Node.js">

```ts
import { Client, StorageLocalStorage } from "@mtkruto/node";

const client = new Client({
  storage: new StorageLocalStorage("my_client"),
  // Replace these with your app's credentials.
  apiId: 123456,
  apiHash: "",
});
```

</code-group-item>

<code-group-item title="Web (esm.sh)">

```ts
import { Client, StorageLocalStorage } from "{{ esm }}";

const client = new Client({
  storage: new StorageLocalStorage("my_client"),
  // Replace these with your app's credentials.
  apiId: 123456,
  apiHash: "",
});
```

</code-group-item>

</code-group>

## Connecting the Client and Authorizing an Account

Use the `start` method to connect the client and authorize an account.

If you pass no arguments to it, you will be requested the authorization credentials in runtime. You can also design your own user authorization experience by specifying resolver functions for each authorization step. For bots, it is recommended that the bot token is passed directly. If an account is already authorized or all credentials are passed directly, no credentials will be requested.

Here is how you can authorize a bot with its token.

```ts
await client.start({ botToken: "1234567890:AABCDEFGHIJKLMNOP" });
```

And here is an example on how you can use your own resolver functions for authorizing a user.

<code-group>

<code-group-item title="Bun, Deno, Web">

```ts
// The functions may also return promises.
await client.start({
  phone: () => prompt("Enter your phone number:")!,
  code: () => prompt("Enter the code you received:")!,
  password: () => prompt("Enter your account's password:")!,
});

console.log("Started.");
```

</code-group-item>
<code-group-item title="Node.js">

```ts
const { createInterface } = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const readline = createInterface({ input, output });
const prompt = (q) => new Promise((r) => readline.question(q + " ", r));

// Note that you cannot have top-level awaits in CommonJS contexts.
// It is recommended that this call is moved into a main async function,
// and that you continue with the other guides in that function's body.
client.start({
  phone: () => prompt("Enter your phone number:"),
  code: () => prompt("Enter the code you received:"),
  password: () => prompt("Enter your account's password:"),
}).then(() => {
  console.log("Started.");
});
```

</code-group-item>

</code-group>

Now try running your code and see if the "Started." message is logged. If it did, you are good to go!
