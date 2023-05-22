<template>
    <view style="height: 100%">
        <!-- pages/index/basics/title/title.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">标题</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-xl text-black">标题样式</text>
            </view>
        </view>

        <view class="margin-sm radius-lg bg-white">
            <view class="cu-bar radius-lg-top">
                <view class="action border-title">
                    <text class="text-xl text-bold">示例标题1</text>
                    <text class="bg-grey" style="width: 2rem"></text>
                    <!-- 底部样式 last-child选择器 -->
                </view>
            </view>
            <view class="cu-bar">
                <view class="action border-title">
                    <text class="text-xl text-bold text-blue">示例标题2</text>
                    <text class="bg-gradual-blue" style="width: 3rem"></text>
                </view>
            </view>
            <view class="cu-bar">
                <view class="action sub-title">
                    <text class="text-xl text-bold text-green">示例标题3</text>
                    <text class="bg-green"></text>
                    <!-- last-child选择器 -->
                </view>
            </view>
            <view class="cu-bar">
                <view class="action sub-title">
                    <text class="text-xl text-bold text-blue">示例标题4</text>
                    <text class="text-ABC text-blue">about</text>
                    <!-- last-child选择器 -->
                </view>
            </view>
            <view class="cu-bar">
                <view class="action">
                    <text class="text-xl text-bold">示例标题4</text>
                    <text class="text-Abc text-gray self-end margin-left-sm">about</text>
                </view>
            </view>
            <view class="cu-bar">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    <text class="text-xl text-bold">示例标题5</text>
                </view>
            </view>
            <view class="cu-bar">
                <view class="action">
                    <text class="cuIcon-title text-blue"></text>
                    <text class="text-xl text-bold">示例标题6</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-xl text-black">级别</text>
            </view>
        </view>

        <view class="margin-sm radius-lg bg-white">
            <view class="cu-bar radius-lg-top">
                <view class="action">
                    <text class="cuIcon-titles text-green"></text>
                    <text class="text-xl text-bold">一级标题</text>
                </view>
            </view>

            <view class="cu-bar">
                <view class="action">
                    <text class="cuIcon-titles text-green"></text>
                    <text class="text-lg text-bold">二级标题</text>
                </view>
            </view>

            <view class="cu-bar radius-lg-bottom">
                <view class="action">
                    <text class="cuIcon-title text-green"></text>
                    <text class="text-df text-bold">三级标题</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-xl text-black">居中</text>
            </view>
        </view>

        <view class="margin-sm radius-lg bg-white">
            <view class="cu-bar radius-lg-top flex justify-center">
                <view class="action border-title">
                    <text class="text-xl text-bold">示例标题1</text>
                    <text class="bg-grey" style="width: 2rem"></text>
                </view>
            </view>
            <view class="cu-bar flex justify-center">
                <view class="action border-title">
                    <text class="text-xl text-bold text-blue">示例标题2</text>
                    <text class="bg-gradual-blue" style="width: 3rem"></text>
                </view>
            </view>
            <view class="cu-bar flex justify-center">
                <view class="action sub-title">
                    <text class="text-xl text-bold text-green">示例标题3</text>
                    <text class="bg-green"></text>
                </view>
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
// pages/index/basics/title/title.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            title: '精选推荐'
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
    methods: {}
};
</script>
<style>
/* pages/index/basics/title/title.wxss */
</style>
