<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/design/design.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">卡片设计</view>
        </cu-custom>

        <view class="container_index">
            <!-- 预览样式 -->
            <view class="grid col-1 padding-sm">
                <view class="padding-sm">
                    <view :class="'bg-' + bg_color + ' padding-sm radius-lg text-center light'">
                        <view class="flex padding-xs justify-between">
                            <view class="text-xsl">{{ emoji }}</view>
                            <view>
                                <view class="padding-xs radius text-right" style="margin-top: -20rpx">
                                    <text>{{ date }}</text>
                                </view>
                                <view class="padding-xs radius text-xxxl text-right text-cut padding-tb">
                                    <text class="text-cut">{{ title || '在下方输入标题' }}</text>
                                </view>
                                <view class="padding-xs radius text-right text-cut" style="margin-bottom: -20rpx">
                                    <text v-if="m2.format(date)[0]" class="text-xl">还有</text>
                                    <text v-else class="text-bold text-lg">已经</text>
                                    <text class="text-sl">{{ m2.format(date)[1] }}</text>
                                    <text class="text-xl">天</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <view class="padding">
                <!-- 选配色 -->
                <view class="grid col-1 margin-bottom text-center">
                    <view class="flex">
                        <view class="padding-left-sm">
                            <view class="text-df padding-top-xs">浅色</view>
                            <view class="text-df padding-top-sm">深色</view>
                        </view>
                        <checkbox-group class="flex-sub" @change="checkboxChange">
                            <label class="margin-xs" v-for="(item, index) in checkboxItems" :key="index">
                                <checkbox :class="'round padding-bottom-xs ' + item.name" :value="item.value" :checked="item.checked" />
                            </label>
                        </checkbox-group>
                    </view>
                </view>

                <!-- 设定标题 -->
                <view class="flex p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-xs margin-xs radius text-xl">
                        📄
                        <text class="text-black">标题</text>
                    </view>
                    <view class="flex-treble bg-grey light padding-xs margin-xs radius">
                        <input class="text-grey" placeholder-style="color:grey;" @input="bindKeyInput" maxlength="7" placeholder="请输入标题(8字以内)" />
                    </view>
                </view>

                <!-- 选择日期 -->
                <view class="flex">
                    <view class="flex-treble bg-grey light padding-sm margin-xs radius-lg text-xxl">
                        <picker mode="date" :value="date" @change="DateChange">
                            <view class="picker">
                                📆
                                <text class="text-xxl" style="color: grey">{{ date }}</text>
                            </view>
                        </picker>
                    </view>
                    <view
                        class="flex-sub bg-grey light margin-xs radius-lg text-sl"
                        style="display: flex; justify-content: center; text-align: center; align-items: center"
                        @tap="jumpPageChoise"
                        data-page="choiseEmoji"
                        hover-class="item-hover"
                        hover-stay-time="100"
                    >
                        {{ emoji }}
                    </view>
                </view>
            </view>

            <view class="margin-lr padding bg-white radius-lg">
                <view class="flex justify-between">
                    <view class="text-black">操作说明</view>
                </view>
                <view class="padding-top">
                    <view class="text-sm">1、单选框选择背景颜色</view>
                    <view class="text-sm padding-tb-xs">2、输入标题，当前显示最大输入7个字</view>
                    <view class="text-sm">3、选择时间及Emoji图标</view>
                    <view class="text-sm padding-tb-xs">4、生成对应的卡片，可应用于倒数日、名片等场景</view>
                </view>
            </view>
        </view>

        <view class="margin-top" style="margin-top: 10vh">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>
