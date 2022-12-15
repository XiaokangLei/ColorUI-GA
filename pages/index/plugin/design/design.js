// pages/index/plugin/design/design.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg_color: 'gradual-pinknew',
    title: '在下方输入标题',
    date: '',
    emoji: app.globalData.emoji,
    checkboxItems: [{
        name: 'red',
        value: 'red'
      },
      {
        name: 'yellow',
        value: 'yellow'
      },
      {
        name: 'olive',
        value: 'olive'
      },
      {
        name: 'blue',
        value: 'blue'
      },
      {
        name: 'cyan',
        value: 'cyan'
      },
      {
        name: 'purple',
        value: 'purple'
      },
      {
        name: 'mauve',
        value: 'mauve'
      },
      {
        name: 'pink',
        value: 'pink'
      }, {
        name: 'red',
        value: 'gradual-red'
      },
      {
        name: 'orange',
        value: 'gradual-orange'
      },
      {
        name: 'green',
        value: 'gradual-green'
      },
      {
        name: 'blue',
        value: 'gradual-blue'
      },
      {
        name: 'cyan',
        value: 'gradual-cyan'
      },
      {
        name: 'purple',
        value: 'gradual-purple'
      },
      {
        name: 'mauve',
        value: 'gradual-pinknew'
      },
      {
        name: 'pink',
        value: 'gradual-pink'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var date = new Date();
    this.setData({
      date: date.toLocaleDateString().replace(new RegExp("/", "gm"), "-")
    })
    try {
      wx.setStorageSync('bg_color', this.data.bg_color)
      wx.setStorageSync('title', this.data.title)
      wx.setStorageSync('date', this.data.date)
      wx.setStorageSync('emoji', this.data.emoji)
      wx.setStorageSync('type', this.data.type)
      wx.setStorageSync('weather', this.data.weather)
    } catch (e) {

    }
    if (options.emoji) {
      this.setData({
        emoji: options.emoji
      })
    }
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
    try {
      wx.setStorageSync('isFrash', false)
      this.setData({
        bg_color: wx.getStorageSync('bg_color'),
        title: wx.getStorageSync('title'),
        date: wx.getStorageSync('date'),
        emoji: wx.getStorageSync('emoji'),
        type: wx.getStorageSync('type'),
        weather: wx.getStorageSync('weather'),
        _id: wx.getStorageSync('_id')
      })
    } catch (e) {
      // Do something when catch error
    }
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
  checkboxChange: function (e) {
    var that = this;
    let checkboxValues = null;
    let checkboxItems = this.data.checkboxItems,
      values = e.detail.value
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      if (checkboxItems[i].value == values[values.length - 1]) {
        checkboxItems[i].checked = true;
        checkboxValues = checkboxItems[i].value;
      } else {
        checkboxItems[i].checked = false;
      }
    }
    that.setData({
      checkboxItems,
      checkboxValues,
      bg_color: checkboxValues
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  jumpPageChoise(e) {
    try {
      wx.setStorageSync('emoji', this.data.emoji)
      wx.setStorageSync('date', this.data.date)
      wx.setStorageSync('title', this.data.title)
      wx.setStorageSync('bg_color', this.data.bg_color)
      wx.setStorageSync('isFrash', true)
    } catch (e) {}
    wx.navigateTo({
      url: `/pages/index/plugin/design/${e.currentTarget.dataset.page}/${e.currentTarget.dataset.page}`,
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
})