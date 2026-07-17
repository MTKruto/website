---
title: Files
parent: /#walkthrough
prev: /keyboards-and-callback-queries
---

Methods that send photos, videos, documents, and other media accept a {{ "FileSource" |> t }}. A file source can be a file path, URL, file ID, `Uint8Array`, iterable of byte arrays, or readable stream.

## Uploading Files

Pass a file source directly to the method for the type of media you want to send.

```ts
// A local file path.
await client.sendDocument(chatId, "./report.pdf");

// A remote file.
await client.sendPhoto(
  chatId,
  new URL("https://example.com/photo.jpg"),
);

// Bytes already in memory.
await client.sendDocument(chatId, bytes, {
  fileName: "data.bin",
});
```

Local file paths are available only in server-side runtimes. In browsers, use a URL, byte array, iterable, or stream.

## Reusing Files

Received media includes a `fileId`. Pass it to a compatible send method to reuse the file without uploading it again.

```ts
client.on("message:photo", async (ctx) => {
  await ctx.replyPhoto(ctx.msg.photo.fileId);
});
```

Media also includes a `fileUniqueId`. It remains stable and is useful for comparing files, but it cannot be used to download or resend them.

## Downloading Files

The `download` method returns an async generator that yields the file as chunks of bytes.

```ts
for await (const chunk of client.download(fileId)) {
  // Write or otherwise process the chunk.
}
```

Processing chunks as they arrive avoids loading the entire file into memory. You can also set the chunk size or cancel a download with an abort signal.

```ts
const controller = new AbortController();

for await (
  const chunk of client.download(fileId, {
    chunkSize: 256 * 1024,
    signal: controller.signal,
  })
) {
  // ...
}
```

## Upload Progress

To receive progress updates for an upload, get a progress ID and pass it to the send method.

```ts
const progressId = await client.getProgressId();

client.on("uploadProgress", (ctx) => {
  const progress = ctx.update.uploadProgress;
  if (progress.id === progressId) {
    console.log(progress.uploaded, "/", progress.total);
  }
});

await client.sendDocument(chatId, "./report.pdf", { progressId });
```

For sources whose size is not known in advance, `total` is `0` until the upload completes.
