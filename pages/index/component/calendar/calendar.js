// pages/index/plugin/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: 0,
    month: 0,
    today: 0,
    space: 0,
    week: "",
    dateString: "",
    spot: ['2021/11/6', '2020/8/9', '2020/8/20', '2020/9/12']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNowTime();
    this.getSpace();
    this.createDay();
    this.emit();
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

  getNowTime() {
    const time = new Date();
    this.setData({
      year: time.getFullYear(),
      month: time.getMonth() + 1,
      today: time.getDate(),
      week: time.getDay()
    })
  },
  createDay() {
    let day = [];
    let time = new Date();
    time.setMonth(this.data.month);
    time.setDate(0);
    let len = time.getDate();
    for (let i = 1; i <= len; i++) {
      day.push(i);
    }
    this.setData({
      day
    })
  },
  getSpace() {
    let time = new Date(this.data.year, this.data.month - 1, 1);
    time = new Date(time.setDate(0))
    const space = time.getDay();
    this.setData({
      space
    })
  },
  next() {
    let month = this.data.month;
    if (month == 12) {
      this.setData({
        year: this.data.year + 1,
        month: 1
      })
    } else {
      this.setData({
        month: month + 1
      })
    }
    this.getSpace();
    this.createDay();
    this.check();
    // this.emit();
  },
  // 今月选择31，下月只有30，那么选择的today更改为30
  check() {
    let {
      today,
      year,
      month
    } = this.data;
    const time = new Date(year, month, 0);
    let maxDay = time.getDate()
    if (today > maxDay) {
      this.setData({
        today: maxDay
      })
    }
  },
  last() {
    let month = this.data.month;
    if (month == 1) {
      this.setData({
        year: this.data.year - 1,
        month: 12
      })
    } else {
      this.setData({
        month: month - 1
      })
    }
    this.getSpace();
    this.createDay();
    this.check();
    // this.emit();
  },
  /**
   * 点击日期
   * @param {*} e 
   */
  click(e) {
    // 显示
    let today = e.currentTarget.dataset.today;
    this.setData({
      today
    })
    this.emit();
  },
  emit() {
    // 传递给父组件
    let {
      year,
      month,
      today
    } = this.data;
    let time = new Date(year, month - 1, today);
    let week = time.getDay();
    week = this.formatWeek(week)
    this.setData({
      year,
      month,
      today,
      week
    })
  },
  formatWeek(data) {
    switch (data) {
      case 1:
        return '一';
      case 2:
        return '二';
      case 3:
        return '三';
      case 4:
        return '四';
      case 5:
        return '五';
      case 6:
        return '六';
      case 0:
        return '七';
    }
  },
  setShow() {
    this.setData({
      show: true
    })
  },
  hideModal(e) {
    this.setData({
      show: false
    })
  },
  dateChange(e) {
    this.setData({
      dateString: e.detail.dateString
    })
  },
})