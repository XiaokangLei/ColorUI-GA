// pages/index/basics/button/design.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    color: 'blue'
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

  SetRound(e) {
    this.setData({
      round: e.detail.value
    })
  },

  SetSize(e) {
    this.setData({
      size: e.detail.value
    })
  },

  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },

  SetShadow(e) {
    this.setData({
      shadow: e.detail.value
    })
  },

  SetBorder(e) {
    this.setData({
      border: e.detail.value
    })
    if (!e.detail.value) {
      this.setData({
        bordersize: false
      })
    }
  },

  SetBorderSize(e) {
    this.setData({
      bordersize: e.detail.value
    })
  },

})