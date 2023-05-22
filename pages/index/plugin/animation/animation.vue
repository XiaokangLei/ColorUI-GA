<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/animation/animation.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">微动画</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                默认效果
            </view>
        </view>

        <view class="padding-sm">
            <view class="flex flex-wrap justify-around">
                <button
                    :class="'cu-btn bg-' + item.color + ' animation-' + (animation == item.name ? item.name : '') + ' margin-sm basis-sm shadow'"
                    @tap="toggle"
                    :data-class="item.name"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    {{ item.name }}
                </button>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                反向动画
            </view>
        </view>

        <view class="padding-sm">
            <view class="flex flex-wrap justify-around">
                <button
                    :class="'cu-btn bg-' + item.color + ' animation-' + (animation == item.name + 's' ? item.name : '') + ' animation-reverse margin-sm basis-sm shadow'"
                    @tap="toggle"
                    :data-class="item.name + 's'"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    {{ item.name }}
                </button>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                延迟执行
            </view>
            <view class="action">
                <button class="cu-btn bg-cyan shadow" @tap="toggleDelayFun">开始执行</button>
            </view>
        </view>

        <view class="padding-sm">
            <view class="flex flex-wrap justify-around">
                <button
                    :class="'bg-' + item.color + ' cu-btn ' + (toggleDelay ? 'animation-slide-bottom' : '') + ' margin-sm basis-sm shadow'"
                    :style="'animation-delay: ' + (index + 1) * 0.1 + 's;'"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    0.{{ index + 1 }}s
                </button>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                Gif动画
            </view>
        </view>

        <view class="margin bg-gradual-blue">
            <image
                src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif"
                mode="scaleToFill"
                class="gif-black response"
                style="height: 100rpx"
            ></image>
        </view>

        <view class="margin flex">
            <view class="bg-black flex-sub margin-right">
                <image
                    src="https://image.meiye.art/FtVzlE42mb4MfUkz9qcbCKq8Qv_a?imageMogr2/thumbnail/450x/interlace/1"
                    mode="aspectFit"
                    class="gif-black response"
                    style="height: 240rpx"
                ></image>
            </view>
            <view class="bg-white flex-sub">
                <image src="https://image.meiye.art/FpKQhWyO0YoE1kZPmT9c_m8C4vJZ" mode="aspectFit" class="gif-white response" style="height: 240rpx"></image>
            </view>
        </view>

        <view class="margin flex">
            <view class="bg-gradual-blue flex-sub margin-right">
                <image
                    src="https://image.meiye.art/Ftfhr4rPXzZM3Z8cBehxgQHH2Gj6?imageMogr2/thumbnail/450x/interlace/1"
                    mode="aspectFit"
                    class="gif-black response"
                    style="height: 240rpx"
                ></image>
            </view>
            <view class="bg-white flex-sub">
                <image
                    src="https://image.meiye.art/Fv_9m3UnYTFOeiY79X01nBupGyKx?imageMogr2/thumbnail/450x/interlace/1"
                    mode="aspectFit"
                    class="gif-white response"
                    style="height: 240rpx"
                ></image>
            </view>
        </view>

        <view class="margin flex">
            <view class="bg-white flex-sub margin-right">
                <image
                    src="https://image.meiye.art/FhSukauLzxBHoNQUq_YCqRN0CCKz?imageMogr2/thumbnail/450x/interlace/1"
                    mode="aspectFit"
                    class="gif-white response"
                    style="height: 240rpx"
                ></image>
            </view>
            <view class="bg-black flex-sub">
                <image
                    src="https://image.meiye.art/Fg7PS0IesulBHFZwCvfx9-pj6fgs?imageMogr2/thumbnail/450x/interlace/1"
                    mode="aspectFit"
                    class="gif-black response"
                    style="height: 240rpx"
                ></image>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/animation/animation.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,

            list: [
                {
                    name: 'fade',
                    color: 'red'
                },
                {
                    name: 'scale-up',
                    color: 'orange'
                },
                {
                    name: 'scale-down',
                    color: 'olive'
                },
                {
                    name: 'slide-top',
                    color: 'green'
                },
                {
                    name: 'slide-bottom',
                    color: 'cyan'
                },
                {
                    name: 'slide-left',
                    color: 'blue'
                },
                {
                    name: 'slide-right',
                    color: 'purple'
                },
                {
                    name: 'shake',
                    color: 'mauve'
                }
            ],

            toggleDelay: false,
            animation: ''
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},
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
        toggle(e) {
            console.log(e);
            var anmiaton = e.currentTarget.dataset.class;
            var that = this;
            that.setData({
                animation: anmiaton
            });
            setTimeout(function () {
                that.setData({
                    animation: ''
                });
            }, 1000);
        },

        toggleDelayFun() {
            var that = this;
            that.setData({
                toggleDelay: true
            });
            setTimeout(function () {
                that.setData({
                    toggleDelay: false
                });
            }, 1000);
        }
    }
};
</script>
<style>
@import '../../../../colorui/animation.css'; /* pages/index/plugin/animation/animation.wxss */

image[class*='gif-'] {
    border-radius: 6rpx;
    display: block;
}
</style>
