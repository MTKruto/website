---
parent: /#guides
title: Web Workers
---

This is an experimental feature. The behavior is subject to change without prior notice.

MTKruto natively supports web workers. You can create a client worker and control clients created within it.

For the API refer to [JSR](https://jsr.io/@mtkruto/mtkruto/doc/~/ClientWorker).

## Vite

Here's how you can use MTKruto workers inside Vite projects:

```ts
import { ClientWorker } from "@mtkruto/mtkruto";
import Worker from "@mtkruto/mtkruto/worker?worker";

const clientWorker = new ClientWorker(new Worker());

// This creates a `ClientDispatcher` with the id "main"
const client = await clientWorker.createClient("main");

// API is compatible with the `Client` class
await client.start();

client.on("message", async (ctx) => {
  console.log("Received a new message!");
});
```
