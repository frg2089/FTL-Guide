# Yarn Berry

[Yarn](https://yarnpkg.com/) 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求。[^official][^official-cn]

[^official]:[Yarn 英文官网](https://yarnpkg.com/)
[^official-cn]:[Yarn 中文官网](https://yarnpkg.cn/)

## 下载

您首先需要安装 Corepack  
当您的 Node.js 版本 >=16.10 时，您可以直接使用这条命令安装 Corepack 。  
```shell
corepack enable
```
如果您的 Node.js 版本 <16.10，您需要额外下载 Corepack 。  
```shell
npm i -g corepack
```

当一切就绪后，您可以使用这条命令来安装 Yarn Berry。[^install]
```shell
# Node.js ^16.17 or >=18.6
corepack prepare yarn@stable --activate
# Node.js <16.17 or <18.6
corepack prepare yarn@<version> --activate
```

[^install]:[Yarn 安装教程](https://yarnpkg.com/getting-started/install)

或者，您只希望在个别项目中使用 [Yarn Berry](#yarn-berry) ，
您的其他项目依旧使用 [Yarn Classic](./classic.md) ，
您可以仅为新项目配置 [Yarn Berry](#yarn-berry) 。
此处假设您已经安装了 [Yarn Classic](./classic.md) ，
您只需要使用以下命令即可。

```shell
yarn init -2
```

您亦可以将`.yarn`文件夹和`.yarnrc.yml`文件复制到旧项目中为旧项目安装 [Yarn Berry](#yarn-berry)。

## 源

通常情况下，我们称呼提供npm包的服务器为注册表服务器（`Registry Server`），
我们会在之后的文档中称呼它为`Registry 服务器`。

通常情况下，您只需要执行这样的指令[^docs]:
```shell
yarn config set npmRegistryServer <Registry 服务器>
```

::: warning 注意
需要注意的是，`yarn`能且只能设置一个 Registry 服务器。
也就是说，如果您的服务器上没有这个包，那么`yarn`将会失败，
而不会查询其他的 Registry 服务器。
:::

|推荐使用的源|
|-|
|https://registry.npmmirror.com [^npmmirror]|

[^docs]: [registry - yarn docs](https://yarnpkg.com/configuration/yarnrc#npmRegistryServer)
[^npmmirror]: [npmmirror.com](https://npmmirror.com)

## 代理

通常情况下，您只需要配置`http_proxy`和`https_proxy`环境变量即可

您也可以使用命令操作[^httpProxy][^httpsProxy]
```shell
yarn config set httpProxy <您的代理服务器>
yarn config set httpsProxy <您的代理服务器>
```
::: warning 注意
Yarn Berry 不支持socks代理
:::
::: warning 注意
这两个命令会修改您的项目目录下的`.yarnrc.yml`文件，
请注意不要把带有如：
```yaml
httpProxy: "socks5://127.0.0.1:*"
httpsProxy: "socks5://127.0.0.1:*"
```
的内容提交到仓库，以免影响其他贡献者开发。
:::

[^httpProxy]: [httpProxy - yarn docs](https://yarnpkg.com/configuration/yarnrc#httpProxy)
[^httpsProxy]: [httpsProxy - yarn docs](https://yarnpkg.com/configuration/yarnrc#httpsProxy)
