---
title: Contributing
parent: /#misc
---

## ...to the core

We highly value any useful contribution made to the core of MTKruto. If you have a GitHub account, you can contribute by directly sending pull requests to the [repository](https://github.com/MTKruto/MTKruto). If you don't, you can reach out to us and send us patch files instead.

#### Rules

For easier maintainability and preventing circular dependencies, the following rules are enforced in the core's source code:

- The names of the source files start with a number that denotes the file's import level. Only files with a higher import level can import those with lower ones. For example, 1_x.ts can import 0_y.ts, but cannot import 2_z.ts.
- The code base is divided into four upper-level modules, and none of them depend on the ones coming after it. See [this](/source-map) for a visualization.

## ...to the website

If you noticed something wrong, you can ping us in the [chat](https://mtkrutochat.t.me).

## ...to anything else

[Our GitHub organization](https://github.com/MTKruto) also hosts the source codes of a number of other projects, most of them currently being bots built using MTKruto. You are welcome to contribute to any of those.

As always, you can talk about your helpful ideas in our chat.
