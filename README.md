# next-url-status
> Detect url status code for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-url-status
```

## usage
```js
import '@jswork/next-url-status';

const url = 'https://www.baidu.com/index.html';

nx.urlStatus(url).then((res) => {
  console.log(res);
});

// failed : { code: -1 }
// success: { code: 200 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-url-status/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-url-status
[version-url]: https://npmjs.org/package/@jswork/next-url-status

[license-image]: https://img.shields.io/npm/l/@jswork/next-url-status
[license-url]: https://github.com/afeiship/next-url-status/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-url-status
[size-url]: https://github.com/afeiship/next-url-status/blob/master/dist/next-url-status.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-url-status
[download-url]: https://www.npmjs.com/package/@jswork/next-url-status
