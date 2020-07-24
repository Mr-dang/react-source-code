(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{366:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"hasbadmappolyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasbadmappolyfill"}},[t._v("#")]),t._v(" hasBadMapPolyfill")]),t._v(" "),a("p",[t._v("位于 "),a("code",[t._v("react/src/BadMapPolyfill.js")])]),t._v(" "),a("p",[t._v("该属性用来标记 "),a("code",[t._v("Map")]),t._v(" 和 "),a("code",[t._v("Set")]),t._v(" 对象是否polyfill过。")]),t._v(" "),a("p",[t._v("生产环境下为 "),a("code",[t._v("undefined")]),t._v(", 即 "),a("code",[t._v("false")]),t._v(", 默认认为全局有 "),a("code",[t._v("Map")]),t._v(" 和 "),a("code",[t._v("Set")]),t._v(" 对象\n开发环境下会检测:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hasBadMapPolyfill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__DEV__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hasBadMapPolyfill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" frozenObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("frozenObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("frozenObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-enable no-new */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Consider warning about bad polyfills")]),t._v("\n    hasBadMapPolyfill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到，如果全局对象中没有 "),a("code",[t._v("Map")]),t._v(" 或者 "),a("code",[t._v("Set")]),t._v(" 对象，"),a("code",[t._v("try {}")]),t._v(" 代码块就会报错，进而 "),a("code",[t._v("hasBadMapPolyfill")]),t._v(" 就会为 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"browser-api-access-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-api-access-restrictions"}},[t._v("#")]),t._v(" Browser API Access Restrictions")]),t._v(" "),a("p",[t._v("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),a("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("universal code requirements"),a("OutboundLink")],1),t._v(". In short, make sure to only access Browser / DOM APIs in "),a("code",[t._v("beforeMount")]),t._v(" or "),a("code",[t._v("mounted")]),t._v(" hooks.")]),t._v(" "),a("p",[t._v("If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),a("code",[t._v("<ClientOnly>")]),t._v(" component:")]),t._v(" "),a("h2",{attrs:{id:"issomerendereracting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issomerendereracting"}},[t._v("#")]),t._v(" IsSomeRendererActing")]),t._v(" "),a("p",[t._v("位于 "),a("code",[t._v("react/src/IsSomeRendererActing.js")])]),t._v(" "),a("p",[t._v("该对象被 "),a("code",[t._v("act()")]),t._v(" 用来追踪当前代码是否在 "),a("code",[t._v("act()")]),t._v(" 作用域内执行, 改变量是一个对象，有一个 "),a("code",[t._v("boolean")]),t._v(" 类型的 "),a("code",[t._v("current")]),t._v(" 属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Used by act() to track whether you're inside an act() scope.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" IsSomeRendererActing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  current"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" IsSomeRendererActing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);