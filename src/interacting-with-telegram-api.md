---
title: Interacting with Telegram API
---

## Representation of Telegram API Objects

- MTKruto represents the functions and the constructors of Telegram API in a
  bare object with its `_` key set to the name of the constructor according to
  the [API schema](https://core.telegram.org/schema).

- An instance of
  [`inputPeerSelf`](https://core.telegram.org/constructor/inputPeerSelf) is
  represented as follows:

```ts
{
  _: "inputPeerSelf";
}
```

- Other keys of the object can be the parameters of the constructor with the
  same casing as in API scheme files. So, a
  [`peerUser`](https://core.telegram.org/constructor/inputPeerSelf) instance
  with its `user_id` parameter set to `1234` is represented like:

```ts
{ _: "peerUser", user_id: 1234n }
```

- Parameters of the type [`long`](https://core.telegram.org/type/long) are
  represented as big ints.

```ts
// constructor1 param:bigint = Type
{
    _: "constructor1",
    param: 1234n,
}
```

- Parameters of the types [`int`](https://core.telegram.org/type/int) and
  [`double`](https://core.telegram.org/type/double) are represented as numbers.

```ts
// constructor1 param:int duration:double = Type
{
    _: "constructor1",
    param: 10,
    duration: 1.0,
}
```

- Parameters of the type [`string`](https://core.telegram.org/type/string) are
  represented as strings.

```ts
// constructor1 name:string = Type
{
    _: "constructor1",
    name: "MTKruto",
}
```

- Parameters of the type [`bytes`](https://core.telegram.org/type/bytes) are
  represented as instances of `Uint8Array`.

```ts
// constructor1 data:bytes = Type
{
    _: "constructor1",
    data: new Uint8Array([77,  84,  75, 114, 117, 116, 111]),
}
```

- Parameters of the type `flags.N?true` are either omitted from the object or
  have the value `true`.

```ts
// constructor1 flags:# check:flags.0?true = Type
{
    _: "constructor1",
    check: true,
}

// or omit `check`
{
    _: "constructor1",
}
```

- Parameters that are other constructors are also represented the same way.

```ts
// constructor2 = Type2
// constructor1 param:constructor2 = Type
{
    _: "constructor1",
    param: {
        "_": "constructor2",
    },
}
```

- Parameters like `flags:#` are never provided explicitly. They are processed
  internally.

## Type Declarations

Type declaraions for Telegram API constructors are accessible from the `Api`
namespace, which is exported from the root.

- All types have the same casing as the API schema. So the types and functions
  are all-lower, and enums are first-upper.
- When accessing type declarations, the periods in original identifiers must be
  replaced with an underscore. So, the declaration for
  [`updates.updates`](https://core.telegram.org/constructor/updates.update) is
  at `Api.updates_updates`, and so on.

## Utilities

To make dealing with these kinds of objects easier, you can use the built-in
utilities.

- Use `Api.is()` to compare types.

```ts
if (Api.is("user", object)) {
  /* ... */
}
```

- Use `Api.isOfEnum()` to see if a specific object is a member of a specific
  enum.

```ts
if (Api.isOfEnum("Updates", object)) {
  /* ... */
}
```

## Calling Functions

To call Telegram API functions, use the client's `invoke()` method. It takes an
instance of a function object, and returns a promise resolving to the result.

```ts
const config = await client.invoke({ _: "help.getConfig" });
```

## Handling Updates

Telegram API updates can be handled using the filter query `update`:

```ts
client.on("update", (ctx) => {
  // ctx.update
});
```

To handle only specific types, you need to replace the filter query with the
[type of the update](https://core.telegram.org/type/Update):

```ts
client.on("updateNewMessage", (ctx) => {
  // ctx.update
});

client.on("updateDeleteMessages", (ctx) => {
  // ctx.update
});
```

Note that Telegram API updates and MTKruto's high-level update types are sent
differently. For instance, if a middleware includes a handler for
`updateNewMessage` (Telegram API) and another for `message` (MTKruto
[`Message`](/types/Message)), both of them will be called regardless of them
having called `next` or not.

```ts
client.on("updateNewMessage", () => {
  console.log("1");
});

client.on("message", () => {
  console.log("2");
});

// Output when private messages are received:
// 1, 2, 1, 2, ...
```
