/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ReactVersion from 'shared/ReactVersion'; // shared/ReactVersion: `export default '16.13.1';`
import {
  REACT_FRAGMENT_TYPE, // export let REACT_FRAGMENT_TYPE = 0xeacb; => 60107
  REACT_DEBUG_TRACING_MODE_TYPE, // export let REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1; => 60129
  REACT_PROFILER_TYPE, // export let REACT_PROFILER_TYPE = 0xead2; => 60114
  REACT_STRICT_MODE_TYPE, // export let REACT_STRICT_MODE_TYPE = 0xeacc; => 60108
  REACT_SUSPENSE_TYPE,   // export let REACT_SUSPENSE_TYPE = 0xead1; => 60113
  REACT_SUSPENSE_LIST_TYPE, // export let REACT_SUSPENSE_LIST_TYPE = 0xead8; => 60120
  REACT_LEGACY_HIDDEN_TYPE, // export let REACT_LEGACY_HIDDEN_TYPE = 0xeae3; => 60131
} from 'shared/ReactSymbols';

import {Component, PureComponent} from './ReactBaseClasses';
import {createRef} from './ReactCreateRef';
import {forEach, map, count, toArray, only} from './ReactChildren';
import {
  createElement as createElementProd,
  createFactory as createFactoryProd,
  cloneElement as cloneElementProd,
  isValidElement,
} from './ReactElement';
import {createContext} from './ReactContext';
import {lazy} from './ReactLazy';
import {forwardRef} from './ReactForwardRef';
import {memo} from './ReactMemo';
import {block} from './ReactBlock';
import {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useMutableSource,
  useReducer,
  useRef,
  useState,
  useResponder,
  useTransition,
  useDeferredValue,
  useOpaqueIdentifier,
} from './ReactHooks';
import {withSuspenseConfig} from './ReactBatchConfig';
import {
  createElementWithValidation,
  createFactoryWithValidation,
  cloneElementWithValidation,
} from './ReactElementValidator';
import {createMutableSource} from './ReactMutableSource';
import ReactSharedInternals from './ReactSharedInternals';
import {createFundamental} from './ReactFundamental';
import {createEventResponder} from './ReactEventResponder';
import {createScope} from './ReactScope';

// TODO: Move this branching into the other module instead and just re-export.
const createElement = __DEV__ ? createElementWithValidation : createElementProd;
const cloneElement = __DEV__ ? cloneElementWithValidation : cloneElementProd;
const createFactory = __DEV__ ? createFactoryWithValidation : createFactoryProd;

const Children = {
  map,
  forEach,
  count,
  toArray,
  only,
};

export {
  Children,
  createMutableSource,
  createRef,
  Component,
  PureComponent,
  createContext,
  forwardRef,
  lazy,
  memo,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useMutableSource,
  useReducer,
  useRef,
  useState,
  REACT_FRAGMENT_TYPE as Fragment,
  REACT_PROFILER_TYPE as Profiler,
  REACT_STRICT_MODE_TYPE as StrictMode,
  REACT_DEBUG_TRACING_MODE_TYPE as unstable_DebugTracingMode,
  REACT_SUSPENSE_TYPE as Suspense,
  createElement,
  cloneElement,
  isValidElement,
  ReactVersion as version,
  ReactSharedInternals as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  // Deprecated behind disableCreateFactory
  createFactory,
  // Concurrent Mode
  useTransition,
  useDeferredValue,
  REACT_SUSPENSE_LIST_TYPE as SuspenseList,
  REACT_LEGACY_HIDDEN_TYPE as unstable_LegacyHidden,
  withSuspenseConfig as unstable_withSuspenseConfig,
  // enableBlocksAPI
  block,
  // enableDeprecatedFlareAPI
  useResponder as DEPRECATED_useResponder,
  createEventResponder as DEPRECATED_createResponder,
  // enableFundamentalAPI
  createFundamental as unstable_createFundamental,
  // enableScopeAPI
  createScope as unstable_createScope,
  useOpaqueIdentifier as unstable_useOpaqueIdentifier,
};
