// pages/template/uitemplate/home/home.js

let loading = false;
let loadingTop = false;
const animation = wx.createAnimation({
  duration: 400,
  timingFunction: 'ease-out',
  delay: 0,
  transformOrigin: '50% 50% 0'
}); //动画
let rewardedVideoAd = null

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
    // 延时初始化广告组件
    setTimeout(() => {
      this.initVideo()
    }, 300);
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

  // 轮播图跳转
  jumpTo(e) {
    return wx.navigateTo({
      url: e.currentTarget.dataset.page
    })
  },

  /**
   * 复制内容到剪切板
   */
  CopyText(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {},
      complete: res => {
        wx.hideToast()
      }
    })
  },

  /**
   * 获取视频
   */
  bindVideo(e) {
    this.setData({
      modalName: null
    })
    rewardedVideoAd.onLoad(() => {
      console.log('激励视频 广告加载成功')
    })

    rewardedVideoAd.show()
      .then(() => console.log('激励视频 广告显示'))

    rewardedVideoAd.onClose(res => {
      // 用户点击了【关闭广告】按钮
      if (res && res.isEnded) {
        // 正常播放结束，可以下发游戏奖励
        console.log('正常播放结束，可以下发游戏奖励')
        // this.CopyText(e)
        this.click3(e)
      } else {
        // 播放中途退出，不下发游戏奖励
        console.log('播放中途退出，不下发游戏奖励')
      }
    })
  },

  /**
   * 初始化广告组件
   */
  initVideo() {
    if (wx.createRewardedVideoAd) {
      rewardedVideoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-ecd9bb8eb3d6e4ac'
      })
      // rewardedVideoAd.onLoad(() => {
      //   console.log('onLoad event emit')
      // })
      rewardedVideoAd.onError((err) => {
        console.log('onError event emit', err)
      })
      // rewardedVideoAd.onClose((res) => {
      //   console.log('onClose event emit', res)
      // })
    }
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

  /**
   * 轻提示展示
   * @param {*} status 
   * @param {*} message 
   * @param {*} time 
   * @param {*} fun 
   */
  setShow(status, message, time = 2000, e, fun = false) {
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
        this.CopyText(e)
        // 触发回调函数
        if (fun) {
          this.end()
        }
      }, time)
    } catch {
      loading = false;
    }
  },

  click3(e) {
    this.setShow("success", "链接已复制到剪切板，请粘贴到浏览器查看", 4000, e);
  },

  /**
   * 轻提示回调函数
   */
  end() {
    wx.showToast({
      title: '触发回调方法',
    })
  },

})