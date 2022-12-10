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
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx'
    }, {
      id: 1,
      type: 'image',
      title: '布局UI设计',
      des: 'Flex、Grid及基础样式',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3',
    }, {
      id: 2,
      type: 'image',
      title: '全屏抽屉',
      des: '侧边展示抽屉',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc',
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
        icon: 'formfill'
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
        icon: 'newsfill'
      },
      {
        title: '瀑布流',
        name: 'waterfall',
        color: 'blue light',
        icon: 'newsfill'
      },
      {
        title: '评分',
        name: 'rate',
        color: 'red light',
        icon: 'favorfill'
      },
      {
        title: '手风琴',
        name: 'piano',
        color: 'orange light',
        icon: 'filefill'
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