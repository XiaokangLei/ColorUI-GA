<template>
    <view style="height: 100%">
        <!-- pages/template/login/login01/login01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">登录注册01模板</view>
        </cu-custom>

        <view class="margin-xs">
            <view class="bg-white radius-lg" style="min-height: 90vh">
                <view class="padding-tb padding-lr">
                    <text class="text-xxl text-black">欢迎使用</text>
                    <text class="text-xxl text-black text-bold">滴答顺风车</text>
                    <view class="text-df padding-top-sm">共享出行，绿色环保</view>
                </view>
                <view class="bg-white radius-lg margin-tb-xl">
                    <view
                        class="bg-img padding-xs margin-xs radius-lg"
                        style="background-image: url(https://image.meiye.art/pic_1628633341089?imageMogr2/thumbnail/450x/interlace/1); height: 600rpx"
                    ></view>
                </view>
                <view class="padding-bottom-xxl padding-top padding-lr">
                    <view class="flex flex-column margin-sm">
                        <button class="cu-btn xxl bg-gradual-blue round">
                            <text class="icon-wechat" :decode="true">&nbsp;</text>
                            微信用户一键登录
                        </button>
                    </view>
                    <view class="padding-top-xs text-center text-black text-lg padding-bottom-xxl">手机号登录</view>
                </view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-a4d24a2a79560267"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/template/login/login01/login01.js
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
/* pages/template/login/login01/login01.wxss */
</style>
