---
title: Contacts
parent: /#walkthrough
walkthrough:
  track: user
  order: 1
---

Users can manage the account's Telegram contacts.

## Listing Contacts

With {{ "getContacts" |> m }}, you can get the account's contacts as {{ "User" |> t }} objects.

```ts
const contacts = await client.getContacts();

for (const contact of contacts) {
  console.log(contact.id, contact.firstName, contact.phoneNumber);
}
```

## Adding a Contact

{{ "addContact" |> m }} accepts the user's identifier and first name.

```ts
await client.addContact(userId, "Ada", {
  lastName: "Lovelace",
});
```

The options can also include `phoneNumber` and `isPhoneNumberShared`.

## Resolving a Phone Number

{{ "resolvePhoneNumber" |> m }} resolves a Telegram user by phone number.

```ts
const user = await client.resolvePhoneNumber("+12025550123");
```

## Setting a Contact Note

{{ "setContactNote" |> m }} lets you add or update a note.

```ts
await client.setContactNote(userId, {
  note: "Met at the conference.",
});
```

Omitting the note removes the current one.

```ts
await client.setContactNote(userId);
```

## Removing Contacts

To remove one contact, call {{ "deleteContact" |> m }}.

```ts
await client.deleteContact(userId);
```

With {{ "deleteContacts" |> m }}, you can remove several contacts at once.

```ts
await client.deleteContacts([firstUserId, secondUserId]);
```
