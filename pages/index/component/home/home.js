// pages/index/component/home/home.js
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
      title: '操作条',
      des: '顶部、底部操作条',
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
    }, {
      id: 1,
      type: 'image',
      title: '导航栏',
      des: '滑动、静态Tab样式',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
    }, {
      id: 2,
      type: 'image',
      title: '列表',
      des: '宫格列表、菜单列表、消息列表',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
    }],
    elementsComponents: [{
        title: '操作条',
        name: 'bar',
        color: 'purple light',
        icon: 'vipcard'
      },
      {
        title: '导航栏 ',
        name: 'nav',
        color: 'mauve light',
        icon: 'formfill'
      },
      {
        title: '列表',
        name: 'list',
        color: 'pink light',
        icon: 'list'
      },
      {
        title: '卡片',
        name: 'card',
        color: 'brown light',
        icon: 'newsfill'
      },
      {
        title: '表单',
        name: 'form',
        color: 'red light',
        icon: 'formfill'
      },
      {
        title: '时间轴',
        name: 'timeline',
        color: 'orange light',
        icon: 'timefill'
      },
      {
        title: '轮播',
        name: 'swiper',
        color: 'olive light',
        icon: 'album'
      },
      {
        title: '模态框',
        name: 'modal',
        color: 'grey light',
        icon: 'squarecheckfill'
      },
      {
        title: '步骤条',
        name: 'steps',
        color: 'cyan light',
        icon: 'roundcheckfill'
      },
      {
        title: '轻提示',
        name: 'toast',
        color: 'mauve light',
        icon: 'noticefill'
      },
      {
        title: '状态提示',
        name: 'status',
        color: 'pink light',
        icon: 'sort'
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
        icon: 'btn'
      },
      {
        title: '滚动提示',
        name: 'tips',
        color: 'cyan light',
        icon: 'noticefill'
      },
      {
        title: '日历',
        name: 'calendar',
        color: 'green light',
        icon: 'calendar'
      },
      {
        title: '表格',
        name: 'table',
        color: 'purple light',
        icon: 'list'
      },
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