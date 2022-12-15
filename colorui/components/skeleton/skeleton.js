// colorui/components/skeleton/skeleton.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    loading: {
      type: Boolean,
      value: true
    },
    active: {
      type: Boolean,
      value: true
    },
    column: {
      type: Number,
      value: 0
    },
    columnWidth: {
      type: Array,
      value: []
    },
    endHeight: {
      type: String,
      value: ""
    },
    avatar: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})