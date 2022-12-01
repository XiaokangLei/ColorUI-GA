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
   * 点击文章明细
   */
  JumpTo: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.page
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-GA高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})