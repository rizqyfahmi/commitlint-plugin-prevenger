## Introduction

[![npm version](https://img.shields.io/npm/v/commitlint-plugin-prevenger.svg)](https://npmjs.com/package/commitlint-plugin-prevenger)
[![npm downloads](https://img.shields.io/npm/dt/commitlint-plugin-prevenger.svg)](https://npmjs.com/package/commitlint-plugin-prevenger)
[![License](https://img.shields.io/github/license/rizqyfahmi/commitlint-plugin-prevenger.svg)](https://github.com/rizqyfahmi/commitlint-plugin-prevenger/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/rizqyfahmi/commitlint-plugin-prevenger/branch/master/graph/badge.svg)](https://codecov.io/gh/rizqyfahmi/commitlint-plugin-prevenger)

Make your git commit message much more elegant

## Installation

```bash
npm i commitlint-plugin-prevenger --save-dev
```

## Usage
```javascript
module.exports = {
  plugins: ["commitlint-plugin-prevenger"],
  rules: {
    "commitlint-plugin-prevenger/scope-pattern": [
      2,
      "always",
      ["^core$"]
    ]
  }
}
```
