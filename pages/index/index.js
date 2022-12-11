// index.js
Page({
  data: {
    PageCur: 'templates'
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },

  /**
   * 页面跳转
   */
  JumpTo: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.page
    })
  },

  /**
   * 页面分享
   */
  onShareAppMessage() {
    return {
      title: '轻量、可靠的UI模板库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})