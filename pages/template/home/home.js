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
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
      page: '/pages/about/about/about'
    }, {
      id: 1,
      type: 'image',
      title: 'ColorUI GA',
      des: '每周上新UI模板设计~',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
      page: '/pages/template/login/home/home'
    }, {
      id: 2,
      type: 'image',
      title: 'ColorUI GA',
      des: 'CSS样式、适合多种平台',
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
      page: '/pages/about/about/about'
    }],
    elements: [{
        title: '首页',
        name: 'index',
        color: 'purple light',
        icon: 'homefill'
      }, {
        title: '个人中心',
        name: 'user',
        color: 'red light',
        icon: 'profilefill'
      },
      {
        title: '用户列表 ',
        name: 'userlist',
        color: 'mauve light',
        icon: 'friendfill'
      },
      {
        title: '评论页',
        name: 'comment',
        color: 'pink light',
        icon: 'communityfill'
      },
      {
        title: '消息列表',
        name: 'message',
        color: 'brown light',
        icon: 'messagefill'
      },
      {
        title: '音乐播放',
        name: 'music',
        color: 'green light',
        icon: 'musicfill'
      },
      {
        title: '书籍学习',
        name: 'education',
        color: 'orange light',
        icon: 'formfill'
      },
      {
        title: '登录注册',
        name: 'login',
        color: 'blue light',
        icon: 'myfill'
      },
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
      title: "ColorUI GA 最新版v2.0.9上线啦~"
    }, {
      id: 2,
      title: "新增日历农历、常用公司logo图标"
    }, {
      id: 3,
      title: "新增书籍学习模板+2"
    }, {
      id: 4,
      title: "新增登录注册模板+2"
    }, {
      id: 5,
      title: "每周上新UI模板设计~"
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
    // 轮播图跳转
    jumpTo(e) {
      return wx.navigateTo({
        url: e.currentTarget.dataset.page
      })
    }
  }
})