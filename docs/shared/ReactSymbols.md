> 位于 `shared/ReactSymbols.js`

该文件导出一系列以 `REACT_` 开头的全大写的常量，我们只需要知道，这些常量的值都是唯一的，一般用于判断两个值是不是同一类型，或者某个值是否是某种类型。

这些变量，的赋值方式一样，都是先判断是否有 `Symbol` 和 `Symbol.for` 函数，没有则用数字代替。

## REACT_ELEMENT_TYPE

```js
export let REACT_ELEMENT_TYPE =
  typeof Symbol === 'function' && Symbol.for
    ? Symbol.For('react.element') : 0xeac7; // 0xeac7 -> 60103
```
