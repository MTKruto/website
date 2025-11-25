---
title: Storage Adapters
parent: /#guides
---

Just as any Telegram client, MTKruto requires persistent storage to work
properly. Storage adapters define an interface to persist data. There are
multiple built-in storage adapters, and others can always be implemented by
extending and implementing the interface
[`Storage`](https://deno.land/x/mtkruto@0.1.141/storage/0_storage.ts?source=#L35).

This page lists the built-in storage adapters and shows how they can be used.

## Memory

This storage adapter stores data in the memory. It is ideal for bots.

To use it, just pass `null` to the client constructor's storage parameter:

```ts
const client = new Client({
  storage: null,
  /* ... */
});
```

This storage adapter is supported on all runtimes.

## sessionStorage

This storage adapter is not recommended for general use. It stores data using
[sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

To use it, import the `StorageSessionStorage` class, construct it with a valid
prefix, and pass it to the client's constructor:

```ts
const client = new Client({
  storage: new StorageSessionStorage("myclient"),
  /* ... */
});
```

This storage adapter is supported only inside browsers and on Deno.

## localStorage

This storage adapter persista data into
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

To use it, import the `StorageLocalStorage` class, construct it with a valid
prefix, and pass it to the client's constructor:

```ts
const client = new Client({
  storage: new StorageLocalStorage("myclient"),
  /* ... */
});
```

This storage adapter is natively supported inside browsers and on Deno. It uses
[`node-localstorage`](https://npm.im/node-localstorage) in Node.js.

## Deno KV

This storage adapter persists data inside a
[Deno KV](https://docs.deno.com/kv/manual) database.

To use it, import the `StorageDenoKV` class from the path specified below,
construct it (optionally with a path provided), and pass it to the client's
constructor:

```ts
import { StorageDenoKV } from "{{ deno }}/storage/1_storage_deno_kv.ts";

const client = new Client({
  storage: new StorageDenoKV(),
  /* ... */
});
```

This module is natively supported on Deno, and unsupported for browsers. To use
it on Node.js, the following required packages must be installed:

{{ "@deno/kv @mtkruto/storage-denokv" |> install }}

Then, import the `StorageDenoKV` class from `@mtkruto/storage-denokv`:

<code-group>

<code-group-item title="CommonJS">

```ts
const { StorageDenoKV } = require("@mtkruto/storage-denokv");

const client = new Client({
  storage: new StorageDenoKV(),
  /* ... */
});
```

</code-group-item>

<code-group-item title="ECMAScript">

```ts
import { StorageDenoKV } from "@mtkruto/storage-denokv";

const client = new Client({
  storage: new StorageDenoKV(),
  /* ... */
});
```

</code-group-item>

</code-group>

## IndexedDB

This storage adapter uses the browser API
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to
persist data. It also supports file storage by default, meaning that file chunks
can automatically be persisted as soon as downloaded.

To use it, import the `StorageIndexedDB` class, construct it with a database
name to use, and pass it to the client's constructor:

<code-group>

<code-group-item title="@mtkruto/browser">

```ts
import { StorageIndexedDB } from "@mtkruto/browser";

const client = new Client({
    storage: new StorageIndexedDB("client"),
    /\* ... \*/
});
```

</code-group-item>

<code-group-item title="esm.sh">

```ts
import { StorageIndexedDB } from "{{ esm }}";

const client = new Client({
    storage: new StorageIndexedDB("client"),
    /\* ... \*/
});
```

</code-group-item>

<code-group-item title="Deno">

```ts
import { StorageIndexedDB } from "{{ deno }}/mod.ts";

const client = new Client({
    storage: new StorageIndexedDB("client"),
    /\* ... \*/
});
```

</code-group-item>

</code-group>

This storage adapter is only supported in browsers.
