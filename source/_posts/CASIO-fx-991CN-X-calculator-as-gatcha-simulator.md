---
title: CASIO fx-991CN X学生科学计算器概率发生器（抽卡）
date: 2022-03-25 00:00:01
tags: 
  - 计算器
  - 抽卡
  - 概率
---

> 生命的意义在于整活  ——鲁迅。
> 

![](https://file-cdn.qmcmc.cn/assets/open/fxgzedu.cn/img/Genshin_AD.webp)

在紧张的学习生活中，想不想体验抽~~赌~~卡~~博~~的快感？想不想和同学比比谁先**脱非入欧**？苦于身边没有智能设备？那就自己动手丰衣足食吧！

<!-- more -->

{% asset_img Untitled.png %}

CASIO fx-991CN X可谓是广受好评的面向中文用户的科学函数计算器，尽管这不是可写入程序的图形计算器，我们还是可以通过数学表达式来完成一部分功能。

## 模拟器

对于手上没有计算器的读者，可以前往下载CASIO Calculator Emulator，原内容由[可能是全网最全的 CASIO Calculator Emulator 下载](https://hbte.ch/1790.html)提供，存档于[****可能是全网最全的 CASIO Calculator Emulator 下载****](https://www.notion.so/CASIO-Calculator-Emulator-921c682adc04400c8346667877e1b185) 。

下载地址：

- [微云下载](https://share.weiyun.com/fpQvG7xu)
- [CDN分流](https://file-cdn.qmcmc.cn/uploads/2022/03/CASIO%20Calculator%20Emulator%20V20.8.11.7z)

## 原理

Alpha+RanInt+范围可以产生~~伪~~随机整数

{% asset_img Untitled1.png %}

而Σ可以多次产生，同时若出现除数=0或对数≤0等数学错误，运算则会直接抛出异常。

而**原神**中不计保底时单次抽中五星的概率为

{% katex %}
0.6\%=0.006=\frac{3}{500} 
{% endkatex %}

那么我们一次**十连**出金的表达式如下

{% katex %}
\sum_{x=1}^{10}(ln_{RanInt\sharp (-2,497)} )
{% endkatex %}

按下等号便进行了一次十连，若出现**数学错误**那么恭喜出货！

{% asset_img 08da58c2-2a4d-4190-9f6e-1128cc0d101a.gif %}

## 改进

由于硬件平台限制，我们只能做到这样了……对吧？

不过，上次运算结果是可以调用的，也许，我们可以做到抽卡次数记录

{% katex %}
\sum_{x=1}^{10}(ln_{RanInt\sharp (-2,497)}\times 0+1 ) + Ans
{% endkatex %}

{% asset_img f6252c0a-2478-405e-ab0e-9b476889a09a_(1).gif %}

然而，输出结果均为整十的数字……说明即使求和途中出现数学错误，计算器仍会硬着头皮算下去？

## 总结

通过随机数生成函数与求和，我们能在一台普通的函数计算器上基本实现概率发生器并记录试验次数，因而能亲身体会概率的大小。当然，对于大/小保底以及更加精准的试验还有待于讨论交流。

不过，既然你已经能阅读这篇文章，那就直接打开[Github](https://github.com/uzair-ashraf/genshin-impact-wish-simulator)上的[genshin-impact-wish-simulator](https://gi-wish-simulator.uzairashraf.dev/)吧。

Ad astra abyssosque！