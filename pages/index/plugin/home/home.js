// pages/index/plugin/home/home.js
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
        color: 'cyan light',
        icon: 'newsfill'
      }
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

  }
})