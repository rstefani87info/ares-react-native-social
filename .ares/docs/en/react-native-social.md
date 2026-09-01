# @ares/react-native-social Documentation

## Purpose

Description and goals of the `@ares/react-native-social` module.

## Installation

```bash
yarn add @ares/react-native-social
```

In a Yarn Workspaces monorepo:

```bash
yarn workspace <app> add @ares/react-native-social
```

## Quickstart

Import example (actual surface depends on the module):

```js
import * as mod from "@ares/react-native-social";
```

## Public API (exports)

This section documents the actual public surface at entrypoint level and main exported symbols.

Root entrypoint:

- `@ares/react-native-social`

Main files at package root (indicative):

- `index.js`

Exports detected in `index.*`:

- `regexMap`

## Configuration (appSetup / config / policies)

This module may read configuration from `appSetup`, `config`, or `policies` depending on the type. Document the actually consumed keys as you stabilize the contract.

## Test

Run module tests (if present):

```bash
yarn workspace @ares/react-native-social test
```

## Notes

- This document is maintained alongside the module tickets.
