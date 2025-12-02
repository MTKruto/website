---
title: Catching Errors
parent: /#walkthrough
prev: /handling-updates
next: /working-with-messages
---

The `errors` namespace includes all errors that have a chance of being thrown by MTKruto.
This includes user input errors, access errors, TL errors, and Telegram API errors.

For a complete list of its members, refer to [its list of symbols.](https://jsr.io/@mtkruto/mtkruto/doc/~/errors)

The following snippet demonstrates how it can be used:

<code-group>

<code-group-item title="Deno, Web">

```ts
import * as Mtkruto from "{{ deno }}";

try {
  // do something
} catch (err) {
  console.debug("Failed to do something:", err);
  if (err instanceof Mtkruto.errors.InputError) {
    // The parameters passed to a high-level method[0] invocation were incorrect
    // [0]<https://mtkru.to/calling-methods/#highlevel-methods>
  } else if (err instanceof Mtkruto.errors.TLError) {
    // The parameters passed to a Telegram API method[0] invocation were incorrect
    // [0]<https://mtkru.to/calling-methods/#telegram-api-functions>
  } else if (err instanceof Mtkruto.errors.TelegramError) {
    // The Telegram API raised an error.
    // This may happen as a result of both
    // high- and low-level method calls.
    const errorCode = err.errorCode;
    const errorMessage = err.errorMessage;
  } else {
    /* ... */
  }
}
```

</code-group-item>

<code-group-item title="Node.js">

```ts
import * as Mtkruto "@mtkruto/node";

try {
  // do something
} catch (err) {
  console.debug("Failed to do something:", err);
  if (err instanceof Mtkruto.errors.InputError) {
    // The parameters passed to a high-level method[0] invocation were incorrect
    // [0]<https://mtkru.to/calling-methods/#highlevel-methods>
  } else if (err instanceof Mtkruto.errors.TLError) {
    // The parameters passed to a Telegram API method[0] invocation were incorrect
    // [0]<https://mtkru.to/calling-methods/#telegram-api-functions>
  } else if (err instanceof Mtkruto.errors.TelegramError) {
    // The Telegram API raised an error.
    // This may happen as a result of both
    // high- and low-level method calls.
    const errorCode = err.errorCode;
    const errorMessage = err.errorMessage;
  } else {
    /* ... */
  }
}
```

</code-group-item>

<code-group-item title="Web (esm.sh)">

```ts
import * as Mtkruto from "{{ esm }}";

try {
  // do something
} catch (err) {
  console.debug("Failed to do something:", err);
  if (err instanceof Mtkruto.errors.InputError) {
    // The parameters passed to a high-level method[0] invocation were incorrect
    // [0]<https://mtkru.to/calling-methods/#highlevel-methods>
  } else if (err instanceof Mtkruto.errors.TLError) {
    // The parameters passed to a Telegram API method[0] invocation were incorrect
    // [0]<https://mtkru.to/calling-methods/#telegram-api-functions>
  } else if (err instanceof Mtkruto.errors.TelegramError) {
    // The Telegram API raised an error.
    // This may happen as a result of both
    // high- and low-level method calls.
    const errorCode = err.errorCode;
    const errorMessage = err.errorMessage;
  } else {
    /* ... */
  }
}
```

</code-group-item>

</code-group>

## Telegram API Errors

Separate error classes are supported for common Telegram errors, all of which extend [`errors.TelegramError`](https://jsr.io/@mtkruto/mtkruto/doc/~/errors.TelegramError).

This means that you can do things like the following:

```ts
if (err instanceof Mtkruto.errors.FloodWait) { // FLOOD_WAIT_X
  const seconds = err.seconds; // X (number)
  err instanceof Mtkruto.errors.TelegramError; // true
} else if (err instanceof Mtkruto.errors.AdminsTooMuch) { // ADMINS_TOO_MUCH
  // kick some admins out
}
```

## Access Errors

Access errors, that is [`errors.AccessError`](https://jsr.io/@mtkruto/mtkruto/doc/~/errors.AccessError), are thrown when the MTKruto client doesn't have enough information to convince Telegram that they have enough rights to interact with a chat.

This usually happens with user accounts since they require more convincing of Telegram than bot accounts.

To decrease the chances of this happening, the chat that is to be interacted with must first be seen by the instance of the client controlling the user account. This may happen in a number of different ways, but here are some common ones:

- Searching messages ([searchMessages](/methods/searchmessages))
- Receiving a message (doesn't matter where from)
- Loading the user account's chat list ([getChats](/methods/getchats))
- Using one of its usernames (by passing it to [methods](/methods) accepting [ID](/types/ID))
