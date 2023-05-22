<template>
    <view style="height: 100%">
        <!-- pages/index/basics/shadow/shadow.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">阴影</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基本样式
            </view>
        </view>

        <view class="padding text-center margin-sm bg-white radius-df">
            <view class="padding-xl radius shadow bg-white radius-df">默认阴影</view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                颜色阴影
            </view>
        </view>

        <view class="padding text-center margin-sm bg-white radius-lg">
            <view class="padding-xl radius shadow bg-blue radius-df">根据背景颜色而改变的阴影</view>
            <view class="padding-xl radius shadow bg-green margin-top radius-df">根据背景颜色而改变的阴影</view>
            <view class="padding-xl radius shadow bg-red margin-top radius-df">根据背景颜色而改变的阴影</view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                扩展样式
            </view>
        </view>

        <view class="padding text-center margin-sm bg-white radius-lg">
            <view class="padding-xl radius shadow shadow-lg bg-white radius-df">长阴影</view>
            <view class="padding-xl radius shadow shadow-lg bg-blue margin-top-lg radius-df">长阴影</view>
            <view class="padding-xl radius shadow-warp bg-white margin-top-lg radius-df">翘边阴影</view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                图片阴影
            </view>
        </view>

        <view class="padding text-center">
            <view
                class="padding-xl radius shadow-blur bg-red margin-top bg-img radius-df"
                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
            >
                <view>根据背景图而改变的阴影</view>
            </view>
            <view
                class="padding-xl radius shadow-blur bg-red margin-top bg-img radius-df"
                style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
            >
                <view>根据背景图而改变的阴影</view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/shadow/shadow.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            size: ''
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
        SetSize(e) {
            this.setData({
                size: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/index/basics/shadow/shadow.wxss */
</style>
