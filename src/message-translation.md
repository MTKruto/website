---
title: Message Translation
parent: /#walkthrough
walkthrough:
  track: user
  order: 8
---

Users can translate messages and text into another language.

With {{ "getTranslations" |> m }}, you can retrieve the available translation languages.

## Translating a Message

{{ "translateMessage" |> m }} accepts the target language code, chat identifier, and message identifier.

```ts
const translation = await client.translateMessage("en", chatId, messageId);

console.log(translation.text);
```

{{ "translateMessages" |> m }} lets you translate multiple messages at once.

## Translating Text

{{ "translateText" |> m }} accepts the target language code and a {{ "TextToTranslate" |> t }}.

```ts
const translation = await client.translateText("en", {
  text: "Hola",
  entities: [],
});

console.log(translation.text);
```

With {{ "translateTexts" |> m }}, you can translate multiple texts at once.
