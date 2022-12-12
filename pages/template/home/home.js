// pages/template/home/home.js
const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      title: 'ColorUI GA',
      des: '轻量、可靠的UI组件库',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
    }, {
      id: 1,
      type: 'image',
      title: 'ColorUI GA',
      des: '丰富的免费UI模板库',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
    }, {
      id: 2,
      type: 'image',
      title: 'ColorUI GA',
      des: 'CSS样式、适合多种平台',
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
    }],
    elements: [{
        title: '首页',
        name: 'index',
        color: 'purple light',
        icon: 'font'
      }, {
        title: '个人中心',
        name: 'user',
        color: 'red light',
        icon: 'colorlens'
      },
      {
        title: '用户列表 ',
        name: 'userlist',
        color: 'mauve light',
        icon: 'icon'
      },
      {
        title: '评论页',
        name: 'comment',
        color: 'pink light',
        icon: 'btn'
      },
      {
        title: '消息列表',
        name: 'message',
        color: 'brown light',
        icon: 'commentfill'
      },
      {
        title: '音乐播放',
        name: 'music',
        color: 'green light',
        icon: 'myfill'
      },
      // {
      //   title: '旅行住宿',
      //   name: 'progress',
      //   color: 'orange light',
      //   icon: 'icloading'
      // },
      // {
      //   title: '运动健身',
      //   name: 'shadow',
      //   color: 'olive light',
      //   icon: 'copy'
      // },
      // {
      //   title: '新闻资讯',
      //   name: 'loading',
      //   color: 'green light',
      //   icon: 'loading2'
      // },
      // {
      //   title: '教育学习',
      //   name: 'shadow',
      //   color: 'blue light',
      //   icon: 'brand'
      // },
      // {
      //   title: '医疗健康',
      //   name: 'emoji',
      //   color: 'pink light',
      //   icon: 'creative'
      // },
    ],
    Headlines: [{
      id: 1,
      title: "ColorUI GA 最新版v2.0.6上线啦~"
    }, {
      id: 2,
      title: "新增6种UI模板库、瀑布流样式"
    }, {
      id: 3,
      title: "新增全新纯色、渐变色背景色"
    }, {
      id: 4,
      title: "新增Tips提示、常规轮播图样式"
    }],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
  }
})