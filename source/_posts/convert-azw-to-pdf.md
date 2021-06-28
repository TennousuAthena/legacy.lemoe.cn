---
title: 优雅地从Kindle导出书籍并转换为PDF等格式
date: 2021-06-28 23:20:20
tags: 
    - kindle
    - Calibre
---

## 缘起

生物竞赛学校初赛中竟然得到了前10的不虞之誉，因此开始准备复赛事宜。寻找学习材料时发现**Kindle电子书**~~泡面盖~~有售，可惜仅支持在自己的Kindle设备或应用上查看，无法进一步分享或在其他设备上查看。本文章将记录使用Calibre与DeDRM插件将KindleAZW DRM加密文件转为PDF等开放格式的过程。

……

<!-- more -->

![Untitled.png](Untitled.png)

锵锵！这就是这次的目标了 https://www.amazon.cn/dp/B0089C9ZR0

## 实践

### AZW文件下载

- 从Kindle→[管理我的内容和设备](https://www.amazon.cn/mn/dcw/myx.html)中找到此书，点击“通过电脑下载USB传输”

![Untitled%201.png](Untitled%201.png)

![Untitled%202.png](Untitled%202.png)

选择相关Kindle设备，完成。

### Calibre下载及DeDRM安装

- Calibre

> Calibre是一个自由开源的电子书软件套装，可以用来组织、存放、以及管理电子书，支持大多数的电子书格式。同时也支持与许多流行的电子书阅读器进行同步，并可能在DRM的限制下转换电子书的格式。——[维基百科](https://zh.wikipedia.org/wiki/Calibre)

可以在这里：[https://calibre-ebook.com/download](https://calibre-ebook.com/download) 下载相应系统版本的Calibre，Windows下推荐Portable（绿色、编写版），安装过程略

这时添加书籍，发现……

![Untitled%203.png](Untitled%203.png)

这时前往Github: [apprenticeharper/DeDRM_tools]() 并下载最新的Release

（十分厌恶**某些文章**借由防火墙信息差的缘故引流微信公众号的行为，为此本文特地重新上传到国内CDN节点与网盘分流）

如果无法访问Github地址，请尝试[本站备份](https://file-cdn.qmcmc.cn/lemoe/2021/06/DeDRM_tools_7.2.1.zip)

解压刚才下载的DeDRM_tools，并打开calibre→首选项→插件

![Untitled%204.png](Untitled%204.png)

![Untitled%205.png](Untitled%205.png)

![Untitled%206.png](Untitled%206.png)

![Untitled%207.png](Untitled%207.png)

记得重启calibre

![Untitled%208.png](Untitled%208.png)

在插件列表中搜索**DeDRM**，点击“自定义插件”，输入对应Kindle的序列号

![Untitled%209.png](Untitled%209.png)

序列号的获得方式：设备选项→设备信息→序列号（共16位，一般以**B**或**9**开头）

完成！

![Untitled%2010.png](Untitled%2010.png)

### 格式转换

![Untitled%2011.png](Untitled%2011.png)

![Untitled%2012.png](Untitled%2012.png)

![Untitled%2013.png](Untitled%2013.png)

![Untitled%2014.png](Untitled%2014.png)

此方法旨在**推进知识共享**，请遵循相关法律规定，切勿用于盗版印刷或商业用途等行为！

本书以上传至本站[CDN](https://file-cdn.qmcmc.cn/lemoe/2021/06/%E5%85%A8%E5%9B%BD%E4%B8%AD%E5%AD%A6%E7%94%9F%E7%94%9F%E7%89%A9%E5%AD%A6%E7%AB%9E%E8%B5%9B%E7%90%86%E8%AE%BA%E6%95%99%E7%A8%8B.pdf)与[微云](https://share.weiyun.com/Y8yWmHlE)，欢迎取阅

## 尾声

鄙人也许卷不过各路竞赛大佬，但这次竞赛至少能丰富一下经历，实在不行就当图个乐吧 XD

祝愿各位学子金榜题名！