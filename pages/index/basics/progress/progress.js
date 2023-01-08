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
        value: 0,
        lineColor: 'red',
        lineWidth: 2
      },
      {
        value: 10,
        lineColor: 'red',
        lineWidth: 2
      },
      {
        value: 20,
        lineColor: 'red',
        lineWidth: 2
      },
      {
        value: 30,
        lineColor: 'red',
        lineWidth: 3
      },
      {
        value: 40,
        lineColor: 'green',
        lineWidth: 3
      },
      {
        value: 50,
        lineColor: 'green',
        lineWidth: 3
      },
      {
        value: 60,
        lineColor: 'green',
        lineWidth: 3
      },
      {
        value: 70,
        lineColor: 'green',
        lineWidth: 4
      },
      {
        value: 80,
        lineColor: '#37c0fe',
        lineWidth: 4
      },
      {
        value: 90,
        lineColor: '#37c0fe',
        lineWidth: 4
      },
      {
        value: 100,
        lineColor: '#37c0fe',
        lineWidth: 4
      },
      {
        value: 101,
        lineColor: '#37c0fe',
        lineWidth: 5
      },
    ],
    // 环形进度条参数
    circleDiam: 80, // 圆环直径
    cententDiam: 70, // 中心圆直径
    bgColor: '#e9e9e9',
    curColor: 'linear-gradient(#7affaf, #7a88ff)',
    value: 70
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
    }, 500);
    this.rotateCircle(that.data.value);
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
  },
  // 环形进度条
  rotateCircle(value) {
    let rotateLeft = '';
    let rotateRight = '';
    let backgroundRight = '';
    let durationLeft = '0s';
    let durationRight = '0s';

    if (value >= 50) {
      rotateLeft = `rotate(${((value - 50) / 100) * 360}deg)`;
      rotateRight = `rotate(0deg)`;
      backgroundRight = 'inherit';
      durationLeft = '0.25s';
      durationRight = '0s';
    } else {
      rotateLeft = 'rotate(0deg)';
      rotateRight = `rotate(${(value / 100) * 360}deg)`;
      backgroundRight = this.data.bgColor;
      durationLeft = '0';
      durationRight = '0.25s';
      if (this.oldValue >= 50) {
        durationRight = '0s';
      }
    }
    // 记录上次的值
    this.oldValue = value;
    this.setData({
      rotateLeft,
      rotateRight,
      backgroundRight,
      durationLeft,
      durationRight
    });
  }
})