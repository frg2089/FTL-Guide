# Yarn Classic

[官方网站](https://classic.yarnpkg.com/)

## 源

通常情况下，我们称呼提供npm包的服务器为注册表服务器（`Registry Server`），
我们会在之后的文档中称呼它为`Registry 服务器`。

通常情况下，您只需要执行这样的指令[^docs]:
```shell
yarn config set registry <Registry 服务器>
```

::: warning 注意
需要注意的是，`yarn`能且只能设置一个 Registry 服务器。
也就是说，如果您的服务器上没有这个包，那么`yarn`将会失败，
而不会查询其他的 Registry 服务器。
:::

|推荐使用的源|
|-|
|https://registry.npmmirror.com [^npmmirror]|

<!-- 没有找到 Yarn Classic 对应的文档 -->
[^docs]: [registry - npm docs](https://docs.npmjs.com/cli/v9/using-npm/config#registry)
[^npmmirror]: [npmmirror.com](https://npmmirror.com)

## 代理

通常情况下，您只需要配置`http_proxy`[^proxy]和`https_proxy`[^https-proxy]环境变量即可

您也可以使用命令操作[^proxy][^https-proxy]
```shell
yarn config set proxy <您的代理服务器>
yarn config set https-proxy <您的代理服务器>
```
::: warning 注意
Yarn Classic 不支持socks代理
:::

<!-- 没有找到 Yarn Classic 对应的文档 -->
[^proxy]: [proxy - npm docs](https://docs.npmjs.com/cli/v9/using-npm/config#proxy)
[^https-proxy]: [https-proxy - npm docs](https://docs.npmjs.com/cli/v9/using-npm/config#https-proxy)
