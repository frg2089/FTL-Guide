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

  plugins: {
    mdEnhance: {
      footnote: true,
    }
  }
})
