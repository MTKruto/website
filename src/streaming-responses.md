---
title: Streaming Responses
parent: /#walkthrough
walkthrough:
  track: bot
  order: 6
---

Bots can stream text while generating a response.

## Streaming a Draft

Repeated {{ "sendMessageDraft" |> m }} calls with the same draft ID update the draft. Each call should contain the complete text generated so far.

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

The completed response is sent normally after the draft finishes.

## Streaming a Rich Text Draft

Stream an {{ "InputRichText" |> t }} through {{ "sendRichTextDraft" |> m }}. Reuse the same draft ID and finish with a regular rich text message.

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
