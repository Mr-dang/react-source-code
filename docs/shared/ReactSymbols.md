- name: `getIteratorFn`
- type: `function`
- 适用性: **内部**
- path: `shared/ReactSymbols.js`

> 判断传入的参数是否是可遍历的，若是，则返回该对象的遍历器函数，否则返回`null`

使用示例:

```js
import { getIteratorFn } from 'shared/getIteratorFn';

var arrIte = getIteratorFn([1,2,3]); // ƒ values() { [native code] }
var other = getIteratorFn({}); // null
for (var m of arrIte()) {
  console.log(m); // 1,2,3
}
```

源代码：

```js
const MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
const FAUX_ITERATOR_SYMBOL = '@@iterator';

export function getIteratorFn(maybeIterable: ?any): ?() => ?Iterator<*> {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  const maybeIterator =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}
```

该文件还导出一系列以 `REACT_` 开头的全大写的常量，我们只需要知道，这些常量的值都是唯一的，一般用于判断两个值是不是同一类型，或者某个值是否是某种类型。

这些变量，的赋值方式一样，都是先判断是否有 `Symbol` 和 `Symbol.for` 函数，没有则用数字代替。

- REACT_ELEMENT_TYPE

```js
export let REACT_ELEMENT_TYPE =
  typeof Symbol === 'function' && Symbol.for
    ? Symbol.For('react.element') : 0xeac7; // 0xeac7 -> 60103
```
