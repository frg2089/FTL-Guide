# Git for Windows

[Git](https://git-scm.com/)是一个[自由和开源](https://git-scm.com/about/free-and-open-source)的分布式版本控制系统，旨在以速度和效率处理从小型到非常大的项目。[^official]

[^official]: [Git 英文官网](https://git-scm.com/)

## 下载

通常情况下，从官网下载 git for Windows 是非常痛苦的，
它会从 GitHub Release 上直接下载。  
而由于众所周知的原因， GitHub 的访问速度并不是很快。

所以这里提供两个可以下载到 git for Windows 的网站。

- [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/)
- [git-for-windows - registry.npmmirror.com](https://registry.npmmirror.com/binary.html?path=git-for-windows/)

## 代理

### HTTP 代理

通常情况下，您只需要配置`http_proxy`[^env]和`https_proxy`[^env]环境变量即可

您也可以使用命令操作[^proxy]

```shell
git config set http.proxy <您的代理服务器> --global
```

[^env]: [git 关于http部分的文档](https://github.com/git/git/blob/master/Documentation/config/http.txt)

[^proxy]: [http.proxy - git-scm.com/docs](https://git-scm.com/docs/git-config#Documentation/git-config.txt-httpproxy)

### SSH 代理

一般来说，您无需配置这个代理，SSH方式要比HTTPS连接更稳定和可靠。
