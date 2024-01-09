# Storage Adapters

Just as any Telegram client, MTKruto requires persistent storage to work properly.
Storage adapters define an interface to persist data.
There are multiple built-in storage adapters, and others can always be implemented by extending and implementing the abstract class [`Storage`](https://deno.land/x/mtkruto@0.1.141/storage/0_storage.ts?source=#L35).

This page lists the built-in storage adapters and shows how they can be used.

## Memory

This storage adapter is not recommended for general use.
It stores data in the memory.

To use it, just pass `null` to the client constructor's storage parameter:

```ts
const client = new Client(null, /* ... */);
```

This storage adapter is supported on all runtimes.

## sessionStorage

This storage adapter is not recommended for general use.
It stores data using [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

To use it, import the `StorageSessionStorage` class, construct it with a valid prefix, and pass it to the client's constructor:

```ts
const storage = new StorageSessionStorage("myclient");
const client = new Client(storage, /* ... */);
```

This storage adapter is only supported inside browsers and on Deno.

## localStorage

This storage adapter persista data into [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

To use it, import the `StorageLocalStorage` class, construct it with a valid prefix, and pass it to the client's constructor:

```ts
const storage = new StorageLocalStorage("myclient");
const client = new Client(storage, /* ... */);
```

This storage adapter is natively supported inside browsers and on Deno.
To use it on Node.js, you first need to install the `@mtkruto/storage-local-storage` package:

<%= it.installPackage("@mtkruto/storage-local-storage") %>

And import the `StorageLocalStorage` class from there:


<%=

it.codeGroup(

    [
        "CommonJS",
        "ts",
        `const { StorageLocalStorage } = require("@mtkruto/storage-local-storage");

const storage = new StorageLocalStorage("myclient");
const client = new Client(storage, /\* ... \*/);
`

],

    [
        "ECMAScript",
        "ts",
        `import { StorageLocalStorage } from "@mtkruto/storage-local-storage";

const storage = new StorageLocalStorage("myclient");
const client = new Client(storage, /\* ... \*/);
`
],

)

%>

## Deno KV

This storage adapter persists data inside a [Deno KV](https://docs.deno.com/kv/manual) database.

To use it, import the `StorageDenoKV` class from the path specified below, construct it (optionally with a path provided), and pass it to the client's constructor:

```ts
import { StorageDenoKV } from "<%= it.deno %>/storage/1_storage_deno_kv.ts";

const storage = new StorageDenoKV();
const client = new Client(storage, /* ... */);
```

This module is natively supported on Deno, and unsupported for browsers. To use it on Node.js, you first need to install the following required packages:

<%= it.installPackage("@deno/kv @mtkruto/storage-denokv") %>

Then, import the `StorageLocalKV` class from `@mtkruto/storage-denokv`:


<%=

it.codeGroup(

    [
        "CommonJS",
        "ts",
        `const { StorageDenoKV } = require("@mtkruto/storage-denokv");

const storage = new StorageDenoKV();
const client = new Client(storage, /\* ... \*/);
`

],

    [
        "ECMAScript",
        "ts",
        `import { StorageDenoKV } from "@mtkruto/storage-denokv";

const storage = new StorageDenoKV();
const client = new Client(storage, /\* ... \*/);
`
],

)

%>