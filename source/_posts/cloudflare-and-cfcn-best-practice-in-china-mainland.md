---
title: (已过期)Cloudflare + CFCN（宿云） 大陆地区使用Cloudflare最佳实践
date: 2019-8-10 01:34:59
tags: 
    - Cloudflare
---

> 本文迁移自旧站，其内容可能较为陈旧，请注意更新

![](https://file-cdn.qmcmc.cn/usr/uploads/2019/08/4091655059.jpg)

> `由于CloudFlare加速覆盖地区的增广，CFCN计划已暂停亚太反代加速，并于2019年8月30日全线切回至直连Cloudflare状态，同时Cloudflare加大对partner的限制，本片文章内容可能已不再适用`
> 

# 简单介绍

- CFCN加速是SuCloud推出的面向中国大陆用户访问的公共优化服务，接入使用方式使用CNAME接入，可以为中国大陆全网用户访问Cloudflare网络节点加速。

<!-- more -->

# 接入教程

## 要求

- 一个域名（本教程以`你的域名.me`为例）
- 已开启的Web服务
- Cloudflare
- 支持分区解析的DNS服务商，如Dnspod（本教程以此为例），Aliyun，AWS Route53 等
- Cloudflare Partner（用于CNAME接入）如Tioxgen（本教程以此为例）等

## 第零步

```
(若未接入Cloudflare直接跳至第一步)
```

在注册域名的服务商处修改域名NS地址，转移上文提到的DNS服务商，如图

![](https://file-cdn.qmcmc.cn/usr/uploads/2019/08/986455726.png)

## 第一步

打开

Tioxgen

（或其他Cloudflare Partner），添加域名

![](https://file-cdn.qmcmc.cn/usr/uploads/2019/08/406879918.png)

然后正常添加解析记录即可，结果大概是这样的：

![](https://file-cdn.qmcmc.cn/usr/uploads/2019/08/2341613858.png)

复制上图框中的地址：

> 你的域名.me.cdn.cloudflare.net
> 

在Dnspod中分别添加以下两条添加解析记录：

- CNAME @ 你的域名.me.cdn.cloudflare.net. （线路为境外）
- CNAME @ su.9sep.org. （线路为境内）

![](https://file-cdn.qmcmc.cn/usr/uploads/2019/08/2536871973.png)

## 第二步

大功告成！现在你只需等待解析生效即可~

![](https://file-cdn.qmcmc.cn/usr/uploads/2019/08/1983744345.png)

速度变快了（吧？）

---

- 图源 【オリジナル】「夏に飛び込む」