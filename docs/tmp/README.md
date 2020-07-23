## hasBadMapPolyfill

位于 `react/src/BadMapPolyfill.js`

该属性用来标记 `Map` 和 `Set` 对象是否polyfill过。

生产环境下为 `undefined`, 即 `false`, 默认认为全局有 `Map` 和 `Set` 对象
开发环境下会检测:

```js
export let hasBadMapPolyfill;

if (__DEV__) {
  hasBadMapPolyfill = false;
  try {
    const frozenObject = Object.freeze({});
    /* eslint-disable no-new */
    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}
```

可以看到，如果全局对象中没有 `Map` 或者 `Set` 对象，`try {}` 代码块就会报错，进而 `hasBadMapPolyfill` 就会为 `true`。

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

## IsSomeRendererActing

位于 `react/src/IsSomeRendererActing.js`

该对象被 `act()` 用来追踪当前代码是否在 `act()` 作用域内执行, 改变量是一个对象，有一个 `boolean` 类型的 `current` 属性

```js
// Used by act() to track whether you're inside an act() scope.
const IsSomeRendererActing = {
  current: (false: boolean),
};
export default IsSomeRendererActing;
```
