---
title: 白嫖Telegraph制成的免费无限图床
date: 2021-07-18 22:57:34
tags: 
    - 整活
    - php
---
## Telegra.ph
Telegraph是即时聊天软件Telegram推出的一个内容发布网站，它允许用户匿名发布文章，同时可以自由上传媒体。
Telegraph的网页界面十分简洁，后端同样耿直爽快（
只要向 `https://telegra.ph/upload` 发送一个Post请求即可
![image.png](https://i.qmcmc.cn/file/f33c7f3473cc9eaab1de2.png)

<!-- more -->

因此，只需要反向代理这个路由与图片地址，再加上 *简单* 的前端就可以实现文件上传了对吧？

```
server {
        listen 80;
        server_name telei.mg;

 		location /upload {
                add_header Access-Control-Allow-Origin *;
                proxy_pass https://telegra.ph/upload;
        }
        location /file/{
                proxy_pass https://telegra.ph/file/;
        }
        client_max_body_size 5m;
}
```
这样的方法存在一个很大的缺陷：直接反代了整个Teleimg——这导致我们的图床里“鱼目混珠”，甚至造成严重的法律后果。

## Teleimg

解救方法很简单，我们用PHP重写整个后端，使用Sqlite建立数据库筛选所有从 _本站上传_ 的图片，这就有了本项目—— [Teleimg](https://github.com/TennousuAthena/Teleimg)

当然，该程序目前功能仍然十分简陋，仅能实现基础的图床功能。图片不会被缓存到每个实例，也就是说所有图片被访问时都必须回源到Telegra.ph。然而缓存同样会占用一定空间，违背了项目的初衷——轻便。因此，本站的实例采用了腾讯云的[CDN](https://curl.qcloud.com/ysARP1Dp)内容分发式网络，可以减轻实例回源负担。

由于本人学业繁忙且本项目已完成基本功能，本项目近期暂时搁置，欢迎在Issue或下方评论区提出功能建议。

### 粘贴监听
```
$(document).ready(function () {
    document.onpaste = function(event){
        let items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (let index in items) {
            let item = items[index];
            if (item.kind === 'file') {
                //upload(item.getAsFile());
            }
        }
    }
});
```

