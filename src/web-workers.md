# Web Workers

This is an experimental feature. The behavior is subject to change without prior notice.

MTKruto natively supports web workers. You can create a client worker and within control clients created within it.

For the API refer to [JSR](https://jsr.io/@mtkruto/mtkruto/doc/~/ClientWorker).

## Vite

Here's how you can use MTKruto workers inside Vite projects:

```ts
import { ClientWorker } from "@mtkruto/mtkruto";
import workerUrl from "@mtkruto/mtkruto/worker?url";

const clientWorker = new ClientWorker(workerUrl, { type: "module" });
const client = await clientWorker.createClient(); // API compatible with the `Client` class

await client.start();

client.on("message", async (ctx) => {
  console.log("Received a new message!");
});
```
