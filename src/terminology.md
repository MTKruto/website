---
title: Terminology
parent: /#guides
---

When working with in projects that depend on Telegram, it is useful to know the difference between some commonly used terms to avoid confusion. Here we try to explain the most common ones.

## MTProto

MTProto (Mobile Transport Protocol) is a transport protocol developed by Telegram and is used in its [API](#telegram-api).

## Telegram API

Anything that interacts with Telegram, whether it is a user account or a bot, does it through the Telegram API. It is versioned in layers and uses the [MTProto](#mtproto) protocol.

It is worth noting that in some contexts, it might be referred to as "MTProto API" (as in Telegram's MTProto API), or even "MTProto."

## Telegram Client Library

This is a library that can be used to interact with the [Telegram API](#telegram-api). Examples are [TDLib](https://core.telegram.org/tdlib), Telegram's official one, [MTKruto](/), and [many others](https://t.me/tglibs/2).

They consist of an MTProto implementation and do most of the hard work so that developers can focus on building their projects.

Some of them even expose their own API on top of the Telegram API to simplify things even further. Examples are TDLib's API, and MTKruto's API. These are sometimes called "high-level API" or "high-level methods."

## Telegram Client

Any piece of software that takes advantage of a [Telegram client library](#telegram-client-library) communicate with Telegram can be classified as a Telegram client.

This can be a process running in a server, or even a mobile app on an end user's device.

## Bot API

Bot API is another abstraction on top of a [Telegram client library](#telegram-client-library) (TDLib in this case) that simplifies the development of bots even further by letting developers access bot clients using its HTTP interface.
