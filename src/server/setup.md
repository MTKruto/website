---
title: Setup
parent: /#walkthrough
next: /server/making-requests
---

## Installation

### Prebuilt Binaries

To download a prebuilt binary, visit
[here](https://github.com/MTKruto/server/actions/workflows/ci.yml), open the
most recent successful run, and you will see appropriate download links for each
operating system in the Artifacts section.

### Building from Source

To build from source, you need to have [Deno](https://deno.land) installed.
After making sure that it is properly installed, clone the repository
recursively:

```shell
git clone --depth 1 --recursive https://github.com/MTKruto/server
cd server
```

And build using the following command:

```shell
deno task build
```

The output executable will be in the same directory you run the command from.

## Running

The only required CLI arguments to be able to start the server are `--api-id`
and `--api-hash`:

```shell
mtkruto-server --api-id 123456 --api-hash 0123456789abcdef
```

Other CLI arguments are listed below.

## CLI Arguments

| Name           | Required | Description                               | Default |
| -------------- | -------- | ----------------------------------------- | ------- |
| `--api-id`     | Yes      | Telegram app API ID                       | N/A     |
| `--api-hash`   | Yes      | Telegram app API hash                     | N/A     |
| `--port`       | No       | TCP port to accept connecions from        | 8000    |
| `--workers`    | No       | Number of workers to use                  | 1       |
| `--stats-port` | No       | The port to make the stats available from | 3000    |
| `--add-user`   | No       | Add a user account                        | N/A     |
