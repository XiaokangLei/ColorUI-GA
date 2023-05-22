<template>
    <view style="height: 100%">
        <!-- pages/template/massage/message01/message01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">消息列表01模板</view>
        </cu-custom>

        <view class="">
            <view class="bg-white margin-xs radius-lg" style="min-height: 86vh">
                <view class="radius-lg" style="background-image: linear-gradient(to top, #fffcf8 0%, #fae7c9 100%)">
                    <view class="flex padding-sm justify-between">
                        <view class="flex padding-top-xs text-xl text-black">消息</view>
                        <view class="text-lg">
                            <view class="cu-avatar round margin-left bg-gray">
                                <view class="flex justify-center cuIcon-peoplelist text-blace"></view>
                            </view>
                        </view>
                    </view>
                    <view class="box-serach">
                        <view class="cu-bar search radius-lg">
                            <view class="search-form round">
                                <text class="cuIcon-search"></text>
                                <input type="text" placeholder="搜索" confirm-type="search" />
                            </view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar padding-tb-sm">
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-blue-3">
                            <view class="cuIcon-notice text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-black">互动消息</view>
                            <view class="text-gray text-sm">暂无通知消息</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-pink-4">
                            <view class="cuIcon-deliver text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-black">天天抢车位</view>
                            <view class="text-gray text-sm">你的车车再不停就要生锈了</view>
                        </view>
                        <view class="action text-xl text-gray">
                            <view class="cuIcon-moreandroid"></view>
                            <view class="cu-tag round sm bg-red">4</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-indigo-5">
                            <view class="cuIcon-mark text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-red">陌陌</view>
                            <view class="text-gray text-sm">12.90km · [语音]</view>
                        </view>
                        <view class="action text-gray">
                            <view>6-17</view>
                            <view class="cu-tag round sm bg-red">2</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-orange-4">
                            <view class="cuIcon-service text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-blue">ColorUI GA 客服</view>
                            <view class="text-gray text-sm">欢迎使用ColorUI GA组件库！</view>
                        </view>
                        <view class="action text-gray">
                            <view>9-15</view>
                            <view class="cu-tag round sm bg-grey">3</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-green-4">
                            <view class="cuIcon-discover text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-green">小宇宙</view>
                            <view class="text-gray text-sm">欢迎来到小宇宙！</view>
                        </view>
                        <view class="action text-gray">
                            <view>12-15</view>
                            <view class="cu-tag round sm bg-grey">2</view>
                        </view>
                    </view>
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
// pages/template/massage/message01/message01.js
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
/* pages/template/massage/message01/message01.wxss */
</style>
