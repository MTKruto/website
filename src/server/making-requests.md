---
title: Making Requests
parent: /#walkthrough
prev: /server/setup
next: /server/receiving-updates
---

## Endpoints

Before making requests to an instance of the server, you should figure out the
endpoint.

#### Bots

The endpoint to make requests on behalf of bots is:

```shell
http(s)://hostname:port/bot<BOT_TOKEN>
```

So, if a bot’s token is 123456:0123456789abcdef and it is needed to be consumed
on an instance of MTKruto Server that is hosted at <https://api.example.com>,
the endpoint is:

```shell
https://api.example.com/bot123456:0123456789abcdef
```

> If a bot was previously used with a Bot API server, it is recommended that the
> [logOut](https://core.telegram.org/bots/api#logout) method is called before
> proceeding.

#### Users

To add a user client, navigate to the path of the installation, and run with the
`--add-user` flag:

```shell
mtkruto-server --add-user --api-id 123456 --api-hash 0123456789abcdef
```

This will ask you the necessary information to authorize as a user, and after a
successful authorization, the endpoint to remotely interact with the client is
printed.

## Requests

> In the below examples, some details like required HTTP headers are omitted to
> focus on what matters most.

All requests are made up of a list of order-sensitive JSON-encoded arguments.
The server accepts requests from GET requests that utilize URL search
parameters, or POST requests with application/json or multipart/form-data
content.

Here is an example get request that invokes a method named exampleMethod with
string and number arguments:

```http
GET /:client-id/exampleMethod/?1337&"Hello, world!"
```

Here is the same request, but with the POST method:

```http
POST /:client-id/exampleMethod
Content-Type: application/json

[1337, "Hello, world!"]
```

> The Content-Type header is required for POST requests.

For convenience, in GET requests, if at least one URL search parameter is given
a value, an object will be appended to the end of the argument list that will be
populated with the keys and values of the named parameters. So, this:

```http
GET /:client-id/exampleMethod?1&foo=false&bar=true
```

is the same as this:

```http
POST /:client-id/exampleMethod
Content-Type: application/json

[1, { "foo": false, "bar": true }]
```

> Note that you cannot have more than a value for a specific search parameter.

## Responses

All responses are JSON-encoded. Note that by being JSON-encoded, it doesn’t
necessarily mean they are a JSON object. They could be null, a number, or even a
string.

If the response code was 200, you can be sure that the body is the result of the
called method. Otherwise, the body will be an error message. For convenience, an
`x-error-type` value will be set in non-internal errors, to help in identifying
what type of error it is.

## Methods

A list of available methods, along with links to the documentation of each one
of them, can be found [here](/methods).

If you’re not already familiar with the structure of the documentation (e.g.,
you are coming from outside of MTKruto), keep these points in mind:

- Required arguments must be provided in the exact order, and they don’t have to
  be labeled in case if you are making GET requests.
- Optional parameters (those that are marked with `?` in the documentation) must
  all be in an object at the end of the argument list with their respective
  keys.

## Telegram API Functions

To invoke Telegram API functions directly, use the special method `invoke`. It
accepts a single argument, which is an object that describes a Telegram API
request.

Here is an example payload which makes a ping request:

```json
[
  {
    "_": "ping",
    "ping_id": {
      "_": "bigint",
      "value": "123456"
    }
  }
]
```

Which can be called like:

```http
POST /:client-id/invoke
Content-Type: application/json

[
  {
    "_": "ping",
    "ping_id": {
      "_": "bigint",
      "value": "123456"
    }
  }
]
```

As you may have already inferred, the TL objects are described in JSON as
follows:

- All objects have a `_` key that must corresponds to the name of the TL object
  as written in TL schema files, unless otherwise noted below.
- The remaining keys of the object have the same names as the parameter names as
  written in TL schema files.
- Flags are the same name as written in TL schema files, too, and their values
  are expected to be booleans.
- Strings and numbers (`int` in TL schema files) are kept as they are.

BigInts (`long` in TL schema files) are described with an object that has its
`_` key assigned to the constant value `"bigint"`, and its `value` key assigned
to a string representation of the integer. So, if 123456 is a long, it is
described as follows:

```json
{
  "_": "bigint",
  "value": "12456"
}
```

Raw bytes (`bytes` in TL schema files) are described with an object that has its
`_` key assigned to the constant value `"bytes"`, and its `value` key assigned
to a Base64 representation of the raw bytes. So, if you have `0x524F4A`, it is
described as follows:

```json
{
  "_": "bytes",
  "value": "Uk9K"
}
```

Results of the functions invokations are in the same format.
