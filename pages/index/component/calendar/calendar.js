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
    spot: ['2021/11/6', '2020/8/9', '2020/8/20', '2020/9/12'],
    // 农历
    Nongli: 0,
    lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554,
      0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0,
      0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566,
      0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550,
      0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0,
      0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263,
      0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0,
      0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5,
      0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0,
      0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9,
      0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0,
      0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520,
      0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
    ],
    chineseNumber: [
      "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"
    ],
    lunarDate: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNowTime();
    this.getSpace();
    this.createDay();
    this.emit();
    // 获取当前日期的农历日期
    this.getLunarDate(new Date());
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
    let time = new Date(this.data.year, this.data.month, 0)
    let len = time.getDate()
    for (let i = 1; i <= len; i++) {
      time.setDate(i);
      // 获取农历日期
      let lunarDate = this.getLunarDate(time);
      day.push({
        "day": i,
        "lunar": lunarDate
      });
      // day.push(i);
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
    this.emit();
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
    // 获取选中日期的农历日期
    this.getLunarDate(time);
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
        return '日';
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
  // 获取农历日期相关函数
  getLunarDate: function (curDate) {
    var self = this;
    var yearCyl, monCyl, dayCyl;
    var leapMonth = 0;
    var date = new Date('1900/1/31');
    // var curDate = new Date();
    // 求出和1900年1月31日相差的天数
    var offset = parseInt((curDate.getTime() - date.getTime()) / 86400000);
    dayCyl = offset + 40;
    monCyl = 14;
    // 用offset减去每农历年的天数
    // 计算当天是农历第几天
    // i最终结果是农历的年份
    // offset是当年的第几天
    var iYear, daysOfYear = 0;
    for (iYear = 1900; iYear < 2050 && offset > 0; iYear++) {
      daysOfYear = self.yearDays(iYear);
      offset -= daysOfYear;
      monCyl += 12;
    }
    if (offset < 0) {
      offset += daysOfYear;
      iYear--;
      monCyl -= 12;
    }
    yearCyl = iYear - 1864;
    leapMonth = self.leapMonth(iYear); // 闰哪个月,1-12
    var leap = false; // 默认值
    // 用当年的天数offset,逐个减去每月（农历）的天数，求出当天是本月的第几天
    var iMonth, daysOfMonth = 0;
    for (iMonth = 1; iMonth < 13 && offset > 0; iMonth++) {
      // 闰月
      if (leapMonth > 0 && iMonth == (leapMonth + 1) && !leap) {
        --iMonth;
        leap = true;
        daysOfMonth = self.leapDays(iYear);
      } else
        daysOfMonth = self.monthDays(iYear, iMonth);

      offset -= daysOfMonth;
      // 解除闰月
      if (leap && iMonth == (leapMonth + 1))
        leap = false;
      if (!leap)
        monCyl++;
    }
    // offset为0时，并且刚才计算的月份是闰月，要校正
    if (offset == 0 && leapMonth > 0 && iMonth == leapMonth + 1) {
      if (leap) {
        leap = false;
      } else {
        leap = true;
        --iMonth;
        --monCyl;
      }
    }
    // offset小于0时，也要校正
    if (offset < 0) {
      offset += daysOfMonth;
      --iMonth;
      --monCyl;
    }
    var newday = self.getChinaDayString(offset + 1);
    var newmonth = self.data.chineseNumber[iMonth - 1];
    self.setData({
      lunarDate: newmonth + '月' + newday
    })
    //把日期整合成一个字符串
    var nongli = iYear + '年' + newmonth + '月' + newday;
    //把nongli赋值给date里的Nongli,才能在html中使用
    this.setData({
      Nongli: nongli
    })
    if (newday == '初一') {
      return newmonth + '月'
    } else {
      return newday
    }
  },

  //***上面的方法调用下面的方法***

  yearDays: function (y) {
    var self = this;
    var i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      if ((self.data.lunarInfo[y - 1900] & i) != 0)
        sum += 1;
    }
    return (sum + self.leapDays(y));
  },
  leapDays: function (y) {
    var self = this;
    if (self.leapMonth(y) != 0) {
      if ((self.data.lunarInfo[y - 1900] & 0x10000) != 0)
        return 30;
      else
        return 29;
    } else
      return 0;
  },
  leapMonth: function (y) {
    var self = this;
    return self.data.lunarInfo[y - 1900] & 0xf;
  },
  monthDays: function (y, m) {
    if ((this.data.lunarInfo[y - 1900] & (0x10000 >> m)) == 0)
      return 29;
    else
      return 30;
  },
  getChinaDayString: function (day) {
    var self = this;
    var chineseTen = ["初", "十", "廿", "卅"];
    var n = day % 10 == 0 ? 9 : day % 10 - 1;
    if (day > 30)
      return "";
    if (day == 10)
      return "初十";
    else
      return chineseTen[parseInt(day / 10)] + self.data.chineseNumber[n];
  },

})