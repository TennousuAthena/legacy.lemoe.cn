---
title: 内网穿透：原理与实践
date: 2020-3-8 01:08:41
tags:
    - NAT
    - FRP
    - 存档
---

> 本文迁移自旧站，其内容可能较为陈旧，请注意更新
![](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/3475283963.jpg)

# 缘由

IPv4，又称互联网通信协议第四版，是网际协议开发过程中的第四个修订版本，也是当先互联网广泛采用的版本。由于IPv4采用32位地址，因此其总共只有2^32个地址，此外，除去为特殊用途所保留地址仅有约42.9亿个地址可供分配。尽管互联网工程工作小组已规划用于改进地址枯竭问题的下一代协议——IPv6，可由于终端、传输路径等方方面面的网络软硬件升级等技术与成本的问题，IPv6的普及迟迟未能推进，所以目前IPv4在互联网仍占据主流地位。Google在2018年的报告，49个国家在IPv6上提供了超过5%的流量，有24个国家的IPv6流量超过15%。

<!-- more -->

![](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/2112877300.png)

（图：Google访问中IPv6流量超过15%的地区）

为了解决IPv4地址枯竭的问题，NAT（即网络地址转换）作为一种解决IPv4地址短缺以避免保留IP地址困难的方案而流行起来的。对于家庭和小型办公室来说，申请独立IP的代价高于其所带来的利益，所以NAT取得广泛使用。

![image (1).jpg](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/2266936046.png)

（图：NAT的一个实例）

如图，为主机A到主机B的连接。主机A的地址为10.1.1.10，是IPv4保留的局域网地址。当主机A连接互联网时，会将IP地址转换后以55.1.1.1的IP访问主机B经静态NAT转化的地址。静态NAT在RFC 2663中提出，在技术上仅支持地址转换。为此，静态NAT需要一个NAT表，分别为内网IP和外网IP。

目前互联网中更常用的NAT为网络地址端口转换即NATP（又称动态转换），该方法支持端口的映射，并允许这个内网共用一个公网IP地址。这也导致内网架设的服务无法在外网访问。

综上，NAT虽然解决了IPv4地址枯竭的问题，却导致内网服务发布困难。IP是互联网中定位一台主机的唯一地址，当内网中的主机没有静态IP地址要被外网稳定访问时就要使用内网穿透。内网穿透大致原理即为反向代理，与正向代理相似，都是在进行流量转发，区别为正向代理真实客户端，反向代理真实服务端。

## 内网穿透软件

市面上主流的内网穿透软件有Ngrok（软件开源，服务付费）,花生壳（闭源，价格较贵），NAT123（闭源，价格一般，服务较不稳定），FRP（开源）等。下文将介绍部分软件的使用。

### Ngrok

Ngrok使用Go语言开发，通过反向代理建立安全通道连接远程服务端与本地http服务。

具体步骤：

1.登录Ngrok网站ngrok.com，注册账号并下载客户端ngrok.exe（本文以Windows为例）

2.激活官网提供的AuthKey

```
C:\Program\ngrok>ngrok authtoken 6gXXXXXXXXXXXX_XXXXXXXXXXXX

Authtoken saved to configuration file: C:\Users\qctech/.ngrok2/ngrok.yml
```

3.启动一个http内网穿透，端口为80

`C:\Program\ngrok>ngrok http 80`

4.大功告成，公网域名会显示出来

![1544223583.jpg](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/1544223583.png)

![image (2).jpg](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/4258327677.png)

由于Ngrok的服务器在海外，国内连接速度较慢，同时对于边缘服务器定制化程度较低，故不适合于生产环境。

### FRP

FRP(Fast Reverse Proxy)是一个Go语言开发的可用于内网穿透的高性能的反向代理应用。

![Untitled](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/436840276.png)

### 服务端配置

Frp需要一个公网IP的服务器作为服务端，可以在云计算平台上选购，示例中的地址为x.x.x.x。客户端可以是Windows、MAC、或者Linux以及树莓派，以Linux系统为例：

### 简单TCP端口配置

1.下载服务端并解压2.在服务端上编辑frps.ini服务端配置文件，最基本的配置如下：

```
    # frps.ini
    [common]
    bind_port = 7000  #frp通信端口
```

启动frps

```
./frps -c ./frps.ini
```

在客户端上编辑frpc.ini，以本地端口TCP:80作为示例，其中，“tcp_service”为可以为任意字段。

```
    # frpc.ini
    [common]
    server_addr = x.x.x.x
    server_port = 7000

    [tcp_service]
    type = tcp
    local_port = 80
    remote_port = 80
```

启动客户端

```
./frpc -c ./frpc.ini
```

### 简单HTTP配置

编辑frps.ini

```
    # frps.ini
    [common]
    bind_port = 7000           #frp通信端口
    vhost_http_port = 2333　　　　#vhost端口
```

启动frps

```
./frps -c ./frps.ini
```

编辑frpc.ini

```
    # frpc.ini
    [common]
    server_addr = x.x.x.x
    server_port = 7000

    [web]
    type = http
    local_port = 80
    custom_domains = example.com
```

在example.com 上添加一条A记录 @ -> x.x.x.x启动frpc

```
./frpc -c ./frpc.ini
```

![Untitled](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/1485769163.png)

### 使用Token保护FRP服务器

由于FRP服务向公网开放，所有知道服务器地址和端口的人都可以进行连接，为防止出现以上情况，可以给服务端添加一个Token。

```
    # frps.ini
    [common]
    bind_port = 7000           #frp通信端口
    token = qctech233          #身份验证
```

在客户端中同样只需要加入token参数即可。

### 使用Basic Auth保护Web服务

FRP支持使用Basic Auth保护web服务，用户必须输入正确的用户名和密码才能访问，该功能仅支持http协议。

```
    # frpc.ini
    [web]
    type = http
    local_port = 80
    custom_domains = auth.example.com
    http_user = abc123
    http_pwd = qctech123

```

![Untitled](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/3749121353.png)

### 启用FRP Dashboard

启用Dashboard 可以轻松查看统计信息，只需要在服务端配置文件[common]中添加

```
dashboard_port = 7500               #Dashboard 端口
dashboard_user = admin              #Dashboard 用户名
dashboard_pwd = admin               #Dashboard 密码
```

在浏览器中打开 http://x.x.x.x:7500 即可访问Dashboard

![https://file-cdn.qmcmc.cn/usr/uploads/2020/03/119262518.png](https://file-cdn.qmcmc.cn/usr/uploads/2020/03/119262518.png)

```
    # frpc.ini
    [common]
    admin_addr = 127.0.0.1
    admin_port = 5438
```

重启命令：

```
frpc reload -c ./frpc.ini
```

### 端口白名单

公开FRP服务时，为防止端口被滥用，可以手动指定端口白名单：

```
# frps.ini
[common]
allow_ports = 3000-4000,5656,7800-8000
```

allow_ports = 3000-4000,5656,7800-8000

其中，“-”用来连接端口范围，“,”用来连接单个端口。

### 二次开发

Frp使用Apache 2.0协议，允许修改、分发、个人使用以及商业使用，这也为我们二次开发提供便利。[Sakura FRP](https://www.natfrp.com/)是 Frp的一个较为成功的案例。其客户端基于Frp 修改，免去了配置文件，改为从网络读取配置。

# 结语

Frp可以轻松解决复杂条件下的内网穿透问题，无论是个人网站、NAS还是Windows远程桌面等TCP应用都可以轻松高效利用自己的服务映射到公网。