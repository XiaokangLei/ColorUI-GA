// pages/index/component/stepper/stepper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    numberInput: 0,
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
   * 减少
   */
  decrease() {
    let that = this
    let number = that.data.number - 1
    if (number < 0) {
      number = 0
    }
    that.setData({
      number: number
    })
  },
  /**
   * 减少
   */
  increase(){
    let that = this
    let number = that.data.number + 1
    that.setData({
      number: number
    })
  },
  onInput(e){
    let that = this
    let numberInput = e.detail.value
    that.setData({
      numberInput: numberInput
    })
  },
  /**
   * 减少
   */
  inputDecrease() {
    let that = this
    let numberInput = parseInt(that.data.numberInput) - 1
    if (numberInput < 0) {
      numberInput = 0
    }
    that.setData({
      numberInput: numberInput
    })
  },
  /**
   * 增加
   */
  inputIncrease(){
    let that = this
    let numberInput = parseInt(that.data.numberInput) + 1
    that.setData({
      numberInput: numberInput
    })
  },
})