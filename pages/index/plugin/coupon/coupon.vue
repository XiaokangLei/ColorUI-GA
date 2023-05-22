<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/coupon/coupon.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">会员卡/卡券</view>
        </cu-custom>

        <view class="cu-bar solid-bottom bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式1
            </view>
        </view>

        <!-- 样式1 -->
        <view class="flex solid-bottom margin-top justify-center">
            <view class="cu-coupon-box radius-lg padding-sm">
                <view class="flex justify-between">
                    <view class="text-white text-xl text-bold">ColorUI-GA会员卡</view>
                    <view class="cu-tag line-white round text-df padding-lr-sm">VIP</view>
                </view>
                <view class="flex justify-center align-end padding-tb cu-coupon-content text-white">
                    <text class="text-lg padding-bottom-xs">余额</text>
                    <text class="text-sl">1688</text>
                    <text class="text-lg padding-bottom-xs">元</text>
                </view>
                <view class="flex justify-around align-center margin-top-xl text-white">
                    <view class="text-center">
                        <view>已支出</view>
                        <view>888元</view>
                    </view>
                    <view class="text-center">
                        <view>已优惠</view>
                        <view>108元</view>
                    </view>
                    <view class="text-center">
                        <view>已使用</view>
                        <view>188次</view>
                    </view>
                </view>
            </view>
        </view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式2
            </view>
        </view>

        <!-- 样式2 -->
        <view class="cu-coupon-box2 radius-lg">
            <view class="cu-tag bg-orange radius text-df padding-lr-sm">即将过期</view>
            <view class="flex p-xs margin-bottom-sm mb-sm">
                <view class="flex-sub padding-sm padding-top margin-xs text-red">
                    <text class="text-xxxl">888</text>
                    元
                </view>
                <view class="flex-treble padding-left-sm">
                    <view class="text-black text-lg text-bold">ColorUI-GA 888 元优惠券</view>
                    <view class="text-gray padding-top-xs">截止日期：2022-12-14 21:59:59</view>
                </view>
            </view>
        </view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式3
            </view>
        </view>

        <!-- 样式3 -->
        <view class="cu-coupon-card3"></view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式4
            </view>
        </view>

        <!-- 样式4 -->
        <view class="cu-coupon-card4"></view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式5
            </view>
        </view>

        <!-- 样式5 -->
        <view class="cu-coupon-card5"></view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式6
            </view>
        </view>

        <!-- 样式6 -->
        <view class="cu-coupon-card6"></view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                样式7
            </view>
        </view>

        <!-- 样式7 -->
        <view class="padding-tb-sm flex justify-center" style="background-color: #57d4f4">
            <view class="cu-coupon-card7">
                <view class="cu-coupon-top">
                    <view class="cu-coupon-title">
                        <span></span>
                        <text>活动规则</text>
                        <span></span>
                    </view>
                </view>
                <view class="bottom"></view>
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
// pages/index/plugin/coupon/coupon.js
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
/* pages/index/plugin/coupon/coupon.wxss */
</style>
