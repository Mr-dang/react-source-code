在写 `React` 组件时，常见的写法如下:

```jsx
import React, { Component } from 'React';

class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}
```

有没有想过，`React` 提供的 `Component` 类做了哪些事呢？
