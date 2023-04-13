import { type SidebarItem, sidebar } from 'vuepress-theme-hope'
import fs from 'fs/promises'
import path from 'path'


const getFolders = async (folderPath: string, options?: {
  ignore: string[]
}): Promise<SidebarItem[]> => {
  // 获取文件列表
  const namelist = await fs.readdir(folderPath)
    .then(i => i.filter(i => options?.ignore.includes(i) !== true))

  return await Promise.all<Promise<SidebarItem>[]>(
    namelist.map<Promise<SidebarItem>>(async name => {
      const stat = await fs.stat(path.join(folderPath, name))
      if (!stat.isDirectory()) {
        return name
      }

      let text: string;
      try {
        text = await fs.readFile(path.join(folderPath, name, '.title'), 'utf8').then(i => i.trim())
      } catch (error) {
        text = name[0].toUpperCase() + name.substring(1)
      }

      return {
        text,
        prefix: `${name}/`,
        collapsible: true,
        children: 'structure',
      }

    })
  )
}

export default sidebar({
  '/': [
    '',
    ...await getFolders(path.join(__dirname, 'docs'), { ignore: ['index.md', '.vuepress'] })
  ],
})