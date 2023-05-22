<template>
    <view style="height: 100%">
        <!-- pages/template/userlist/userlist01/userlist01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">通话记录</view>
        </cu-custom>

        <scroll-view scroll-y class="indexes">
            <view class="bg-white margin-xs radius-lg">
                <block v-for="(item, index) in list" :key="index">
                    <view class="flex padding-tb-sm">
                        <view class="flex-treble">
                            <view class="flex">
                                <view class="padding-lr-sm">
                                    <view class="cu-avatar xl round" :style="'background-image:url(' + item.avatar + ');'"></view>
                                </view>
                                <view class="padding-xs text-xl text-black">
                                    <view class="text-bold">{{ item.name }}</view>
                                    <view :class="'text-' + item.color + ' text-sm padding-tb-xs'">
                                        {{ item.type }}
                                    </view>
                                    <view class="text-gray text-sm">
                                        {{ item.time }}
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="flex-sub">
                            <view class="flex justify-end text-black text-xxl">
                                <view class="icon-video padding-sm padding-top-lg"></view>
                                <view class="icon-phone padding-sm padding-top-lg"></view>
                            </view>
                        </view>
                    </view>
                </block>
            </view>
        </scroll-view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-a4d24a2a79560267"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/template/userlist/userlist01/userlist01.js

export default {
    components: {
        copyright
    },
    data() {
        return {
            list: [
                {
                    name: 'Josephine Bunner',
                    color: 'gray',
                    type: 'Outgoing Video Call',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    name: 'Ricky Spenser',
                    color: 'gray',
                    type: 'Incoming Call (2)',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    name: 'Ray Alton',
                    color: 'red',
                    type: 'Missed Call',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    name: 'George Atkins',
                    color: 'red',
                    type: 'Missed Call',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    name: 'Josephine Bunner',
                    color: 'gray',
                    type: 'Outgoing Video Call',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    name: 'Ricky Spenser',
                    color: 'gray',
                    type: 'Incoming Call (2)',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    name: 'Ray Alton',
                    color: 'red',
                    type: 'Missed Call',
                    time: '16 Mar',
                    avatar: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
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
/* pages/template/userlist/userlist01/userlist01.wxss */
</style>
