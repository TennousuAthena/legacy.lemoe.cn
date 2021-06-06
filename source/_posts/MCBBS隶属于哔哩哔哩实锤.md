---
title: MCBBS隶属于哔哩哔哩实锤
date: 2021-06-06 21:02:06
tags: 杂谈
---

MCBBS是最大的中文Minecraft（我的世界）社区，之前一直很好奇[Mcbbs](https://www.mcbbs.net/ "Mcbbs")与B站的关系，下面是分析：

![](https://i.loli.net/2021/05/02/UarMC8wm3eXZbfu.png)

直接查询论坛底部的备案号，我们发现MCBBS的运营主体是：

![](https://i.loli.net/2021/05/02/dbeQhXGABk8mjut.png)

东银河系漫游指南（北京）科技有限公司，而它的背后……

<!-- more -->

![](https://i.loli.net/2021/05/02/ixsrJyomAGFSlXa.png)

该公司成立于2014年11月27日，用于承接bilibili北京分公司旅游子品牌bilibiliyoo，（已经凉透了）并进行独立融资，bilibili将继续作为股东支持该公司的发展。  

![](https://i.loli.net/2021/05/02/Hz29VSM4vYkh3b6.png)

[官网](https://web.archive.org/web/2016*/http://www.bilibiliyoo.com/ "官网")（已凉）

![](https://i.loli.net/2021/05/02/qEk9ATzedJ4HIDK.png)

[官博](https://weibo.com/bilibiliyoo "官博")（已凉）

![](https://i.loli.net/2021/05/02/SJvcxO2XagTAlWf.png)


主营业务bilibiliyoo凉了之后，该公司便用于承接其他整活业务（毕竟公司名称就在neta《银河系漫游指南》

![](https://i.loli.net/2021/05/02/mqHJyXoIDNxLvWl.png)


结论：Minecraft(我的世界)中文论坛由哔哩哔哩（上海幻电信息科技有限公司）的全资子公司东银河系漫游指南（北京）科技有限公司运营，运作相对独立。


以上是行政部分的分析，下面是技术的分析，比较间接
首先就是使用哔哩哔哩账号登陆，这个OAuth接口是不公开的，目前我也仅在Mcbbs上看到

![](https://i.loli.net/2021/05/02/QR6M1K4wAE9qFBU.png)

其次，MCBBS帖子中的哔哩哔哩视频播放器也是特供的，与视频分享页下的播放器代码不同

![](https://i.loli.net/2021/05/02/braSmDvOf51iXdn.png)

（公共的外联播放器，对分辨率有限制）

![](https://i.loli.net/2021/05/02/oDYJy9M3KtGTU7Q.png)

![](https://i.loli.net/2021/05/02/c2vZzwgWLyhl1Ja.png)

（特供[播放器白名单](https://s1.hdslb.com/bfs/static/player/main/whitelist.js?ver=20210430 "播放器白名单")）

![](https://i.loli.net/2021/05/02/HyntXagML46sKfd.png)

以上。