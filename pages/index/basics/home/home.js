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
      url: '/images/45fc.png'
    }, {
      id: 1,
      type: 'image',
      url: '/images/45fc.png',
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
    elementsComponents: [{
        title: '操作条',
        name: 'bar',
        color: 'purple light',
        icon: 'vipcard'
      },
      {
        title: '导航栏 ',
        name: 'nav',
        color: 'mauve light',
        icon: 'formfill'
      },
      {
        title: '列表',
        name: 'list',
        color: 'pink light',
        icon: 'list'
      },
      {
        title: '卡片',
        name: 'card',
        color: 'brown light',
        icon: 'newsfill'
      },
      {
        title: '表单',
        name: 'form',
        color: 'red light',
        icon: 'formfill'
      },
      {
        title: '时间轴',
        name: 'timeline',
        color: 'orange light',
        icon: 'timefill'
      },
      {
        title: '聊天',
        name: 'chat',
        color: 'green light',
        icon: 'messagefill'
      },
      {
        title: '轮播',
        name: 'swiper',
        color: 'olive light',
        icon: 'album'
      },
      {
        title: '模态框',
        name: 'modal',
        color: 'grey light',
        icon: 'squarecheckfill'
      },
      {
        title: '步骤条',
        name: 'steps',
        color: 'cyan light',
        icon: 'roundcheckfill'
      },
    ],
    elementsPlugins: [{
        title: '索引列表',
        name: 'indexes',
        color: 'purple light',
        icon: 'vipcard'
      },
      {
        title: '微动画 ',
        name: 'animation',
        color: 'mauve light',
        icon: 'formfill'
      },
      {
        title: '全屏抽屉',
        name: 'drawer',
        color: 'pink light',
        icon: 'list'
      },
      {
        title: '垂直导航',
        name: 'verticalnav',
        color: 'brown light',
        icon: 'newsfill'
      }
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