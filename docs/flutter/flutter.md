# Flutter

[Flutter](https://flutter.dev/) 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用。[^official][^official-cn]

[^official]: [Flutter 英文官网](https://flutter.dev)

[^official-cn]: [Flutter 中文官网](https://flutter.cn)

## 下载

想要下载flutter，通常是直接clone在GitHub上的存储库即可。

```shell
# 使用HTTP
git clone -b stable https://github.com/flutter/flutter.git
# 使用SSH
git clone -b stable git@github.com:flutter/flutter.git
```

或者，您也可能想要下载[独立构建版本](https://flutter.cn/docs/development/tools/sdk/releases)

## 源

通常来说，我们建议使用[https://storage.flutter-io.cn/](https://storage.flutter-io.cn/)[^china][^china.cn]。

您需要设置以下两个环境变量

|           env            |             value             |
| :----------------------: | :---------------------------: |
|      PUB_HOSTED_URL      |   https://pub.flutter-io.cn   |
| FLUTTER_STORAGE_BASE_URL | https://storage.flutter-io.cn |

::: warning 注意
请注意，您的锁文件(`pubspec.lock`)中可能会写有您的 PUB_HOSTED_URL 服务器地址，
这或许会导致没有设置与您相同 PUB_HOSTED_URL 的开发者在开发时会反复修改锁文件。

您可以通过Git Hooks来在提交时自动替换 PUB_HOSTED_URL

```powershell
#!/usr/bin/env pwsh
# .git\hooks\pre-commit
$tmp = Get-Content .\pubspec.lock | ForEach-Object { $PSItem.Replace('https://pub.flutter-io.cn', 'https://pub.dev') }
$tmp | Out-File .\pubspec.lock
```

:::

[^china]: [在中国使用Flutter - docs.flutter.dev](https://docs.flutter.dev/community/china)

[^china.cn]: [在中国使用Flutter - flutter.cn](https://flutter.cn/community/china)

## 代理

通常情况下，您只需要配置`HTTP_PROXY`和`NO_PROXY`环境变量即可[^proxy]。

[^proxy]: [flutter#41034 - Github Issues](https://github.com/flutter/flutter/issues/41034)
