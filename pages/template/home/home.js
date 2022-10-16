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
      url: '/images/45fc.png'
    }, {
      id: 1,
      type: 'image',
      url: '/images/45fc.png',
    }, {
      id: 2,
      type: 'image',
      url: '/images/45fc.png'
    }],
    elements: [{
        title: '个人中心',
        name: 'background',
        color: 'blue light',
        icon: 'colorlens'
      },
      {
        title: '启动页',
        name: 'text',
        color: 'purple light',
        icon: 'font'
      },
      {
        title: '评论页 ',
        name: 'icon',
        color: 'mauve light',
        icon: 'icon'
      },
      {
        title: '消息列表',
        name: 'button',
        color: 'pink light',
        icon: 'btn'
      },
      {
        title: '阅读听书',
        name: 'tag',
        color: 'brown light',
        icon: 'tagfill'
      },
      {
        title: '电商购物',
        name: 'avatar',
        color: 'red light',
        icon: 'myfill'
      },
      {
        title: '旅行住宿',
        name: 'progress',
        color: 'orange light',
        icon: 'icloading'
      },
      {
        title: '运动健身',
        name: 'shadow',
        color: 'olive light',
        icon: 'copy'
      },
      {
        title: '新闻资讯',
        name: 'loading',
        color: 'green light',
        icon: 'loading2'
      },
      {
        title: '教育学习',
        name: 'shadow',
        color: 'blue light',
        icon: 'brand'
      },
      {
        title: '医疗健康',
        name: 'emoji',
        color: 'pink light',
        icon: 'creative'
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    }
  }
})