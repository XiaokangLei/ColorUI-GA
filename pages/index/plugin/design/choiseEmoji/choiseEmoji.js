// pages/index/plugin/design/choiseEmoji/choiseEmoji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emojiNum: 1,
    iconList: [{
        emoji: '❤️'
      }, {
        emoji: '✨'
      }, {
        emoji: '😗'
      },
      {
        emoji: '😀'
      }, {
        emoji: '😄'
      }, {
        emoji: '😆'
      }, {
        emoji: '🤣'
      }, {
        emoji: '🙃'
      }, {
        emoji: '🥰'
      }, {
        emoji: '😍'
      }, {
        emoji: '🤩'
      }, {
        emoji: '😘'
      }, {
        emoji: '😙'
      }, {
        emoji: '😋'
      }, {
        emoji: '😛'
      }, {
        emoji: '😜'
      }, {
        emoji: '😝'
      }, {
        emoji: '🤫'
      }, {
        emoji: '😑'
      }, {
        emoji: '🙄'
      }, {
        emoji: '😔'
      }, {
        emoji: '😪'
      }, {
        emoji: '😕'
      }, {
        emoji: '☹️'
      }, {
        emoji: '😮'
      }, {
        emoji: '😰'
      }, {
        emoji: '😓'
      }, {
        emoji: '😩'
      }, {
        emoji: '😤'
      }, {
        emoji: '😡'
      }, {
        emoji: '😈'
      }, {
        emoji: '💀'
      }, {
        emoji: '🤡'
      }, {
        emoji: '👻'
      }, {
        emoji: '👋'
      }, {
        emoji: '🖐️'
      }, {
        emoji: '👌'
      }, {
        emoji: '👈'
      }, {
        emoji: '👉'
      }, {
        emoji: '🤙'
      }, {
        emoji: '🙏'
      }, {
        emoji: '🤳'
      }, {
        emoji: '💅'
      }, {
        emoji: '👃'
      }, {
        emoji: '👂'
      }, {
        emoji: '👀'
      }, {
        emoji: '👁️'
      }, {
        emoji: '👶'
      }, {
        emoji: '👧'
      }, {
        emoji: '👨‍🦳'
      }, {
        emoji: '🙍'
      }, {
        emoji: '🙅'
      }, {
        emoji: '💁'
      }, {
        emoji: '🙇'
      }, {
        emoji: '👩‍🍳'
      }, {
        emoji: '🧙'
      }, {
        emoji: '🚶'
      }, {
        emoji: '🧑‍🤝‍🧑'
      }, {
        emoji: '👫'
      }, {
        emoji: '💏'
      }, {
        emoji: '👪'
      }, {
        emoji: '👨‍👩‍👧‍👦'
      }, {
        emoji: '🌂'
      }, {
        emoji: '🎃'
      },
      {
        emoji: '🌈'
      }
    ],
    gridCol: 5,
    emoji: '😍'
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
  emojiChange(e) {
    this.setData({
      emoji: e.currentTarget.dataset.value
    })
  },
  jumpPage(e) {
    wx.setStorage({
      key: "emoji",
      data: e.currentTarget.dataset.emoji,
      success: function () {
        wx.navigateBack(); //返回上一个页面
      }
    })
  },
})