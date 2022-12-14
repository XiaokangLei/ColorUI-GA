// pages/index/plugin/tips/tips.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Headlines: [{
      id: 0,
      title: "ColorUI GA 最新版v2.0.6上线啦~",
      url: '/pages/about/about/about'
    }, {
      id: 1,
      title: "新增6种UI模板库、瀑布流样式",
      url: '/pages/about/about/about'
    }],
    list: [{
        create_time: "2021-1-1 12:00",
        prize_name: "一等奖"
      },
      {
        create_time: "2021-1-1 12:00",
        prize_name: "三等奖"
      }, {
        create_time: "2021-1-1 12:00",
        prize_name: "二等奖"
      },
      {
        create_time: "2021-1-1 12:00",
        prize_name: "四等奖"
      },
      {
        create_time: "2021-1-1 12:00",
        prize_name: "五等奖"
      },
      {
        create_time: "2021-1-1 12:00",
        prize_name: "参与奖"
      }, {
        create_time: "2021-1-1 12:00",
        prize_name: "会员卡"
      },
      {
        create_time: "2021-1-1 12:00",
        prize_name: "优惠券"
      },
    ]
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
   * 点击跳转
   * @param {*} e 
   */
  linesclick: function (e) {
    var swip = e.currentTarget.dataset
    console.log(swip);
    wx.navigateTo({
      url: swip.url
    });
  },
})