// pages/about/home/home.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    templateCount: 0,
    usersCount: 0,
    modelTotal: 0,
    visitTotal: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
    CopyText(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '链接已复制',
            duration: 1000,
          })
        }
      })
    },
    toPage(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
  },

  attached() {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();

    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            templateCount: i,
            usersCount: i,
            modelTotal: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          templateCount: that.coutNum(16),
          usersCount: that.coutNum(1306),
          modelTotal: that.coutNum(46),
          visitTotal: that.coutNum(2264),
        })
      }
    }
    wx.hideLoading()
  },
})