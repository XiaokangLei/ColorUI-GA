// pages/template/news/news01/news01.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
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
      name: '热榜'
    }, {
      id: 3,
      name: '快讯'
    }, {
      id: 4,
      name: '视频'
    }, {
      id: 5,
      name: '科技'
    }],
    swiperList: [{
      title: '腾讯Q1财报',
      des: '腾讯Q1营收净利润超预期，微信月活破11亿',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
    }, {
      title: '腾讯Q1财报',
      des: '腾讯Q1营收净利润超预期，微信月活破11亿',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
    }, {
      title: '腾讯Q1财报',
      des: '腾讯Q1营收净利润超预期，微信月活破11亿',
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
    }],
    newsList: [{
      "title": "抖音的增长烦恼：用户并不是越多越好",
      "user": "混沌大学",
      "date": "2019-05-12",
      "collection": 97,
      "url": "https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"
    }, {
      "title": "每天忙成狗却赚钱一丢丢，这是中产阶级吗？",
      "user": "造就",
      "date": "2019-05-12",
      "collection": 21,
      "url": "https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1"
    }, {
      "title": "对话爱奇艺创始人、CEO龚宇：付费会员还有极大的想象空间",
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