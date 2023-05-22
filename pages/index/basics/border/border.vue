<template>
    <view style="height: 100%">
        <!-- pages/index/basics/border/border.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">边框</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                边框
            </view>
            <view class="action">
                <text class="text-df margin-right-sm">粗边框</text>
                <switch class="sm" @change="SetSize"></switch>
            </view>
        </view>

        <view class="padding bg-white text-center margin-sm radius-lg">
            <view :class="'padding solid' + (size ? 's' : '')">四周</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-top margin-top'">上</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-right margin-top'">右</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-bottom margin-top'">下</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-left margin-top'">左</view>
        </view>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                虚线边框
            </view>
        </view>

        <view class="padding bg-white text-center margin-sm radius-lg">
            <view class="padding dashed">四周</view>
            <view class="padding dashed-top margin-top">上</view>
            <view class="padding dashed-right margin-top">右</view>
            <view class="padding dashed-bottom margin-top">下</view>
            <view class="padding dashed-left margin-top">左</view>
        </view>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                颜色示例(蓝色)
            </view>
            <view class="action">
                <text class="text-df margin-right-sm">粗边框</text>
                <switch class="sm" @change="SetSize"></switch>
            </view>
        </view>

        <view class="padding bg-white text-center margin-sm radius-lg">
            <view :class="'padding solid' + (size ? 's' : '') + '-blue'">四周</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-top-blue margin-top'">上</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-right-blue margin-top'">右</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-bottom-blue margin-top'">下</view>
            <view :class="'padding solid' + (size ? 's' : '') + '-left-blue margin-top'">左</view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/border/border.js
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
/* pages/index/basics/border/border.wxss */
</style>
