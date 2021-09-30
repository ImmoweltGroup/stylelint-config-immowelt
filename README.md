# @immowelt/stylelint-config-immowelt

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)
[![Build Status](https://github.com/ImmoweltGroup/stylelint-config-immowelt/actions/workflows/release.yml/badge.svg)](https://github.com/ImmoweltGroup/stylelint-config-immowelt/actions?query=branch%3Amain)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

Add it to your dependencies.

```bash
yarn add --dev @immowelt/stylelint-config-immowelt
```

Use it in your StyleLint settings.

```json
{
  "extends": "@immowelt/stylelint-config-immowelt"
}
```

### Extension

You may also want to use `@mapbox/stylelint-processor-arbitrary-tags` for checking CSS inside XML like files (like HTML). That will result in an `package.json` like:

```json
{
  "scripts": {
    "test:scss-lint": "stylelint --syntax scss \"src/**/*.{scss,vue}\"",
    "test:scss-lint:fix": "npm run test:scss-lint -- --fix"
  },
  "devDependencies": {
    "@immowelt/stylelint-config-immowelt": "^2.2.0",
    "@mapbox/stylelint-processor-arbitrary-tags": "^0.2.0"
  },
  "stylelint": {
    "extends": "@immowelt/stylelint-config-immowelt",
    "processors": ["@mapbox/stylelint-processor-arbitrary-tags"]
  }
}
```

## Linting Bundle

- [eslint-config-immowelt-base](https://github.com/ImmoweltGroup/eslint-config-immowelt-base)
- [eslint-config-immowelt-react](https://github.com/ImmoweltGroup/eslint-config-immowelt-react)
- [eslint-config-immowelt-vuejs](https://github.com/ImmoweltGroup/eslint-config-immowelt-vuejs)
- [stylelint-config-immowelt](https://github.com/ImmoweltGroup/stylelint-config-immowelt)

## License

See the `LICENSE` file at the root of the repository.
