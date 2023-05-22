<template>
    <view style="height: 100%">
        <!-- pages/index/component/status/status.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">状态提示</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                空状态
            </view>
        </view>

        <view class="margin-tb-sm padding-top-lg padding-bottom-xl">
            <view class="flex justify-center text-xsl">
                <view class="cuIcon-searchlist text-gray icon"></view>
            </view>
            <view class="flex justify-center padding-top-sm">
                <view class="text-gray text">暂无数据</view>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                网络错误
            </view>
        </view>

        <view class="margin-tb-sm padding-top-lg padding-bottom-xl">
            <view class="flex justify-center text-xsl">
                <view class="cuIcon-weblock text-gray icon"></view>
            </view>
            <view class="flex justify-center padding-top-sm">
                <view class="text-gray text">网络错误</view>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                未知错误
            </view>
        </view>

        <view class="margin-tb-sm padding-top-lg padding-bottom-xl">
            <view class="flex justify-center text-xsl">
                <view class="cuIcon-evaluate text-gray icon"></view>
            </view>
            <view class="flex justify-center padding-top-sm">
                <view class="text-gray text">未知错误</view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/status/status.js
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
/* pages/index/component/status/status.wxss */
</style>
