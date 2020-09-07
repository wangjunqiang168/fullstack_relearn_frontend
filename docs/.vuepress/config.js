module.exports = {
  title: '重构前端',
  base: '/relearn-frontend/',
  port: 8082,
  description: '前后端技术分享',
  markdown: {
    // markdown-it-anchor 的选项
    anchor: {
      permalink: false
    },
    // markdown-it-toc 的选项
    toc: {
      includeLevel: [1, 2, 3]
    },
    lineNumbers: true
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
    ['meta', {
      name: 'theme-color',
      content: '#1890ff'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [{
        text: '前端',
        items: [{
            text: '重构前端',
            link: 'http://localhost:8082/relearn-frontend'
          },
          {
            text: 'React',
            link: '/guide/guide2/'
          },
          {
            text: 'ReactNative',
            link: '/guide/guide3/'
          }
        ]
      },
      {
        text: '后端',
        items: [{
            text: '办公协同',
            link: '/guide/guide1/'
          },
          {
            text: '集中化ERP',
            link: '/guide/guide2/'
          },
          {
            text: '经营管理一体化',
            link: '/guide/guide3/'
          },
          {
            text: '人力系统',
            link: '/guide/guide4/'
          },
          {
            text: '党建纪检',
            link: '/guide/guide5/'
          }
        ]
      },
      {
        text: 'iOS',
        items: [{
            text: '办公协同',
            link: '/guide/guide1/'
          },
          {
            text: '集中化ERP',
            link: '/guide/guide2/'
          },
          {
            text: '经营管理一体化',
            link: '/guide/guide3/'
          },
          {
            text: '人力系统',
            link: '/guide/guide4/'
          },
          {
            text: '党建纪检',
            link: '/guide/guide5/'
          }
        ]
      },
      {
        text: 'Android',
        items: [{
            text: '办公协同',
            link: '/guide/guide1/'
          },
          {
            text: '集中化ERP',
            link: '/guide/guide2/'
          },
          {
            text: '经营管理一体化',
            link: '/guide/guide3/'
          },
          {
            text: '人力系统',
            link: '/guide/guide4/'
          },
          {
            text: '党建纪检',
            link: '/guide/guide5/'
          }
        ]
      },
      {
        text: '返回主页',
        link: 'http://localhost:8080'
      }
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/guide/guide1/': [{
        title: '办公协同',
        collapsable: false,
        children: [
          ''
        ]
      }],
      '/guide/guide2/': [{
        title: '集中化ERP',
        collapsable: false,
        children: [
          ''
        ]
      }],
      '/guide/guide3/': [{
        title: '经营管理一体化',
        collapsable: false,
        children: [
          ''
        ]
      }],
      '/guide/guide4/': [{
        title: '人力系统',
        collapsable: false,
        children: [
          ''
        ]
      }],
      '/guide/guide5/': [{
        title: '党建纪检',
        collapsable: false,
        children: [
          ''
        ]
      }]
    }
  }
}