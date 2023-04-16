import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './vuepress.navbar'
import sidebar from './vuepress.sidebar'

export default hopeTheme({
  hostname: 'https://frg2089.github.io/FTL-Guide/',

  docsRepo: 'https://github.com/frg2089/FTL-Guide',
  docsDir: "docs",
  docsBranch: "master",

  navbar,
  sidebar,

  displayFooter: true,
  footer: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。',

  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    }
  }
})
