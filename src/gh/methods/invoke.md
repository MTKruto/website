---
title: invoke
parent: /methods
metas:
  description: Invoke a low-level function.
---

Invoke a low-level function.<span class="select-none">  </span>

### Type Parameters 

<div class="font-mono"><span class="opacity-50">&lt;</span>T extends <span href="/">Api.AnyFunction</span> <span class="opacity-50">|</span> <span href="/">Mtproto.ping</span>, R <span class="opacity-50">=</span> <span href="/">T</span> extends <span href="/">Mtproto.ping</span> <span class="opacity-50">?</span> <span href="/">Mtproto.pong</span> <span class="opacity-50">:</span> <span href="/">T</span> extends <span href="/">Api.AnyGenericFunction</span><span class="opacity-50">&lt;</span><span class="text-red-500">infer</span><span class="opacity-50">></span> <span class="opacity-50">?</span> <span href="/">Api.ReturnType</span><span class="opacity-50">&lt;</span><span href="/">X</span><span class="opacity-50">></span> <span class="opacity-50">:</span> <span href="/">T</span>[<span>&quot;_&quot;</span>] extends keyof <span href="/">Api.Functions</span> <span class="opacity-50">?</span> <span href="/">Api.ReturnType</span><span class="opacity-50">&lt;</span><span href="/">T</span><span class="opacity-50">></span> extends <span>never</span> <span class="opacity-50">?</span> <span href="/">Api.ReturnType</span><span class="opacity-50">&lt;</span><span href="/">Api.Functions</span>[<span href="/">T</span>[<span>&quot;_&quot;</span>]]<span class="opacity-50">></span> <span class="opacity-50">:</span> <span>never</span> <span class="opacity-50">:</span> <span>never</span><span class="opacity-50">></span></div>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_function_" data-anchor="true"><span class="font-bold">function_</span><span class="opacity-50">:</span> <span href="/">T</span></div><div class="pl-3"><div class="no-margin">

The function to invoke.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_dc" data-anchor="true"><span class="font-bold">dc</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">DC</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>&quot;download&quot;</span> <span class="opacity-50">|</span> <span>&quot;upload&quot;</span></div></div></div></div></div>

### Result 

<div class="font-mono"><span href="/">R</span></div>

### Syntax

```ts
// Required parameters only.
await client.invoke(function_);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.invoke(function_, { dc, type });
```



