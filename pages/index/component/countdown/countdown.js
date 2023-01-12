// pages/index/component/countdown/countdown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_time: '', //活动剩余时间的秒数
    timer: '', //倒计时定时器
    left_time_list: [], //剩余秒数转换 天，小时 分 秒
    left_time_list_date: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getLeftTime('2023/08/03 11:20:00')
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
    if (this.data.timer) {
      console.log('销毁计时器')
      clearInterval(this.data.timer)
    }
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
   * 定时器，计算剩下时间
   * @param {*} end_time 
   */
  getLeftTime(end_time) {
    let left_time = this.getTimestap(end_time);
    this.initDate(left_time)
    this.data.timer = setInterval(() => {
      if (left_time-- === 0) {
        this.setData({
          left_time: 0,
          left_time_list: this.formatSeconds(0)
        })
        clearInterval(this.data.timer)
      } else {
        this.initDate(left_time)
      }
    }, 1000);
  },
  /**
   * 初始化数据
   */
  initDate(e) {
    let left_time_list = this.formatSeconds(e),
      left_time_list_date = this.formatDate(JSON.stringify(left_time_list));
    this.setData({
      left_time: e,
      left_time_list,
      left_time_list_date
    })
  },
  /**
   * 获取指定时间-当前时间的秒数
   * @param {*} end_time 
   */
  getTimestap(end_time) {
    // 当前时间
    var currentTime = parseInt(new Date().getTime() / 1000);
    // 未来时间
    var futureTime = parseInt(new Date(end_time.replace(/-/g, '/')).getTime() / 1000); //ios无法解析
    return futureTime <= currentTime ? 0 : futureTime - currentTime;
  },
  /**
   * 毫秒-天-时-分-秒
   * @param {*} value 
   */
  formatSeconds(value) {
    let time = [],
      day = parseInt(value / 86400),
      hour = parseInt((value % 86400) / 3600),
      min = parseInt(((value % 86400) % 3600) / 60),
      sec = parseInt(((value % 86400) % 3600) % 60);
    time[0] = day > 0 ? this.addZero(day) : this.addZero(0);
    time[1] = hour > 0 ? this.addZero(hour) : this.addZero(0);
    time[2] = min > 0 ? this.addZero(min) : this.addZero(0);
    time[3] = sec > 0 ? this.addZero(sec) : this.addZero(0);
    return time;
  },
  /**
   * 拆分数组-天-时-分-秒
   * @param {*} e 
   */
  formatDate(e) {
    let list = JSON.parse(e);
    for (let i = 0; i < list.length; i++) {
      list[i] = list[i].toString().split('');
    }
    return list;
  },
  /**
   * 补0
   * @param {*} num 
   */
  addZero(num) {
    return num < 10 ? "0" + num : num;
  },
})