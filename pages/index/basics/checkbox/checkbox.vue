<template>
    <view style="height: 100%">
        <!-- pages/index/basics/checkbox/checkbox.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">复选框</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                单选(只能选中一个)
            </view>
        </view>

        <view class="bg-white">
            <radio-group class="block margin-xs">
                <view class="cu-form-group">
                    <view class="title">单选(radio)</view>
                    <radio checked></radio>
                </view>
                <view class="cu-form-group">
                    <view class="title">定义样式</view>
                    <radio class="radio"></radio>
                </view>
                <view class="cu-form-group">
                    <view class="title">定义颜色</view>
                    <view>
                        <radio class="blue radio"></radio>
                        <radio class="red margin-left-sm"></radio>
                    </view>
                </view>
                <view class="cu-form-group">
                    <view class="title">定义大小</view>
                    <view>
                        <radio class="red margin-left-sm" style="transform: scale(0.5, 0.5)"></radio>
                        <radio class="red margin-left-sm" style="transform: scale(0.7, 0.7)"></radio>
                        <radio class="red margin-left-sm" style="transform: scale(0.9, 0.9)"></radio>
                    </view>
                </view>
            </radio-group>
        </view>

        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                复选/多选
            </view>
        </view>

        <view class="bg-white">
            <view class="margin-xs">
                <view class="cu-form-group">
                    <view class="title">复选(checkbox)</view>
                    <checkbox></checkbox>
                </view>

                <view class="cu-form-group">
                    <view class="title">定义形状</view>
                    <checkbox class="round" checked></checkbox>
                </view>

                <view class="cu-form-group">
                    <view class="title">定义颜色</view>
                    <checkbox class="round blue" checked></checkbox>
                </view>
                <view class="cu-form-group">
                    <view class="title">定义大小</view>
                    <view>
                        <checkbox class="red margin-left-sm" style="transform: scale(0.5, 0.5)"></checkbox>
                        <checkbox class="red margin-left-sm" style="transform: scale(0.7, 0.7)"></checkbox>
                        <checkbox class="red margin-left-sm" style="transform: scale(0.9, 0.9)"></checkbox>
                    </view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                边框/背景颜色
            </view>
        </view>

        <view class="cu-form-group margin-top-xs bg-white">
            <checkbox class="orange"></checkbox>
            <checkbox class="green"></checkbox>
            <checkbox class="blue"></checkbox>
            <checkbox class="yellow"></checkbox>
            <checkbox class="pink"></checkbox>
            <checkbox class="purple"></checkbox>
            <checkbox class="red"></checkbox>
        </view>

        <view class="cu-form-group bg-white">
            <checkbox class="round orange"></checkbox>
            <checkbox class="round green"></checkbox>
            <checkbox class="round blue"></checkbox>
            <checkbox class="round yellow"></checkbox>
            <checkbox class="round pink"></checkbox>
            <checkbox class="round purple"></checkbox>
            <checkbox class="round red"></checkbox>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/checkbox/checkbox.js
export default {
    components: {
        copyright
    },
    data() {
        return {};
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
    methods: {}
};
</script>
<style>
/* pages/index/basics/checkbox/checkbox.wxss */
</style>
