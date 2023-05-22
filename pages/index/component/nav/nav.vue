<template>
    <view style="height: 100%">
        <!-- pages/index/component/nav/nav.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">导航栏</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                默认
            </view>
        </view>

        <scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
            <view :class="'cu-item ' + (index == TabCur ? 'text-blue cur' : '')" @tap="tabSelect" :data-id="index" v-for="(item, index) in 10" :key="index">Tab{{ index }}</view>
        </scroll-view>

        <view v-if="index == TabCur" class="bg-blue light padding padding-tb-xxl margin-sm text-center radius" v-for="(item, index) in 10" :key="index">Tab-{{ index }}</view>

        <view class="cu-bar bg-white margin-top solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                居中
            </view>
        </view>

        <scroll-view scroll-x class="bg-white nav text-center">
            <view :class="'cu-item ' + (index == TabCur ? 'text-blue cur' : '')" @tap="tabSelect" :data-id="index" v-for="(item, index) in 3" :key="index">Tab{{ index }}</view>
        </scroll-view>

        <view v-if="index == TabCur" class="bg-blue light padding padding-tb-xxl margin-sm text-center radius" v-for="(item, index) in 10" :key="index">Tab-{{ index }}</view>

        <view class="cu-bar bg-white margin-top solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                平分
            </view>
        </view>

        <scroll-view scroll-x class="bg-white nav">
            <view class="flex text-center">
                <view :class="'cu-item flex-sub ' + (index == TabCur ? 'text-blue cur' : '')" @tap="tabSelect" :data-id="index" v-for="(item, index) in 4" :key="index">
                    Tab{{ index }}
                </view>
            </view>
        </scroll-view>

        <view v-if="index == TabCur" class="bg-blue light padding padding-tb-xxl margin-sm text-center radius" v-for="(item, index) in 10" :key="index">Tab-{{ index }}</view>

        <view class="cu-bar bg-white margin-top solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                背景
            </view>
        </view>

        <scroll-view scroll-x class="bg-red nav text-center">
            <view :class="'cu-item ' + (index == TabCur ? 'text-white cur' : '')" @tap="tabSelect" :data-id="index" v-for="(item, index) in 3" :key="index">Tab{{ index }}</view>
        </scroll-view>

        <view v-if="index == TabCur" class="bg-blue light padding padding-tb-xxl margin-sm text-center radius" v-for="(item, index) in 10" :key="index">Tab-{{ index }}</view>

        <view class="cu-bar bg-white margin-top solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                图标
            </view>
        </view>

        <view v-if="index == TabCur" class="bg-blue light padding padding-tb-xxl margin-sm text-center radius" v-for="(item, index) in 10" :key="index">Tab-{{ index }}</view>

        <scroll-view scroll-x class="bg-blue nav text-center">
            <view :class="'cu-item ' + (0 == TabCur ? 'text-white cur' : '')" @tap="tabSelect" data-id="0">
                <text class="cuIcon-camerafill"></text>
                数码
            </view>
            <view :class="'cu-item ' + (1 == TabCur ? 'text-white cur' : '')" @tap="tabSelect" data-id="1">
                <text class="cuIcon-upstagefill"></text>
                排行榜
            </view>
            <view :class="'cu-item ' + (2 == TabCur ? 'text-white cur' : '')" @tap="tabSelect" data-id="2">
                <text class="cuIcon-clothesfill"></text>
                皮肤
            </view>
        </scroll-view>

        <view v-if="index == TabCur" class="bg-blue light padding padding-tb-xxl margin-sm text-center radius" v-for="(item, index) in 10" :key="index">Tab-{{ index }}</view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/nav/nav.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            TabCur: 0,
            scrollLeft: 0
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
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60
            });
        }
    }
};
</script>
<style>
/* pages/index/component/nav/nav.wxss */
</style>
