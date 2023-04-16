# Yarn Berry

[Yarn](https://yarnpkg.com/) 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求。[^official][^official-cn]

[^official]:[Yarn 英文官网](https://yarnpkg.com/)
[^official-cn]:[Yarn 中文官网](https://yarnpkg.cn/)

## 下载

您需要使用npm安装[yarn classic](./classic.md)后，才可以针对项目安装[yarn berry](#yarn-berry)。  
为新项目配置[yarn berry](#yarn-berry)只需要使用以下命令即可。

```shell
yarn init -2
```

或者，您也可以将`.yarn`文件夹和`.yarnrc.yml`文件复制到旧项目中为旧项目安装[yarn berry](#yarn-berry)。

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
