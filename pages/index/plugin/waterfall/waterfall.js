// pages/index/plugin/waterfall/waterfall.js
let leftHeight = 0;
let rightHeight = 0;
let leftData = [];
let rightData = [];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftData: [],
    rightData: [],
    orgData: [{
        title: "瀑布流示例1",
        name: "WaterFall",
        image: "https://image.meiye.art/pic_rtbm-gwTiDPTHOcu9B_Ih"
      },
      {
        title: "瀑布流示例2",
        name: "WaterFall",
        image: "https://image.meiye.art/FnpK9d3bPElztC95lwDo4H5Y3pck"
      },
      {
        title: "瀑布流示例3",
        name: "WaterFall",
        image: "https://image.meiye.art/FpwBzb03E0TM-zveHrAQFyG3pegm"
      },
      {
        title: "瀑布流示例4",
        name: "WaterFall",
        image: "https://image.meiye.art/pic_fqsdojCiT71c1eVDCcs3v"
      },
      {
        title: "瀑布流示例4",
        name: "WaterFall",
        image: "https://image.meiye.art/FoIDUgcZoyXTc-K3pE2lNMGAMfcn"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.create(this.data.orgData)
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
    leftHeight = 0;
    rightHeight = 0;
    leftData = [];
    rightData = [];
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
  create(data) {
    let promiseArr = [];
    for (let i in data) {
      let p = new Promise((resolve, reject) => {
        wx.getImageInfo({
          src: data[i].image,
          complete: (res) => {
            let proportion = res.height / res.width;
            data[i].height = 375 * proportion;
            resolve(data[i])
          }
        })
      })
      promiseArr.push(p)
    }
    Promise.all(promiseArr).then(res => {
      this.sort(res);
      this.setData({
        leftData,
        rightData
      })
    })
  },
  sort(data) {
    data.forEach(item => {
      if (leftHeight <= rightHeight) {
        leftHeight += item.height;
        leftData.push(item)
      } else {
        rightHeight += item.height;
        rightData.push(item);
      }
    });
  }
})