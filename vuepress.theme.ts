import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './vuepress.navbar'
import sidebar from './vuepress.sidebar'

export default hopeTheme({
  hostname: 'https://ftl.guide.shimakaze.dev/',

  docsRepo: 'https://github.com/frg2089/FTL-Guide',
  docsDir: 'docs',
  docsBranch: 'master',

  navbar,
  sidebar,

  displayFooter: true,
  footer:
    '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。',

  plugins: {
    copyCode: {},

    copyright: {
      global: true,
      license: 'CC-BY-NC-SA 4.0',
    },

    shiki: {
      themes: {
        light: 'light-plus',
        dark: 'dark-plus',
      },
      lineNumbers: true,
      removeLastLine: true,
      collapsedLines: true,
      notationDiff: true,
      notationFocus: true,
      notationHighlight: true,
      notationErrorLevel: true,
      notationWordHighlight: true,
      whitespace: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      gfm: true,
      align: true,
      attrs: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      tasklist: true,
      component: true,
      chart: false,
      echarts: false,
      mermaid: true,
      spoiler: true,
    },
    components: {
      components: [
        // 'ArtPlayer',
        'Badge',
        'BiliBili',
        // 'CodePen',
        'FontIcon',
        'PDF',
        'Share',
        // 'StackBlitz',
        'SiteInfo',
        'VPBanner',
        'VPCard',
        // 'VidStack',
        // 'XiGua',
      ],
    },
    markdownHint: {
      hint: true,
      alert: true,
    },
    markdownImage: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    },
    markdownTab: {
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    },
  },
})
