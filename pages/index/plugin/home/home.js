// pages/index/plugin/home/home.js
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
      title: '索引列表',
      des: '索引跳转列表样式',
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
    }, {
      id: 1,
      type: 'image',
      title: '布局UI设计',
      des: 'Flex、Grid及基础样式',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
    }, {
      id: 2,
      type: 'image',
      title: '全屏抽屉',
      des: '侧边展示抽屉',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
    }],
    elementsPlugins: [{
        title: '索引列表',
        name: 'indexes',
        color: 'purple light',
        icon: 'vipcard'
      },
      {
        title: '微动画 ',
        name: 'animation',
        color: 'mauve light',
        icon: 'form'
      },
      {
        title: '全屏抽屉',
        name: 'drawer',
        color: 'pink light',
        icon: 'list'
      },
      {
        title: '垂直导航',
        name: 'verticalnav',
        color: 'brown light',
        icon: 'news'
      },
      {
        title: '聊天',
        name: 'chat',
        color: 'green light',
        icon: 'message'
      },
      {
        title: '瀑布流',
        name: 'waterfall',
        color: 'blue light',
        icon: 'pic'
      },
      {
        title: '卡片翻转',
        name: 'overturn',
        color: 'red light',
        icon: 'camerarotate'
      },
      {
        title: '抽奖',
        name: 'draw',
        color: 'pink light',
        icon: 'present'
      },
      {
        title: '历史搜索',
        name: 'search',
        color: 'mauve light',
        icon: 'search'
      },
      {
        title: '打卡',
        name: 'clockin',
        color: 'cyan light',
        icon: 'mobile'
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    }
  }
})