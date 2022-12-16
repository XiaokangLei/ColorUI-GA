// pages/index/component/toast/toast.js
let loading = false;
let loadingTop = false;
const animation = wx.createAnimation({
  duration: 400,
  timingFunction: 'ease-out',
  delay: 0,
  transformOrigin: '50% 50% 0'
}); //动画

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    status: '',
    message: '',
    time: 0,
    showTop: false,
    statusTop: '',
    messageTop: '',
    timeTop: 2000
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
   * 轻提示展示
   * @param {*} status 
   * @param {*} message 
   * @param {*} time 
   * @param {*} fun 
   */
  setShow(status, message, time = 2000, fun = false) {
    if (loading) {
      return
    }
    loading = true;
    try {
      this.setData({
        status,
        message,
        time,
        show: true,
      })
      setTimeout(() => {
        this.setData({
          show: false,
        })
        loading = false;
        // 触发回调函数
        if (fun) {
          this.end()
        }
      }, time)
    } catch {
      loading = false;
    }
  },

  /**
   * 轻提示弹出样式1-4
   */
  click1() {
    this.setShow("success", "提交成功，我们将在1个工作日内通知您");
  },
  click2() {
    this.setShow("error", "提交失败");
  },
  click3() {
    this.setShow("success", "停留时间5秒", 5000);
  },
  click4() {
    this.setShow("success", "提交成功，我们将在1个工作日内通知您", 3000, true);
  },

  /**
   * 轻提示回调函数
   */
  end() {
    wx.showToast({
      title: '触发回调方法',
    })
  },

  /**
   * 顶部弹出【成功】
   */
  click5() {
    this.setShowTop("success", "提交成功，我们将在1个工作日内通知您");
  },

  /**
   * 顶部弹出【失败】
   */
  click6() {
    this.setShowTop("error", "提交失败");
  },

  /**
   * 顶部弹出
   * @param {*} statusTop 
   * @param {*} messageTop 
   * @param {*} timeTop 
   */
  setShowTop(statusTop, messageTop, timeTop = 3000) {
    if (loadingTop) {
      return
    }
    loadingTop = true;
    try {
      this.setData({
        statusTop,
        messageTop,
        timeTop,
        showTop: true,
      })
      this.start_animation();
      setTimeout(() => {
        this.end_animation();
        loadingTop = false;
        this.triggerEvent("end")
      }, timeTop)
    } catch {
      loadingTop = false;
    }
  },

  /**
   * 顶部弹出动画
   */
  start_animation() {
    animation.height('80rpx').step()
    this.setData({
      animation: animation.export(),
    })
  },
  end_animation() {
    animation.height('0rpx').step()
    this.setData({
      animation: animation.export()
    })
  },
})