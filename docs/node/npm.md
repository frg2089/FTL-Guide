# Node PM

`npm`[^official]

最流行的Node项目管理器 / Node依赖包管理器。

`npm` 全称 `node pm` 或 `new pm`，它**不是**`Node Package Manager`的缩写[^readme]。

[^official]: [npm 英文官网](https://www.npmjs.com/)

[^readme]: 参考官方仓库的[ReadME](https://github.com/npm/cli#is-npm-an-acronym-for-node-package-manager)文件

## 下载

通常来说，安装node后会自动安装npm，此处不再说明。

## 源

通常情况下，我们称呼提供npm包的服务器为注册表服务器（`Registry Server`），
我们会在之后的文档中称呼它为`Registry 服务器`。

通常情况下，您只需要执行这样的指令[^docs]:

```shell
npm config set registry <Registry 服务器>
```

::: warning 注意
需要注意的是，`npm`能且只能设置一个 Registry 服务器。
也就是说，如果您的服务器上没有这个包，那么`npm`将会失败，
而不会查询其他的 Registry 服务器。
:::

::: warning 注意
请注意，您的锁文件(`package-lock.json`)中可能会写有您的 Registry 服务器地址，
这或许会导致没有设置与您相同 Registry 的开发者在开发时会反复修改锁文件。

::: tip
建议您在修改 Registry 时将 Registry 服务器写在项目目录下的的`.npmrc`文件中。
:::

| 推荐使用的源                                |
| ------------------------------------------- |
| https://registry.npmmirror.com [^npmmirror] |

[^docs]: [registry - npm docs](https://docs.npmjs.com/cli/v9/using-npm/config#registry)

[^npmmirror]: [npmmirror.com](https://npmmirror.com)

## 代理

通常情况下，您只需要配置`http_proxy`[^proxy]和`https_proxy`[^https-proxy]环境变量即可

您也可以使用命令操作[^proxy][^https-proxy]

```shell
npm config set proxy <您的代理服务器>
npm config set https-proxy <您的代理服务器>
```

[^proxy]: [proxy - npm docs](https://docs.npmjs.com/cli/v9/using-npm/config#proxy)

[^https-proxy]: [https-proxy - npm docs](https://docs.npmjs.com/cli/v9/using-npm/config#https-proxy)
