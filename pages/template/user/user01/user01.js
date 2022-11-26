// pages/template/user/user01/user01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      icon: 'moneybagfill',
      color: 'blue',
      badge: 0,
      name: '能贝'
    }, {
      icon: 'presentfill',
      color: 'red',
      badge: 0,
      name: '活动',
      bindtap: "bindZan"
    }, {
      icon: 'formfill',
      color: 'purple',
      badge: 0,
      name: '订单',
      bindtap: "showResource"
    }, {
      icon: 'shopfill',
      color: 'green',
      badge: 0,
      name: '投递',
      bindtap: "bindPoint"
    }, {
      icon: 'likefill',
      color: 'red',
      badge: 0,
      name: '关注',
      bindtap: "bindCollect"
    }, {
      icon: 'favorfill',
      color: 'orange',
      badge: 0,
      name: '收藏',
      bindtap: "bindZan"
    }, {
      icon: 'noticefill',
      color: 'cyan',
      badge: 0,
      name: '下载',
      bindtap: "showResource"
    }, {
      icon: 'rankfill',
      color: 'blue',
      badge: 0,
      name: '统计',
      bindtap: "bindPoint"
    }],
    iconOtherList: [{
      icon: 'mail',
      color: 'black',
      badge: 0,
      name: '客服'
    }, {
      icon: 'service',
      color: 'black',
      badge: 0,
      name: '投诉建议',
      bindtap: "bindZan"
    }, {
      icon: 'settings',
      color: 'black',
      badge: 0,
      name: '设置',
      bindtap: "showResource"
    }],

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