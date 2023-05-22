<template>
    <view style="height: 100%">
        <!-- pages/index/basics/loading/loading.wxml -->

        <!-- 顶部自定义导航栏 -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">加载</view>
            <view class="action" slot="right">
                <view :class="'cu-load load-icon ' + (!isLoad ? 'loading' : 'over')"></view>
            </view>
        </cu-custom>

        <!-- 常规底部加载 -->
        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                常规底部加载
            </view>
        </view>

        <view :class="'cu-load text-gray ' + (!isLoad ? 'loading' : 'over')"></view>

        <!-- 颜色/背景 -->
        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                颜色/背景
            </view>
        </view>

        <view :class="'cu-load text-orange ' + (!isLoad ? 'loading' : 'over')"></view>
        <view :class="'cu-load bg-blue ' + (!isLoad ? 'loading' : 'over')"></view>

        <!-- 加载状态 -->
        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                加载状态
            </view>
            <view class="action">
                <text class="text-df margin-right-sm">加载完成</text>
                <switch class="sm" @change="isLoading"></switch>
            </view>
        </view>

        <view :class="'cu-load bg-grey ' + (!isLoad ? 'loading' : 'over')"></view>

        <!-- 加载错误 -->
        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                加载错误
            </view>
        </view>

        <view class="cu-load bg-red erro"></view>

        <!-- 弹框加载 -->
        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                弹框加载
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="loadModalFun" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view class="cu-load load-modal" v-if="loadModal">
            <image src="/static/images/tabbar/basics_cur.png" class="png" mode="aspectFit"></image>
            <view class="gray-text">加载中...</view>
        </view>

        <!-- 顶部进度条加载 -->
        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                顶部进度条加载
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="loadProgressFun" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view :class="'load-progress ' + (loadProgress != 0 ? 'show' : 'hide')" :style="'top:' + CustomBar + 'px;'">
            <view class="load-progress-bar bg-green" :style="'transform: translate3d(-' + (100 - loadProgress) + '%, 0px, 0px);'"></view>
            <view class="load-progress-spinner text-green"></view>
        </view>

        <!-- 扩展样式 -->
        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                扩展样式
            </view>
        </view>

        <view class="margin-sm bg-white radius-lg">
            <!-- 扩展样式一 -->
            <view class="cu-loading-box flex align-center justify-center">
                <view class="cu-loading1">
                    <view class="bg-blue" v-for="(item, index) in 8" :key="index"></view>
                </view>
            </view>
            <!-- 扩展样式二 -->
            <view class="cu-loading-box flex align-center justify-center">
                <view class="cu-loading2">
                    <text v-for="(item, index) in 8" :key="index"></text>
                </view>
            </view>
            <!-- 扩展样式三 -->
            <view class="cu-loading-box flex align-center justify-center">
                <view class="cu-loading3">
                    <text v-for="(item, index) in 8" :key="index"></text>
                </view>
            </view>
            <!-- 扩展样式四 -->
            <view class="flex align-center justify-center padding-tb-sm">
                <view class="cu-loading4">
                    <view class="rect1 bg-blue"></view>
                    <view class="rect2 bg-blue"></view>
                    <view class="rect3 bg-blue"></view>
                    <view class="rect4 bg-blue"></view>
                    <view class="rect5 bg-blue"></view>
                </view>
            </view>
        </view>

        <!-- 底部版权信息&广告 -->

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/loading/loading.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            CustomBar: app.globalData.CustomBar,
            loadProgress: 0,
            isLoad: '',
            loadModal: false,
            loadProgressPer: ''
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
        isLoading(e) {
            this.setData({
                isLoad: e.detail.value
            });
        },

        loadModalFun() {
            this.setData({
                loadModal: true
            });
            setTimeout(() => {
                this.setData({
                    loadModal: false
                });
            }, 2000);
        },

        loadProgressFun() {
            this.setData({
                loadProgress: this.loadProgress + 3,
                loadProgressPer: 100 - this.loadProgress + '%'
            });
            if (this.loadProgress < 100) {
                setTimeout(() => {
                    this.loadProgressFun();
                }, 100);
            } else {
                this.setData({
                    loadProgress: 0,
                    loadProgressPer: '100%'
                });
            }
        }
    }
};
</script>
<style>
/* pages/index/basics/loading/loading.wxss */
</style>
