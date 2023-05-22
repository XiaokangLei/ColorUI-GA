<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/overturn/overturn.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">卡片翻转</view>
        </cu-custom>

        <view class="flex justify-center margin-top-xxl padding-top-xxl">
            <view
                class="cu-overturn-box radius-lg"
                @tap.stop.prevent="showb1"
                :style="'background-image:url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1);' + styleA"
            ></view>
            <view
                class="cu-overturn-box cu-b2 radius-lg"
                @tap.stop.prevent="showb2"
                :style="'background-image:url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1);' + styleB"
            ></view>
        </view>

        <view class="margin padding-top" style="margin-top: 40vh">
            <view class="margin-top bg-white padding radius-lg">
                <view class="text-sm text-black">操作说明：</view>
                <view class="text-gray text-sm padding-top-xs">点击图片将会翻转图片显示另一张图片。</view>
                <view class="text-gray text-sm padding-top-xs">可用于抽奖、盲盒等场景</view>
            </view>
        </view>

        <view class="margin-top" style="margin-top: 18vh">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/overturn/overturn.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            styleA: '',
            styleB: ''
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
        showb1() {
            this.setData({
                styleA: 'transform:rotateY(180deg)',
                styleB: 'transform:rotateY(0deg)'
            });
        },

        showb2() {
            this.setData({
                styleA: 'transform:rotateY(0deg)',
                styleB: 'transform:rotateY(-180deg)'
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/overturn/overturn.wxss */
</style>
