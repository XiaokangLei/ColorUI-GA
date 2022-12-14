// pages/index/plugin/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_list: [{
        goods: [{
            img: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
          },
          {
            img: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
          },
          {
            img: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
          },
        ]
      },
      {
        goods: [{
            img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1',
          },
          {
            img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1',
          },
          {
            img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
          },
        ]
      },
      {
        goods: [{
            img: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
          },
          {
            img: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
          },
          {
            img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
          },
        ]
      }
    ],
    g_list: [{
        img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1',
      },
      {
        img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1',
      },
      {
        img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
      },
      {
        img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1',
      },
      {
        img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1',
      },
      {
        img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
      },
    ],
    d_num: 3,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let len = this.data.g_list.length;
    this.setData({
      d_num: len > 2 ? 3 : len
    })
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

  }
})