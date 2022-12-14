// pages/index/plugin/draw/draw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remian_num: 5, //剩余抽奖的次数
    prize_list: [{
        icon: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
        name: '钻石会员',
        active: false
      },
      {
        icon: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
        name: '谢谢惠顾',
        active: false,
      },
      {
        icon: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
        name: '10元话费',
        active: false,
      },
      {
        icon: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1',
        name: '20元话费',
        active: false,
      },
      {
        icon: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1',
        name: '50元话费',
        active: false,
      },
      {
        icon: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
        name: '黄金会员',
        active: false,
      },
      {
        icon: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
        name: '铂金会员',
        active: false,
      },
      {
        icon: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
        name: '白银会员',
        active: false,
      },
    ],
    lock: false, //防止重复点击
    prizeListIndex: [0, 1, 2, 4, 7, 6, 5, 3], //抽奖顺序的索引
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
  // 禁止弹框底层滑动
  catchTouchMove: function () {
    return false;
  },
  // 范围随机数
  randomRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  },
  // 抽奖活动
  lottery() {
    // 防止重复点击
    if (this.data.lock) return
    this.setData({
      lock: true
    })
    this.luckChose(this.randomRange(0, 7)).then(e => {
      wx.showToast({
        title: '成抽中了' + e[0].name,
        icon: 'none'
      })
    })
  },
  // 抽奖动画
  Timer: null,
  LotteryEnd: false, //抽奖结束
  nowRunIndex: 0, //ative样式的索引，
  luckChose(luckIndex) {
    return new Promise((resolve, reject) => {
      // console.log("中奖索引>>>", luckIndex)
      let that = this
      let maxTime = this.randomRange(2500, 4000) //抽奖的时间2.5s-4s之间
      // console.log(maxTime)
      let rI = 0.01
      // console.log(this.nowRunIndex)
      if (this.nowRunIndex == 0) { //初始化从索引0开始显示抽奖激活的边框
        this.setData({
          'prize_list[0].active': true
        })
      }

      function runAni(_t) {
        that.Timer = setTimeout(() => {
          let list = that.data.prize_list;
          ++that.nowRunIndex;
          that.nowRunIndex >= that.data.prizeListIndex.length ? that.nowRunIndex = 0 : '';
          // console.log(that.nowRunIndex >= that.data.prizeListIndex.length)
          // console.log(that.nowRunIndex)
          let Pindex = that.data.prizeListIndex[that.nowRunIndex];
          list.map((item, index) => {
            item.active = Pindex == index;
          })
          that.setData({
            prize_list: list
          })
          // console.log(that.LotteryEnd)
          // console.log(luckIndex == that.nowRunIndex)
          if (that.LotteryEnd && luckIndex == that.nowRunIndex) {
            clearTimeout(that.Timer);
            that.LotteryEnd = false;
            that.setData({
              lock: false
            })
            resolve(list.filter(v => {
              return v.active
            }))
          } else {
            rI += 0.5;
            runAni(_t + (rI));
          }
        }, _t);
      }
      runAni(80);
      setTimeout(() => {
        this.LotteryEnd = true;
      }, maxTime);
    })
  },
})