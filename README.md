<h2 align="center">:package: 5rate-star</h2>
 <p align="center">Simple library for 5-star rating.</p>
  <p align="center">
    <a href="https://codecov.io/gh/hebertcisco/5rate-star">
      <img alt="codecov" src="https://codecov.io/gh/hebertcisco/5rate-star/branch/main/graph/badge.svg?token=GBC8TYYOBB" />
    </a>
    <a href="https://github.com/hebertcisco/5rate-star/actions/workflows/npm-publish.yml">
      <img alt="Node.js Package" src="https://github.com/hebertcisco/5rate-star/actions/workflows/npm-publish.yml/badge.svg" />
    </a>
    <a href="https://github.com/hebertcisco/5rate-star/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/5rate-star?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/5rate-star">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/5rate-star?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/5rate-star">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/5rate-star?color=336791&label=Total%20downloads" />
    </a>
    <a href="https://github.com/hebertcisco/5rate-star">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/5rate-star.svg?style=flat&color=336791" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/5rate-star/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/5rate-star/issues/new/choose">Request Feature</a>
 </p>
    
## Installation

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add 5rate-star
```

```bash
# npm
npm i 5rate-star --save
```

### Import the lib with es6 or cjs:

```mjs
// es6
import { Rating, SumRating } from '5rate-star';

const rating = new Rating();

const { classificationRating } = new SumRating([4, 5]);

const result = rating.calculate(classificationRating);

console.log(result); // 4.6
```

```cjs
// cjs
const { Rating, SumRating } = require("5rate-star")

const rating = new Rating();

const { classificationRating } = new SumRating([4, 5]);

const result = rating.calculate(classificationRating);

console.log(result); // 4.6
```

### Usage examples:

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hebertcisco/5rate-star)

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
