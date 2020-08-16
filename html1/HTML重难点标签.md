# HTML重难点标签

## a标签的用法

    <a href="http://baidu.com" target="_blank"></a>

### a标签属性
1. href
2. target
3. download
4. rel=noopener

### href的取值
1. 网址
   https://baidu.com
   http://baidu.com
   //baidu.com (自动继承协议http或https)
2. 路径
   /a/b/c 以及 a/b/c
   index.html 以及 ./html (一个相对路径，一个绝对路径)
3. 伪协议
   javascript:代码;  （点击执行js代码，什么都不写则为一个点击了什么都没有）
   mailto:邮箱    （点击发送邮件）
   tel:手机号       （点击拨打电话）
4. id
   href="#xxx" （点击跳转到该id的锚点）
### target的取值
1. _blank (打空白开新标签)
2. _top（在最顶层的标签中打开）
3. _parent (在父级标签中打开)
4. _self (在本级标签中打开)

### a标签的download
* 下载页面，不是所有浏览器都支持
  
## img标签
    <img src="/1.jpg" alt="123">

### 作用
发出get请求，展示一张图片
### 属性
1. alt
   如果无法显示图像，浏览器将显示替代文本
2. width 和 height
   指定宽高（可能会变形）
   max-width 100%
   自适应 不变形
3. 事件 onload /onerror
   图片载入成功或者载入失败时触发
4. 可替换元素
   CSS 里，可替换元素（replaced element）的展现不是由CSS来控制的。这些元素是一类 外观渲染独立于CSS的 外部对象。 典型的可替换元素有 img、 object、 video 和 表单元素，如textarea、 input 。 某些元素只在一些特殊情况下表现为可替换元素，例如 audio 和 canvas 。 通过 CSS content 属性来插入的对象 被称作 匿名可替换元素（anonymous replaced elements）
## table标签
* table (主体)
* thead (表头)
* tbody (主体)
* tfoot (页脚)
* tr (行)
* td (单元格数据)
* th (头)

## 其他感想
标签很多，不好记忆，多用多想，记住重点
