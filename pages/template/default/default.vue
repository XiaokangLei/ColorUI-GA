<template>
    <view style="height: 100%">
        <!-- pages/template/default/default.wxml -->

        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">敬请期待</view>
        </cu-custom>

        <nodata compName="nodata"></nodata>
    </view>
</template>

<script>
import nodata from '@/pages/template/common/nodata.vue';
// pages/template/default/default.js
export default {
    components: {
        nodata
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
/* pages/template/default/default.wxss */
</style>
