Component && PureComponent

```js
const emptyObject = {};

function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject; // If a component has string refs, we will assign a different object later.
  this.updater = updater || ReactNoopUpdateQueue;// We initialize the default updater but the real one gets injected by the renderer
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' ||
      typeof partialState === 'function' ||
      partialState == null,
    'setState(...): takes an object of state variables to update or a ' +
      'function which returns an object of state variables.',
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};


function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;
```

```js
class Component {
  isReactComponent = {}

  constructor(props, context, updater) {
    this.props = props;
    this.context = context;
    // If a component has string refs, we will assign a different object later.
    this.refs = emptyObject;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue;
  }

  setState (partialState, callback) {
    invariant(
      typeof partialState === 'object' ||
        typeof partialState === 'function' ||
        partialState == null,
      'setState(...): takes an object of state variables to update or a ' +
        'function which returns an object of state variables.',
    );
    this.updater.enqueueSetState(this, partialState, callback, 'setState');
  }

  forceUpdate (callback) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
  }
}

class PureComponent extends Component {
  isPureReactComponent = true

  constructor(props, context, updater) {
    super(props, context, updater)
  }
}
```
