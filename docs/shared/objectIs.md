- name: `objectIs`
- type: `function`
- 适用性: **内部**
- path: `shared/objectIs.js`

> 用于比较两个参数是否严格相等。优先使用 `Object.is`。

使用示例:

```js
import objectIs from 'shared/objectIs';
var obj1 = {
  name: 'Alice',
  sex: 1,
};
var obj2 = {
  name: 'Alice',
  sex: 1,
};
objectIs(obj1, obj1); // true
objectIs(obj1, obj2); // false
```

源码如下:

```js
function is(x, y) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  );
}
const objectIs = typeof Object.is === 'function' ? Object.is : is;

export default objectIs;
```
