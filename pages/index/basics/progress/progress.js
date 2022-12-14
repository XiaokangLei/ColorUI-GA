// pages/index/basics/progress/progress.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    color: 'red',
    canvasW: 220,
    canvasH: 220,
    data_list: [{
        value: 0
      },
      {
        value: 10
      },
      {
        value: 20
      },
      {
        value: 30
      },
      {
        value: 40
      },
      {
        value: 50
      },
      {
        value: 60
      },
      {
        value: 70
      },
      {
        value: 80
      },
      {
        value: 90
      },
      {
        value: 100
      },
      {
        value: 101
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
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
    // this.drawNew();
    this.getRings()
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

  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },

  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  },
  getRings() {
    this.data.data_list.forEach((item, index) => {
      this.canvasRing = this.selectComponent("#can" + index);
      this.canvasRing.showCanvasRing()
    })

  },
  drawNew(step) {
    const query = wx.createSelectorQuery().in(this);
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec(this.init.bind(this))
  },
  init(res) {
    const canvas = res[0].node
    const ctx = canvas.getContext('2d');
    const dpr = wx.getSystemInfoSync().pixelRatio
    canvas.width = res[0].width * dpr
    canvas.height = res[0].height * dpr
    ctx.scale(dpr, dpr)
    var gradient = ctx.createLinearGradient(200, 100, 100, 200);
    gradient.addColorStop("0", "#a57b5f");
    gradient.addColorStop("0.5", "#cc9ad1");
    gradient.addColorStop("1.0", "#b84e88");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    ctx.stroke();
  }
})