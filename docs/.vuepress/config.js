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
        text: '专栏介绍',
        link: '/introduce/'
      },
      {
        text: '专栏目录',
        items: [{
            text: '开篇词+学习路线+架构图 (3讲)',
            link: '/catalog/section1/'
          },
          {
            text: '模块一：JavaScript (15讲)',
            link: '/catalog/section2/'
          },
          {
            text: '模块二：HTML和CSS (16讲)',
            link: '/catalog/section3/'
          },
          {
            text: '模块三：浏览器实现原理与API (9讲)',
            link: '/catalog/section4/'
          },
          {
            text: '模块四：前端综合应用 (5讲)',
            link: '/catalog/section5/'
          },
          {
            text: '特别加餐 (10讲)',
            link: '/catalog/section6/'
          },
          {
            text: '尾声 (1讲)',
            link: '/catalog/section7/'
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
      '/catalog/section1/': [{
        title: '开篇词+学习路线+架构图',
        collapsable: false,
        children: [
          '',
          'child1',
          'child2'
        ]
      }],
      '/catalog/section2/': [{
        title: '模块一：JavaScript',
        collapsable: false,
        children: [
          '',
          'child1',
          'child2',
          'child3',
          'child4',
          'child5',
          'child6',
          'child7',
          'child8',
          'child9',
          'child10',
          'child11',
          'child12',
          'child13',
          'child14'
        ]
      }],
      '/catalog/section3/': [{
        title: '模块二：HTML和CSS',
        collapsable: false,
        children: [
          '',
          'child1',
          'child2',
          'child3',
          'child4',
          'child5',
          'child6',
          'child7',
          'child8',
          'child9',
          'child10',
          'child11',
          'child12',
          'child13',
          'child14',
          'child15'
        ]
      }],
      '/catalog/section4/': [{
        title: '模块三：浏览器实现原理与API',
        collapsable: false,
        children: [
          '',
          'child1',
          'child2',
          'child3',
          'child4',
          'child5',
          'child6',
          'child7',
          'child8'
        ]
      }],
      '/catalog/section5/': [{
        title: '模块四：前端综合应用',
        collapsable: false,
        children: [
          '',
          'child1',
          'child2',
          'child3',
          'child4'
        ]
      }],
      '/catalog/section6/': [{
        title: '特别加餐',
        collapsable: false,
        children: [
          '',
          'child1',
          'child2',
          'child3',
          'child4',
          'child5',
          'child6',
          'child7',
          'child8',
          'child9'
        ]
      }],
      '/catalog/section7/': [{
        title: '尾声',
        collapsable: false,
        children: [
          ''
        ]
      }]
    }
  }
}