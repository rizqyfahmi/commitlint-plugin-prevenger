## Introduction

[![npm version](https://img.shields.io/npm/v/commitlint-plugin-prevenger.svg)](https://npmjs.com/package/commitlint-plugin-prevenger)
[![npm downloads](https://img.shields.io/npm/dt/commitlint-plugin-prevenger.svg)](https://npmjs.com/package/commitlint-plugin-prevenger)
[![License](https://img.shields.io/github/license/rizqyfahmi/commitlint-plugin-prevenger.svg)](https://github.com/rizqyfahmi/commitlint-plugin-prevenger/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/rizqyfahmi/commitlint-plugin-prevenger/branch/master/graph/badge.svg)](https://codecov.io/gh/rizqyfahmi/commitlint-plugin-prevenger)
[![CI](https://github.com/rizqyfahmi/commitlint-plugin-prevenger/actions/workflows/ci.yaml/badge.svg)](https://github.com/rizqyfahmi/commitlint-plugin-prevenger/actions/workflows/ci.yaml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)



Make your git commit message much more elegant

## Installation

```sh 
npm i @commitlint/cli @commitlint/config-conventional commitlint-plugin-prevenger --save-dev
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