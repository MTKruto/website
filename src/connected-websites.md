---
title: Connected Websites
parent: /#walkthrough
walkthrough:
  track: user
  order: 22
---

User clients can view and disconnect websites linked to the account.

## Listing Connected Websites

Use {{ "getConnectedWebsites" |> m }} to get the websites as {{ "ConnectedWebsite" |> t }} objects.

```ts
const websites = await client.getConnectedWebsites();

for (const website of websites) {
  console.log(website.domain, website.browser, website.platform);
}
```

## Disconnecting a Website

Use {{ "disconnectConnectedWebsite" |> m }} with the website's identifier.

```ts
await client.disconnectConnectedWebsite(websiteId);
```

## Disconnecting All Websites

Use {{ "disconnectConnectedWebsites" |> m }} to disconnect every website.

```ts
await client.disconnectConnectedWebsites();
```
