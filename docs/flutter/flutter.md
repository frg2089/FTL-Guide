# Flutter

[Flutter](https://flutter.dev/) 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用。[^flutter.cn]

[^flutter.cn]:[flutter.cn](https://flutter.cn/#tabs)

## 下载

想要下载flutter，通常是直接clone在GitHub上的存储库即可。
```powershell
# 使用HTTP
git clone -b stable https://github.com/flutter/flutter.git
# 使用SSH
git clone -b stable git@github.com:flutter/flutter.git
```

或者，您也可能想要下载[独立构建版本](https://flutter.cn/docs/development/tools/sdk/releases)

## 源

通常来说，我们建议使用[https://storage.flutter-io.cn/](https://storage.flutter-io.cn/)[^china][^china.cn]。

您需要设置以下两个环境变量

|env|value|
|:-:|:-:|
|PUB_HOSTED_URL|https://pub.flutter-io.cn|
|FLUTTER_STORAGE_BASE_URL|https://storage.flutter-io.cn|

[^china]:[在中国使用Flutter - docs.flutter.dev](https://docs.flutter.dev/community/china)
[^china.cn]:[在中国使用Flutter - flutter.cn](https://flutter.cn/community/china)

## 代理

通常情况下，您只需要配置`HTTP_PROXY`和`NO_PROXY`环境变量即可[^proxy]。

[^proxy]:[flutter#41034 - Github Issues](https://github.com/flutter/flutter/issues/41034)