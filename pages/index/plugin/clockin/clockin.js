// pages/index/plugin/clockin/clockin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_time: '',
    current_address: '北京朝阳三里屯店',
    status: 0, //0---》上班未打卡 1----》上班已打卡 2-----下班未打卡》
    now_time_stop: '', //已打卡时间
    now_time_stop_end: '', //下班已打卡时间
    animationData: '', //打卡动画栈
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCurrentTime();
    this.getUserLocation();
    this.setData({
      now_time: this.getTime()
    })
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
  // 上班打卡
  clockInStart() {
    wx.vibrateLong(); //使手机震动400m
    let animationData = wx.createAnimation({
      timingFunction: 'ease-in',
      duration: 1000
    })
    animationData.rotateY(180).step();
    // 导出动画栈
    this.setData({
      animationData: animationData.export(),
    }, setTimeout(() => {
      this.setData({
        status: 1, //上班已打卡
        now_time_stop: this.data.now_time
      }, setTimeout(() => {
        this.setData({
          status: 2
        })
      }, 3000))
    }, 1000))


  },
  // 下班打卡
  clockInEnd() {
    this.setData({
      status: 3, //上班已打卡
      now_time_stop_end: this.data.now_time
    })
  },
  getCurrentTime: function () {
    var time = setInterval(() => {
      this.setData({
        now_time: this.getTime()
      })
    }, 1000)
  },
  getTime() {
    let dateTime = '';
    let hh = new Date().getHours()
    let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
      new Date().getMinutes()
    let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :
      new Date().getSeconds()
    dateTime = hh + ':' + mf + ':' + ss;
    return dateTime;
  },

  // 获取当前的地址
  getUserLocation: function () {
    let that = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      //再次授权，调用wx.getLocation的API
                      that.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          that.getLocation();
        } else {
          that.getLocation();
        }
      }
    })
  },
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude;
        //  调用腾讯地图sdk获取到当前的地址
      }
    })
  },
})