// pages/template/user/user02/user02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      icon: 'moneybagfill',
      color: 'blue',
      badge: 0,
      name: '待接单'
    }, {
      icon: 'presentfill',
      color: 'red',
      badge: 0,
      name: '待上门',
      bindtap: "bindZan"
    }, {
      icon: 'formfill',
      color: 'purple',
      badge: 11,
      name: '待评价',
      bindtap: "showResource"
    }, {
      icon: 'shopfill',
      color: 'green',
      badge: 0,
      name: '返修/售后',
      bindtap: "bindPoint"
    }],
    iconOtherList: [{
      icon: 'location',
      color: 'blue',
      badge: 0,
      name: '地址管理'
    }, {
      icon: 'service',
      color: 'blue',
      badge: 0,
      name: '电话客服',
      bindtap: "bindZan"
    }, {
      icon: 'mark',
      color: 'blue',
      badge: 0,
      name: '在线客服',
      bindtap: "showResource"
    }, {
      icon: 'mail',
      color: 'blue',
      badge: 0,
      name: '投诉',
      bindtap: "bindCollect"
    }, {
      icon: 'settings',
      color: 'blue',
      badge: 0,
      name: '设置',
      bindtap: "bindZan"
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