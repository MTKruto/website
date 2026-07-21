---
title: Connecting Manually
parent: /#walkthrough
walkthrough:
  track: main
  order: 2.5
---

Use the methods on this page when your application needs to control each authorization step. For most applications, {{ "start" |> m }} provides a simpler authorization flow.

## Connecting

{{ "connect" |> m }} establishes a connection to Telegram without authorizing an account.

```ts
await client.connect();
```

## Authorizing a User

Call {{ "sendCode" |> m }} with the user's phone number, then pass the code they receive to {{ "checkCode" |> m }}.

```ts
await client.sendCode(phoneNumber);
const result = await client.checkCode(code);
```

The result describes the next step:

- `signedIn` means authorization is complete.
- `passwordRequired` means two-step verification is enabled. {{ "getPasswordHint" |> m }} returns the account's password hint, and {{ "checkPassword" |> m }} checks the password and completes authorization.
- `signUpRequired` means the phone number is not registered. Call {{ "signUp" |> m }} to create the account.
- `invalidCode` means the submitted code was incorrect.

```ts
if (result.type === "passwordRequired") {
  const hint = await client.getPasswordHint();
  const password = await getPassword(hint);
  const passwordResult = await client.checkPassword(password);

  if (passwordResult.type === "invalidPassword") {
    // Ask for the password again.
  }
} else if (result.type === "signUpRequired") {
  await client.signUp(firstName, { lastName });
}
```

## Authorizing a Bot

{{ "checkBotToken" |> m }} validates a bot token and authorizes the bot when the token is valid.

```ts
const result = await client.checkBotToken(botToken);
```
