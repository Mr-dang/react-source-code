const { description } = require('../../package')

module.exports = {
  base: '/react-souce-code/',
  title: 'React 16.13.1 源码解读',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    displayAllHeaders: true,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Github',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      {
        title: '开始阅读',
        path: '/start/',
        sidebarDepth: 1,
        collapsable: false,
      },
      {
        title: 'React组件',
        path: '/component/',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          { title: 'React.Component', path: '/component/Component-PureComponent' },
        ]
      },
      {
        title: 'shared',
        path: '/shared/',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          { title: 'ReactVersion', path: '/shared/ReactVersion' },
          { title: 'ReactSymbols', path: '/shared/ReactSymbols' },
        ]
      },
      {
        title: '临时内容',
        path: '/tmp/',
        collapsable: false,
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
