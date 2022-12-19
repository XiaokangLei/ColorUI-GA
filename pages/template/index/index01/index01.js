// pages/template/index/index01/index01.js
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
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
    }, {
      id: 1,
      type: 'image',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
    }, {
      id: 2,
      type: 'image',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
    }],
    iconList: [{
      icon: 'moneybagfill',
      color: 'blue',
      badge: 0,
      name: '热门推荐'
    }, {
      icon: 'presentfill',
      color: 'red',
      badge: 0,
      name: '附近任务',
      bindtap: "bindZan"
    }, {
      icon: 'formfill',
      color: 'purple',
      badge: 0,
      name: '金牌雇主',
      bindtap: "showResource"
    }, {
      icon: 'shopfill',
      color: 'green',
      badge: 0,
      name: '排行榜',
      bindtap: "bindPoint"
    }],
    newList: [{
      title: "制定同频色板",
      tag: "金牌雇主",
      location: "江北·五里店",
      pay: "60",
      time: "3~5小时",
      tagList: ["高信用", "加急"]
    }, {
      title: "制定同色系色阶",
      tag: "",
      location: "江北·五里店",
      pay: "100",
      time: "24小时",
      tagList: ["高信用", "高报酬"]
    }, {
      title: "UI辅助色彩校正",
      tag: "",
      location: "江北·五里店",
      pay: "5",
      time: "2小时",
      tagList: ["高信用"]
    }]

  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
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