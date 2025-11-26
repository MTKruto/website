---
title: Receiving Updates
parent: /#walkthrough
prev: /server/making-requests
next: /server/client-libraries
---

Inspired by Bot API, you can receive updates by either long polling or setting a webhook. Note that you cannot receive updates via both at the same time.

## Polling

To poll for updates, use the special method `getUpdates`. It accepts an optional `timeout` argument which will close the connection if there are no new updates for `timeout` seconds.

```http
POST /:client-id/getUpdates

[]
```

On success, it returns an array of [Update](https://mtkru.to/types/Update) objects.

## Webhooks

> Support for webhooks is experimental.

To set a webhook, use the special method `setWebhook`.

```http
POST /:client-id/setWebhook

["https://example.com/webhook"]
```

Received updates will then be sent to the specified URL using POST requests.

To remove it anytime, call the special method `deleteWebhook`.

```http
GET /:client-id/deleteWebhook
```
