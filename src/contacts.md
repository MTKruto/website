---
title: Contacts
parent: /#walkthrough
walkthrough:
  track: user
  order: 4
---

User clients can manage the account's Telegram contacts.

## Listing Contacts

Use {{ "getContacts" |> m }} to get the account's contacts as {{ "User" |> t }} objects.

```ts
const contacts = await client.getContacts();

for (const contact of contacts) {
  console.log(contact.id, contact.firstName, contact.phoneNumber);
}
```

## Adding a Contact

Use {{ "addContact" |> m }} with the user's identifier and first name.

```ts
await client.addContact(userId, "Ada", {
  lastName: "Lovelace",
});
```

The options can also include `phoneNumber` and `isPhoneNumberShared`.

## Setting a Contact Note

Use {{ "setContactNote" |> m }} to add or update a note.

```ts
await client.setContactNote(userId, {
  note: "Met at the conference.",
});
```

Call it without a note to remove the current note.

```ts
await client.setContactNote(userId);
```

## Removing Contacts

Use {{ "deleteContact" |> m }} to remove one contact.

```ts
await client.deleteContact(userId);
```

Use {{ "deleteContacts" |> m }} to remove several contacts at once.

```ts
await client.deleteContacts([firstUserId, secondUserId]);
```
