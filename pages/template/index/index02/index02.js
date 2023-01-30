// pages/template/index/index02/index02.js
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
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
    }, {
      id: 1,
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
    }, {
      id: 2,
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
    }],
    iconList: [{
      icon: 'moneybagfill',
      color: 'blue',
      badge: 0,
      name: '每日简报'
    }, {
      icon: 'presentfill',
      color: 'yellow',
      badge: 0,
      name: '小知识',
      bindtap: "bindZan"
    }, {
      icon: 'formfill',
      color: 'pink',
      badge: 0,
      name: '政策补贴',
      bindtap: "showResource"
    }, {
      icon: 'shopfill',
      color: 'purple',
      badge: 0,
      name: '直播',
      bindtap: "bindPoint"
    }, {
      icon: 'discoverfill',
      color: 'green',
      badge: 0,
      name: '专题活动',
      bindtap: "bindPoint"
    }],
    TabCur: 0,
    scrollLeft: 0,
    tabList: [{
      id: 0,
      name: '关注'
    }, {
      id: 1,
      name: '推荐'
    }, {
      id: 2,
      name: '原创'
    }, {
      id: 3,
      name: '新闻'
    }, {
      id: 4,
      name: '视频'
    }, {
      id: 5,
      name: '评测'
    }]

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

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})