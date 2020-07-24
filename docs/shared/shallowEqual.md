- name: `shallowEqual`
- type: `function`
- 适用性: **内部**
- path: `shared/shallowEqual.js`

> 判断两个对象是否严格相等或者所有属性的值都严格相等。

使用示例:

```js
var obj1 = {
  name: 'Alice',
  sex: 1,
};
var obj2 = {
  name: 'Alice',
  sex: 1,
};
shallowEqual(obj1, obj1); // true
shallowEqual(obj1, obj2); // true
```

源代码如下:

```js
import is from 'shared/objectIs';
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}
```
