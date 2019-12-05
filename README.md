# wheelView —— Vue UI 框架组件

[![Build Status](https://travis-ci.org/cmokj/wheelView-project.svg?branch=master)](https://travis-ci.org/cmokj/wheelView-project)

## 项目介绍
这是我在学习 Vue 的过程中做的一个简单的 UI 框架轮子，正在进行时。

## 开始使用
1. 添加 CSS
- 使用本框架建议开启 border-box，IE8 及以上浏览器都支持此样式。
```*,*::before,*::after { box-sizing: border-box }```
- 你还需要设置默认颜色等变量（后续会改为 SCSS 变量），IE15 及以上浏览器都支持此样式。
```
:root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-color: #999;
        --border-radius: 4px;
        --color: #333;
        --border-color-hover: #666;
        }
```
2. 安装组件 wheelview-cmokj
```
npm install --save wheelview-cmokj
```
3. 引入组件
```$xslt
import {Button,ButtonGroup,Icon} from 'wheelview-cmokj'
import 'wheekview-cmokj/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-icon': Icon
    }
}
```
4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_1359580_uedq3o5rnls.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
