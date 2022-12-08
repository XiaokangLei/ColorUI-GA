// pages/index/component/home/home.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P'
    }, {
      id: 1,
      type: 'image',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3',
    }, {
      id: 2,
      type: 'image',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc',
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
        title: '聊天',
        name: 'chat',
        color: 'green light',
        icon: 'messagefill'
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
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

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
  },
})