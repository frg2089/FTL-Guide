import { defineUserConfig } from 'vuepress'
import theme from './vuepress.theme'

export default defineUserConfig({
  base: '/FTL-Guide/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'FTL Guide',
      description: '解决开发环境镜像配置的指南',
    }
  },

  temp: '.temp',
  cache: '.cache',
  public: 'public',
  dest: 'dist',
  
  theme,
})
