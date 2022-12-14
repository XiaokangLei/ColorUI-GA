// pages/index/plugin/rate/rate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 5,
    active: 0,
    score: 1,
    count_muti: 8,
    active_muti: 0,
    score_muti: 1
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

  /**
   * 点击评分
   */
  click(e) {
    const {
      score,
      count
    } = this.data;
    const active = e.currentTarget.dataset.index;
    this.setData({
      active
    })
    this.triggerEvent("click", {
      result: score / count * active
    }, {})
  },

  /**
   * 点击评分
   */
  click_muti(e) {
    const {
      score_muti,
      count_muti
    } = this.data;
    const active_muti = e.currentTarget.dataset.index;
    this.setData({
      active_muti
    })
    this.triggerEvent("click_muti", {
      result: score_muti / count_muti * active_muti
    }, {})
  }
})