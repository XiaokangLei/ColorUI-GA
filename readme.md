# ColorUI GA

ColorUI GA是基于ColorUI 2.0开发的小程序原生css组件库。在原组件库的基础上会增加部分样式和模板，长期更新，如果您有好的想法或对本项目有任何建议以及发现文中内容有误的请提交 [Github Issues](https://github.com/XiaokangLei/ColorUI-GA/issues)。对于想要一起开发，补充CSS样式库的朋友，欢迎提交 PR。

## 文档

- 【努力更新中...】文档地址：[链接](http://one.x-artspace.cn/ColorUI-GA-Docs/)
- 小程序预览

<div align=center>
  <img width="160px" style="border-radius: 5%;" bor src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

## 快速开始

- 1、下载 [源码](https://github.com/XiaokangLei/ColorUI-GA) 并解压，复制`/colorui`文件夹到项目根目录
- 2、`app.wxss`引入关键css：`main.wxss`,`icon.wxss`

```js
// 根目录 app.wxss 文件
@import "colorui/main.wxss";
@import "colorui/icon.wxss";
// 若需要使用微动画，请引入 animation.wxss
@import "colorui/animation.wxss";
// 若使用暗色模式，请引入 dark.wxss，注意，当前版本暗色模式随系统切换，目前不支持手动切换
@import "colorui/dark.wxss";
```

## 自定义顶部导航栏(可选)

根据项目需要，决定是否自定义导航栏，示例导航栏代码在`/colorui/components/cu-custom`中，可自行修改相关参数进行配置。

- 1、`app.js`获得系统信息

```js
onLaunch: function() {
  wx.getSystemInfo({
    success: e => {
      this.globalData.StatusBar = e.statusBarHeight;
      let custom = wx.getMenuButtonBoundingClientRect();
      this.globalData.Custom = custom;  
      this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
    }
  })
},
```

- 2、`app.json`配置取消系统默认导航栏,并全局引入组件

```js
"window": {
  "navigationStyle": "custom"
},
"usingComponents": {
  "cu-custom":"/colorui/components/cu-custom"
}
```

- 3、`xxx.wxml`页面调用

```html
<cu-custom bgColor="bg-gradual-pink" isBack="{{true}}">
  <view slot="backText">返回</view>
  <view slot="content">导航栏</view>
</cu-custom>
```

- 4、参数

| 参数     |       作用       |  类型   | 默认值 |
| -------- | :--------------: | :-----: | :----: |
| bgColor  |   背景颜色类名   | String  |   ''   |
| isBack   |   是否开启返回   | Boolean | false  |
| isCustom | 是否开启左侧胶囊 | Boolean | false  |
| bgImage  |   背景图片路径   | String  |   ''   |

| slot块   |                作用                |
| -------- | :--------------------------------: |
| backText |            返回时的文字            |
| content  |              中间区域              |
| right    | 右侧区域(小程序端可使用范围很窄！)   |

## 支持

**如果本文能为您得到帮助，请给予支持！**

- 关注公众号 👉 **ColorUI GA**
- 项目 [Github](https://github.com/XiaokangLei/ColorUI-GAv) 点击**右上角 Star :star:**
- 分享小程序给您身边更多的小伙伴

<div align=center>
  <img width="160px" style="border-radius: 5%; margin:0 10%" bor src="https://s1.ax1x.com/2022/11/30/zwKWsx.jpg">
  <img width="160px" style="border-radius: 5%; margin:0 10%" bor src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

<!-- **请作者喝咖啡**
<div align=center>
    <img width="50%" style="border-radius: 5%" bor src="https://pic3.zhimg.com/80/v2-a1225a9a1ea9b01aeb77ca915811fb5e_1440w.webp">
</div> -->