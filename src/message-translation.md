---
title: Message Translation
parent: /#walkthrough
walkthrough:
  track: user
  order: 12
---

User clients can translate messages and text into another language.

## Translating a Message

Use {{ "translateMessage" |> m }} with the target language code, chat identifier, and message identifier.

```ts
const translation = await client.translateMessage("en", chatId, messageId);

console.log(translation.text);
```

Use {{ "translateMessages" |> m }} to translate multiple messages at once.

## Translating Text

Use {{ "translateText" |> m }} with the target language code and a {{ "TextToTranslate" |> t }}.

```ts
const translation = await client.translateText("en", {
  text: "Hola",
  entities: [],
});

console.log(translation.text);
```

Use {{ "translateTexts" |> m }} to translate multiple texts at once.
