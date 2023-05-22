<template>
    <view style="height: 100%">
        <!-- pages/template/news/home/home.wxml -->

        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">新闻资讯UI设计</view>
        </cu-custom>

        <scroll-view scroll-y class="scrollPage cu-timeline bg-gray">
            <view class="nav-list margin-top">
                <navigator
                    open-type="navigate"
                    hover-class="none"
                    :url="'/pages/template/news/' + item.name + '/' + item.name"
                    class="nav-lie"
                    v-for="(item, index) in elements"
                    :key="index"
                >
                    <image :src="item.url" mode="widthFix" class="image-bg-ui radius-lg"></image>

                    <view class="flex justify-center">
                        <button class="cu-btn bg-blue light sm margin-top-xs">查 看</button>
                    </view>
                </navigator>
            </view>

            <copyright compName="copyright"></copyright>

            <view class="cu-tabbar-height"></view>
        </scroll-view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/template/news/home/home.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            elements: [
                {
                    title: '未知',
                    name: 'news01',
                    url: 'https://image.meiye.art/Fo_HyTiSjyaC0L-fpf4RXEI7eN3b?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '未知',
                    name: 'news02',
                    url: 'https://image.meiye.art/FjjAKItzS-QGvz2A5Wd5oBGsnNkm?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '未知',
                    name: 'news03',
                    url: 'https://image.meiye.art/FpqquGpGUNwtHNY5R_s7ugcDjmUE?imageMogr2/thumbnail/470x/interlace/1'
                }
            ]
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
/* pages/template/news/home/home.wxss */
</style>
