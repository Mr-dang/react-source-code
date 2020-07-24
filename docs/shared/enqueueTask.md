- name: `enqueueTask`
- type: `function`
- 适用性: **内部**
- path: `shared/enqueueTask.js`

> React在浏览器中使用的异步回调，用的是 `MessageChannel`。`enqueueTask` 函数接收一个回调函数作为参数。

使用示例:

```js
import enqueueTask from 'shared/enqueueTask';

console.time('sync time');
console.timeEnd('sync time'); //sync time: 0.0023236875ms
var cb1 = function(event) {
  console.log(event);
  console.timeEnd('async time'); // 0.500732421875ms
};

console.time('async time');
enqueueTask(cb1);
```

浏览器端的源代码如下:

```js
let enqueueTaskImpl = null;

export default function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    enqueueTaskImpl = function(callback) {
      const channel = new MessageChannel();
      channel.port1.onmessage = callback;
      channel.port2.postMessage(undefined);
    };
  }
  return enqueueTaskImpl(task);
}
```

可以看到，同步的代码，时间间隔小于0.01ms, 而异步操作回调的时间间隔在 `0.2ms~0.5ms` 之间。

而 `React`也有服务端渲染的功能，在服务端，异步操作就直接使用的 `setImmediate`。
