---
title: Connected Websites
parent: /#walkthrough
walkthrough:
  track: user
  order: 22
---

Users can view and disconnect websites linked to the account.

## Listing Connected Websites

{{ "getConnectedWebsites" |> m }} returns the websites as {{ "ConnectedWebsite" |> t }} objects.

```ts
const websites = await client.getConnectedWebsites();

for (const website of websites) {
  console.log(website.domain, website.browser, website.platform);
}
```

## Disconnecting a Website

{{ "disconnectConnectedWebsite" |> m }} accepts the website's identifier.

```ts
await client.disconnectConnectedWebsite(websiteId);
```

## Disconnecting All Websites

To disconnect every website, call {{ "disconnectConnectedWebsites" |> m }}.

```ts
await client.disconnectConnectedWebsites();
```