<script module="m1" lang="wxs">
function format(ts) {
  var d = getDate(ts)
  var myDate = getDate();
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(formatNumber).join('-')
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
module.exports.format = format
</script>
<script module="m2" lang="wxs">
function format(ts) {
  var d = getDate(ts)
  var myDate = getDate();
  var theTime = d - myDate
  var minute = 0; // 分
  var hour = 0;//小时
  var day = 0
  if (theTime > 60) {
    minute = parseInt(theTime / 60 / 1000);
    theTime = parseInt(theTime % 60);
    if (minute > 60) {
      hour = parseInt(minute / 60);
    }
    if (hour > 24) {
      day = parseInt(hour / 24 + 1);
    }
    else if (hour > 0) {
      day = 1
    }
    console.log(day)
    return [1, day]
  }
  else {
    theTime = myDate - d
    minute = parseInt(theTime / 60 / 1000);
    theTime = parseInt(theTime % 60);
    if (minute > 60) {
      hour = parseInt(minute / 60);
    }
    if (hour > 24) {
      day = parseInt(hour / 24 + 1);
    }
    else if (hour > 0) {
      day = 0
    }
    console.log(day)
    return [0, day]
  }
}
module.exports.format = format
</script>
<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/design/design.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            bg_color: 'gradual-pinknew',
            title: '在下方输入标题',
            date: '',
            emoji: app.globalData.emoji,

            checkboxItems: [
                {
                    name: 'red',
                    value: 'red'
                },
                {
                    name: 'yellow',
                    value: 'yellow'
                },
                {
                    name: 'olive',
                    value: 'olive'
                },
                {
                    name: 'blue',
                    value: 'blue'
                },
                {
                    name: 'cyan',
                    value: 'cyan'
                },
                {
                    name: 'purple',
                    value: 'purple'
                },
                {
                    name: 'mauve',
                    value: 'mauve'
                },
                {
                    name: 'pink',
                    value: 'pink'
                },
                {
                    name: 'red',
                    value: 'gradual-red'
                },
                {
                    name: 'orange',
                    value: 'gradual-orange'
                },
                {
                    name: 'green',
                    value: 'gradual-green'
                },
                {
                    name: 'blue',
                    value: 'gradual-blue'
                },
                {
                    name: 'cyan',
                    value: 'gradual-cyan'
                },
                {
                    name: 'purple',
                    value: 'gradual-purple'
                },
                {
                    name: 'mauve',
                    value: 'gradual-pinknew'
                },
                {
                    name: 'pink',
                    value: 'gradual-pink'
                }
            ],

            type: '',
            weather: '',
            id_var: '',
            checkboxValues: ''
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var date = new Date();
        this.setData({
            date: date.toLocaleDateString().replace(new RegExp('/', 'gm'), '-')
        });
        try {
            uni.setStorageSync('bg_color', this.bg_color);
            uni.setStorageSync('title', this.title);
            uni.setStorageSync('date', this.date);
            uni.setStorageSync('emoji', this.emoji);
            uni.setStorageSync('type', this.type);
            uni.setStorageSync('weather', this.weather);
        } catch (e) {
            console.log('CatchClause', e);
            console.log('CatchClause', e);
        }
        if (options.emoji) {
            this.setData({
                emoji: options.emoji
            });
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        try {
            uni.setStorageSync('isFrash', false);
            this.setData({
                bg_color: uni.getStorageSync('bg_color'),
                title: uni.getStorageSync('title'),
                date: uni.getStorageSync('date'),
                emoji: uni.getStorageSync('emoji'),
                type: uni.getStorageSync('type'),
                weather: uni.getStorageSync('weather'),
                id_var: uni.getStorageSync('_id')
            });
        } catch (e) {
            console.log('CatchClause', e);
            console.log('CatchClause', e);
        } // Do something when catch error
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
    methods: {
        checkboxChange: function (e) {
            var that = this;
            let checkboxValues = null;
            let checkboxItems = this.checkboxItems;
            let values = e.detail.value;
            for (i = 0, lenI = checkboxItems.length, void 0; i < lenI; ++i) {
                var i;
                var lenI;
                if (checkboxItems[i].value == values[values.length - 1]) {
                    checkboxItems[i].checked = true;
                    checkboxValues = checkboxItems[i].value;
                } else {
                    checkboxItems[i].checked = false;
                }
            }
            that.setData({
                checkboxItems,
                checkboxValues,
                bg_color: checkboxValues
            });
        },

        bindKeyInput: function (e) {
            this.setData({
                title: e.detail.value
            });
        },

        jumpPageChoise(e) {
            try {
                uni.setStorageSync('emoji', this.emoji);
                uni.setStorageSync('date', this.date);
                uni.setStorageSync('title', this.title);
                uni.setStorageSync('bg_color', this.bg_color);
                uni.setStorageSync('isFrash', true);
            } catch (e) {
                console.log('CatchClause', e);
                console.log('CatchClause', e);
            }
            uni.navigateTo({
                url: `/pages/index/plugin/design/${e.currentTarget.dataset.page}/${e.currentTarget.dataset.page}`
            });
        },

        DateChange(e) {
            this.setData({
                date: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/design/design.wxss */
</style>
