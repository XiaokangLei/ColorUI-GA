# ColorUI GA

ColorUI GA 是基于[ColorUI 2.0](https://github.com/weilanwl/coloruicss)开发的小程序原生 css 组件库。在原组件库的基础上会增加部分样式和模板，长期更新，如果您有好的想法或对本项目有任何建议以及发现文中内容有误的请提交 [Github Issues](https://github.com/XiaokangLei/ColorUI-GA/issues)。对于想要一起开发，补充 CSS 样式库的朋友，欢迎提交 PR。

非常感谢[ColorUI 2.0](https://github.com/weilanwl/coloruicss)作者开源代码，本代码在此基础上进行开发。

**如果本项目能为您提供帮助，请右上角 star 给予支持！**

## 文档&在线预览

**_注意：个别预览样式与真机存在少许差距，以小程序客户端实际样式为准_**

- 在线预览（模板&样式）：[链接](https://one.x-artspace.cn/ColorUI-GA-Docs/h5/demo.html)
- 文档地址：[链接](http://one.x-artspace.cn/ColorUI-GA-Docs/)【努力更新中...】
- 微信扫描预览（或微信小程序搜索 ColorUI GA）

<div align=center>
  <img width="160px" style="border-radius: 5%;" bor src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

## 模板

最近更新：2023/1/5，预览地址：[链接](https://one.x-artspace.cn/ColorUI-GA-Docs/h5/demo.html)

**_注意：线上小程序发布周期较慢，最新样式请下载代码运行程序进行预览_**

- 首页 UI 设计模板：2 个
- 个人中心 UI 设计模板：2 个
- 用户列表 UI 设计模板：2 个
- 评论页 UI 设计模板：3 个
- 消息列表 UI 设计模板：2 个
- 音乐播放 UI 设计模板：1 个
- 书籍学习 UI 设计模板：2 个
- 登录注册 UI 设计模板：2 个

## 快速开始

- 1、下载 [源码](https://github.com/XiaokangLei/ColorUI-GA) 并解压，复制`/colorui`文件夹到项目根目录
- 2、`app.wxss`引入关键 css：`main.wxss`,`icon.wxss`

```js
/* 根目录 app.wxss 文件 */
@import "colorui/main.wxss";
@import "colorui/icon.wxss";
/* 若需要使用微动画，请引入 animation.wxss */
@import "colorui/animation.wxss";
/* 若使用暗色模式，请引入 dark.wxss，注意，当前版本暗色模式随系统切换，目前不支持手动切换 */
@import "colorui/dark.wxss";
```

- 3、如果使用新版的组件样式`app.json`里面的`"style": "v2"`，部分样式将失效，请确保删除全局`app.json`里面的`"style": "v2"`。如确实需要使用新版样式，可在`page`中的`.json`文件中添加`"style": "v2"`。
- 4、【注意】部分样式需要 page 中的 wxss 样式一起使用才能看到完整效果，请注意查看源码

## Demo 快速体验

- 基础表单组件库使用示例，v2.0.9 版本 Demo[下载链接](https://github.com/XiaokangLei/ColorUI-GA/releases/download/v2.0.9/demo.zip)

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
  "cu-custom":"/colorui/components/cu-custom/cu-custom"
}
```

- 3、`xxx.wxml`页面调用

```html
<cu-custom bgColor="bg-gradual-blue" isBack="{{true}}">
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

| slot 块  |                作用                |
| -------- | :--------------------------------: |
| backText |            返回时的文字            |
| content  |              中间区域              |
| right    | 右侧区域(小程序端可使用范围很窄！) |

## 待办

- [ ] 长期：模板设计（每周上新 1-2 个模板），当前 UI 模板个数：16
- [ ] 长期：样式调整与设计。大小、颜色、padding、margin 等
- [x] fix 轮播图左侧图消失 BUG
- [x] 小程序检测到新版本主动更新
- [x] 【基础样式】背景色修改、扩展
- [x] 【基础样式】圆环形状进度条(canvas2D 实现) [无预览]【请在小程序端查看】
- [x] 【基础样式】虚线边框和蓝色边框样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/base/border)
- [x] 【组件设计】手风琴向下展开样式&文本展开与收起 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/piano)
- [x] 【组件设计】滚动 Tips(单行、多行、左右、上下) [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/tips)
- [x] 【组件设计】评分样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/rate)
- [x] 【组件设计】轻提示 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/toast)
- [x] 【组件设计】状态提示 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/status)
- [x] 【组件设计】日历样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/calendar)
- [x] 【组件设计】表格样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/table)
- [x] 【扩展样式】瀑布流图片展示样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/waterfall)
- [x] 【扩展样式】卡片翻转样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/overturn)
- [x] 【扩展样式】滚动抽奖样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/draw)
- [x] 【扩展样式】历史搜索样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/search)
- [x] 【扩展样式】打卡签到样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/clockin)
- [x] 【扩展样式】会员卡/卡券样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/coupon)
- [x] 【扩展样式】商品滑动样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/goods)
- [x] 【扩展样式】骨架屏样式 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/expand/skeleton)
- [x] 【扩展样式】卡片设计 【无预览】【请在小程序端查看】
- [x] 【扩展样式】Emoji(卡片设计中已集成) 【无预览】【请在小程序端查看】
- [x] 【组件设计】日历样式新增农历 [【在线预览】](https://one.x-artspace.cn/ColorUI-GA-Docs/#/component/calendar)
- [ ] 头像右下角标签设计
- [ ] 广告条设计
- [ ] 倒计时
- [ ] 图片下载前显示自定义图片

## 导航收录

- Iconfont 阿里巴巴矢量图标: <https://www.iconfont.cn/>
- 谷歌压缩图片: <https://squoosh.app/>
- tinypng 图片压缩: <https://tinypng.com/>
- ezgif 图片视频处理神器: <https://ezgif.com/>
- 渐变配色: <https://webgradients.com/>
- 在线抠图: <https://www.remove.bg/>
- 新拟态生成: <https://yousiqiexing.com/softui>
- 美叶 UI 参考: <https://www.meiye.art/inspiration>
- 200+免费格式转换: <https://www.alltoall.net/>
- 50 种高质量 SVG 渐变配色案例: <https://svggradients.com/>

## 致谢

- ColorUI: <https://github.com/weilanwl/ColorUI>
- Lin-UI: <https://github.com/TaleLin/lin-ui>
- Vant: <https://github.com/vant-ui/vant-weapp>
- MeiYe: <https://www.meiye.art/inspiration>
- WxminiDemo: <https://gitee.com/susuhhhhhh/wxmini_demo>

## 支持

**如果本项目能为您提供帮助，请给予支持！**

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
