// pages/template/news/news02/news02.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    TabCur: 3,
    scrollLeft: 0,
    tabList: [{
      id: 0,
      name: '首页'
    }, {
      id: 1,
      name: '关注'
    }, {
      id: 2,
      name: '作品'
    }, {
      id: 3,
      name: '经验'
    }],
    newsList: [{
      "title": "矢量插画师：通过摄影作品学习建筑的空间语言",
      "user": "飞屋瑞",
      "date": "2019-05-12",
      "collection": 97,
      "url": "https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"
    }, {
      "title": "微信大改版之UI设计分析！分析点啥？",
      "user": "moxiao",
      "date": "2019-05-12",
      "collection": 21,
      "url": "https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1"
    }, {
      "title": "如何合理创建间距系统，来更快地实现设计方案？",
      "user": "毒眸",
      "date": "2019-05-12",
      "collection": 17,
      "url": "https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1"
    }, {
      "title": "百度如何成为小程序生态的最大变量？",
      "user": "罗超频道",
      "date": "2019-05-12",
      "collection": 23,
      "url": "https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"
    }, ]
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