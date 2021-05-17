---
title: Hexo速查表
categories: 运维
tags:
 - hexo
---

整理了一部分常用命令，详见[官方文档](https://hexo.io/zh-cn/docs/commands)

# 命令

## 创作

### 新文章

    hexo new <标题>


### 新草稿


    hexo new draft <标题>

### 发布草稿

    hexo publish [layout] <文件名>


### 新页面

    hexo new page <标题>


## 维护

### 生成静态文件

    hexo g


### 启动服务器

    hexo s


### 部署

    hexo d


### 清理缓存

    hexo clean

## 参数
参数 | 描述 | 默认值
--- | --- | ---
`layout` | 布局 | [`config.default_layout`](/zh-cn/docs/configuration#文章)
`title` | 标题 | 文章的文件名
`date` | 建立日期 | 文件建立日期
`updated` | 更新日期 | 文件更新日期
`comments` | 开启文章的评论功能 | true
`tags` | 标签（不适用于分页） |
`categories` | 分类（不适用于分页）|
`permalink` | 覆盖文章地址 |
`lang` | 覆盖语言设置 | 不再从 `_config.yml` 继承