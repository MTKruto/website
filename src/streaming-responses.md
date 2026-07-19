---
title: Streaming Responses
parent: /#walkthrough
walkthrough:
  track: bot
  order: 5
---

Bots can stream text while generating a response.

## Streaming a Draft

Call {{ "sendMessageDraft" |> m }} repeatedly with the same draft ID. Each call should contain the complete text generated so far.

```ts
client.command("answer", async (ctx) => {
  const draftId = ctx.msg.id;
  let response = "";

  for await (const chunk of generateAnswer()) {
    response += chunk;
    await ctx.replyDraft(draftId, response);
  }

  await ctx.reply(response);
});
```

Send the completed response normally after the draft finishes.

## Streaming a Rich Text Draft

Use {{ "sendRichTextDraft" |> m }} to stream an {{ "InputRichText" |> t }}. Reuse the same draft ID and finish with a regular rich text message.

```ts
const draftId = ctx.msg.id;

await ctx.replyRichTextDraft(draftId, {
  type: "markdown",
  markdown: "# Answer\n\nGenerating…",
});

await ctx.replyRichTextDraft(draftId, {
  type: "markdown",
  markdown: "# Answer\n\nThe answer is **42**.",
});

await ctx.replyRichText({
  type: "markdown",
  markdown: "# Answer\n\nThe answer is **42**.",
});
```
