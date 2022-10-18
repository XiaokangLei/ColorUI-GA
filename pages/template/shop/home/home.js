// pages/template/shop/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    current: 0,
    lines: 0,
    swiperlist: [{
      id: 0,
      url: 'https://image.meiye.art/pic_16313377820535zgaaRBF9NhjxJcA8bZML?imageMogr2/thumbnail/450x/interlace/1',
      type: 1
    }, {
      id: 1,
      url: 'https://image.meiye.art/pic_1631337782042olyfk9eUv_L-Zi6I73BZu?imageMogr2/thumbnail/450x/interlace/1',
      type: 2

    }, {
      id: 2,
      url: 'https://image.meiye.art/pic_1631337782022cy8Y_XJWrmp58FOlyPgxy?imageMogr2/thumbnail/450x/interlace/1',
      type: 3
    }, {
      id: 3,
      url: 'https://image.meiye.art/pic_16313377820487PUB9WVBRHPtX-PBiztqu?imageMogr2/thumbnail/450x/interlace/1',
      type: 4
    }],
    iconList: [{
      id: 1,
      icon: 'questionfill',
      color: 'red',
      name: '好处',
      type: 1
    }, {
      id: 2,
      icon: 'group_fill',
      color: 'orange',
      name: '加入',
      type: 2
    }, {
      id: 3,
      icon: 'shopfill',
      color: 'yellow',
      name: '经营',
      type: 1
    }, {
      id: 4,
      icon: 'discoverfill',
      color: 'olive',
      name: '收益',
      type: 1
    }],
    Headlines: [{
      id: 1,
      title: "2号商品火热进行中",
      type: 1
    }, {
      id: 2,
      title: "2号商品折扣优化",
      type: 2
    }, {
      id: 3,
      title: "3号商品半价甩卖",
      type: 3
    }, {
      id: 4,
      title: "4号商品买一赠三",
      type: 4
    }],
    videosrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          wx.redirectTo({
            url: '/pages/auth/auth'
          })
        }
      }
    });
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
  swiperchange: function (e) {
    this.setData({
      current: e.detail.current
    });
  },
  swipclick: function (e) {
    let that = this;
    var swip = that.data.swiperlist[that.data.current];
    console.log(swip);
    if (swip.type === 1) {
      wx.navigateTo({
        url: '/pages/home/doc/index?id=' + swip.id
      });
    }
  },
  lineschange: function (e) {
    this.setData({
      lines: e.detail.current
    });
  },
  linesclick: function (e) {
    let that = this;
    var swip = that.data.Headlines[that.data.current];
    console.log(swip);
    if (swip.type === 1) {
      wx.navigateTo({
        url: '/pages/home/doc/index?id=' + swip.id
      });
    }
  },
  itemckcred: function (e) {
    let that = this;
    var item = e.currentTarget.dataset;
    console.log(item.index, item.itemtype)
    if (item.itemtype === 1) {
      wx.navigateTo({
        url: '/pages/home/doc/index?id=' + item.index
      });
    }
    if (item.itemtype === 2) {
      wx.navigateTo({
        url: '/pages/home/joinus/index?id=' + item.index
      });
    }
  },
  search: function () {
    wx.navigateTo({
      url: '/pages/home/search/index'
    });
  }
})