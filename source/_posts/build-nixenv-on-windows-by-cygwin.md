---
title: 使用Cygwin在Windows上打造类Unix（Linux）环境
date: 2022-06-19 22:26:15
tags: 折腾
---

## 引

长期接触Linux的小伙伴们难免在项目开发中遇到“误入”Linux命令的尴尬场景。

```bash
C:\workspace\my-project>ll
'll' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```
<!-- more -->
<aside>
❓ 何为Cygwin？

</aside>

[Cygwin](https://www.cygwin.com/)是许多自由软件的集合，用于在Windows上，“运行”类UNIX系统。Cygwin的主要目的是通过**重新编译**，将*NIX系统上的软件移植到Windows上。

简而言之，Cygwin在Windows上提供了类似UNIX的工具。

需要注意的是，这不代表Cygwin可以直接在Windows上执行UNIX上的原生应用（如二进制包、deb包等），如果你的需求如此，请使用虚拟机或WSL。

那么为什么不直接安装虚拟机或WSL呢？——虚拟机和宿主机隔着一层”厚障壁“，即使是号称无缝集成的WSL2，执行也会带来一定的时间与内存开销。相反，Cygwin运行的就是土生土编译的PE(*portable executable)*文件，效率更高更方便。

## 行

### 安装Cygwin

我们开始吧！

首先从Cygwin官网下载最新安装包文件 [https://www.cygwin.com/setup-x86_64.exe](https://www.cygwin.com/setup-x86_64.exe)

下载后的setup不必删除，如果需要安装新的包时仍然需要这个文件。

{% asset_img Untitled.png %}

当然，从互联网下载

接着选定安装路径，请记住这个路径，因为我们即将添加到PATH环境变量

{% asset_img Untitled%201.png %}

路径可以随意填写

选定本地包目录，随意。

设置系统代理，根据实际情况填写。

选择镜像，建议选择国内高校，此处以[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/cygwin/)为例

选择`Install from Internet`, 在”User URL”处输入以下地址：

`https://mirrors.tuna.tsinghua.edu.cn/cygwin/`

{% asset_img Untitled%202.png %}

接着需要选择要安装的包，首先我们设置View为Full，然后在Search框内添加需要的软件包，在下方结果页中的New中选择最新的版本号即可，以lynx为例，稍后我们需要lynx下载apt-cyg

{% asset_img Untitled%203.png)

完成！最后可以勾选创建Cygwin Terminal桌面图标与启动菜单，如果你打算用自己喜欢的终端运行（如Mobaxterm、Cmder等，稍后本文将以Windows Terminal配置方法为例）则不用勾选。

{% asset_img Untitled%204.png %}

### 调教Cygwin

- 设置环境变量，越往上优先级越高，不建议超过系统优先级
    
    {% asset_img image.jpg %}
    

- 配置包管理器****apt-cyg****

```
lynx -source rawgit.com/transcode-open/apt-cyg/master/apt-cyg > apt-cyg
install apt-cyg /bin
```

- 安装Nano

```bash
apt-cyg install nano
```

- 编辑~/.bashrc，添加如下内容供参考

```bash
alias ls='ls -hF --color=tty'                 # classify files in colour
alias dir='ls --color=auto --format=vertical'
alias vdir='ls --color=auto --format=long'
alias ll='ls -la'                              # long list
alias la='ls -A'                              # all but . and ..
alias l='ls -CF'                              #

alias apt='apt-cyg'
alias apt-get='apt-cyg'

# 避免日常手误
alias cd..='cd ..'
# 退出当前目录
alias ..='cd ..'
alias ...='cd ../../..'
alias ....='cd ../../../..'
alias .....='cd ../../../..'
```

随后`$ source .bashrc`

### 配置Windows Terminal

参考内容如下

{% asset_img image_(1).jpg %}

如有问题，欢迎留言。

以上。