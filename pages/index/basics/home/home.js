// pages/index/basics/home/home.js
const app = getApp();
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
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      title: '布局UI设计',
      des: 'Flex、Grid及基础样式',
      url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx'
    }, {
      id: 1,
      type: 'image',
      title: '背景UI设计',
      des: '纯色、渐变色图片背景等样式',
      url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3',
    }, {
      id: 2,
      type: 'image',
      title: '文本UI设计',
      des: '文本大小、颜色及标题等样式',
      url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc',
    }],
    elements: [{
        title: '布局',
        name: 'layout',
        color: 'cyan light',
        icon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue light',
        icon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple light',
        icon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve light',
        icon: 'icon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink light',
        icon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown light',
        icon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red light',
        icon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange light',
        icon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive light',
        icon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green light',
        icon: 'loading2'
      },
      // {
      //   title: '标题',
      //   name: 'shadow',
      //   color: 'blue light',
      //   icon: 'brand'
      // },
      // {
      //   title: 'Emoji',
      //   name: 'emoji',
      //   color: 'pink light',
      //   icon: 'creative'
      // },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    }
  }
})