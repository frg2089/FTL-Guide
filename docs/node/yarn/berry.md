# Yarn Berry

[官方网站](https://yarnpkg.com/)

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
