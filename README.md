# @immowelt/stylelint-config-immowelt

[![Powered by Immowelt](https://img.shields.io/badge/powered%20by-immowelt-yellow.svg?colorB=ffb200)](https://stackshare.io/immowelt-group/)
[![Build Status](https://travis-ci.org/ImmoweltGroup/stylelint-config-immowelt.svg?branch=master)](https://travis-ci.org/ImmoweltGroup/stylelint-config-immowelt)
[![dependencies Status](https://david-dm.org/ImmoweltGroup/stylelint-config-immowelt/status.svg)](https://david-dm.org/ImmoweltGroup/stylelint-config-immowelt)
[![devDependencies Status](https://david-dm.org/ImmoweltGroup/stylelint-config-immowelt/dev-status.svg)](https://david-dm.org/ImmoweltGroup/stylelint-config-immowelt?type=dev)

## Usage

Add it to your dependencies.

```bash
npm i -D @immowelt/stylelint-config-immowelt
```

Use it in your StyleLint settings.

```json
{
  "extends": "@immowelt/stylelint-config-immowelt"
}
```

You may also want to use ```@mapbox/stylelint-processor-arbitrary-tags``` for checking CSS inside 
XML like files (like HTML). That will result in an ```package.json``` like:

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
      "processors": [
        "@mapbox/stylelint-processor-arbitrary-tags"
      ]
  }
}
```

## Linting Bundle

* [eslint-config-immowelt-es5](https://github.com/ImmoweltGroup/eslint-config-immowelt-es5)
* [eslint-config-immowelt-es6](https://github.com/ImmoweltGroup/eslint-config-immowelt-es6)
* [eslint-config-immowelt-react](https://github.com/ImmoweltGroup/eslint-config-immowelt-react)
* [stylelint-config-immowelt](https://github.com/ImmoweltGroup/stylelint-config-immowelt)

## License

See the `LICENSE` file at the root of the repository.
