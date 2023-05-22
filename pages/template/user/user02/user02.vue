<template>
    <view style="height: 100%">
        <!-- pages/template/user/user02/user02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">个人中心02</view>
        </cu-custom>

        <!-- 页面 -->
        <view class="">
            <!-- 顶部个人信息 -->
            <view class="bg-white">
                <view class="flex padding">
                    <view class="padding-lr-xs">
                        <view
                            class="cu-avatar lg round"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                    </view>
                    <view class="padding-xs text-xl text-black">
                        <view>Hello，啄木鸟</view>
                        <view class="cu-tag round line-green sm">已减排22.2g ></view>
                    </view>
                </view>
            </view>
            <!-- 基本数据 -->
            <view class="cu-list grid col-4 no-border padding-lr-xs radius-lg-bottom">
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">6</view>
                    <text>优惠券</text>
                </view>
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">0</view>
                    <text>权益卡</text>
                </view>
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">4</view>
                    <text>保修卡</text>
                </view>
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">11</view>
                    <text>收据</text>
                </view>
            </view>
            <!-- 助力/推荐/邀请 -->
            <view class="margin-top-sm padding-lr-xs">
                <view class="bg-brown light radius-lg shadow-blur">
                    <view class="flex padding-tb-sm padding-lr-sm justify-between">
                        <view class="padding-xs">
                            <view>9.9元开通超级会员最高可省￥40</view>
                        </view>
                        <view class="">
                            <view class="cu-btn round bg-black">开通会员</view>
                        </view>
                    </view>
                </view>
            </view>
            <!-- 常用功能 -->
            <view class="cu-bar margin-lr-xs margin-top-sm grid col-4 no-border bg-white radius-lg-top">
                <view class="action">
                    <text class="text-xl text-black">我的订单</text>
                </view>
                <view class="action">
                    <text class="text-lg">
                        全部订单
                        <text class="cuIcon-right"></text>
                    </text>
                </view>
            </view>
            <view class="cu-list grid col-4 no-border text-black margin-lr-xs padding-bottom radius-lg-bottom">
                <view class="cu-item" @tap="parseEventDynamicCode($event, item.bindtap)" v-for="(item, index) in iconList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'" style="font-size: 56rpx">
                        <view class="cu-tag badge" v-if="item.badge != 0">
                            <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                        </view>
                    </view>

                    <text>{{ item.name }}</text>
                </view>
            </view>

            <view class="margin-top-sm padding-lr-xs">
                <view class="bg-white light radius-lg shadow-blur">
                    <view class="flex padding-tb-sm padding-lr-sm justify-between">
                        <view class="padding-xs">
                            <view class="text-xl text-black">惊喜连连·洁净一秋</view>
                            <view class="padding-top-xs">
                                家居清洗限时
                                <text class="text-red text-bold">6.6折</text>
                                <text class="cuIcon-roundrightfill text-red"></text>
                            </view>
                        </view>
                        <view class="">
                            <view class="cu-btn round bg-gradual-pinknew margin-top-sm">6折优惠</view>
                        </view>
                    </view>
                </view>
            </view>
            <!-- 其他功能 -->
            <view class="cu-bar margin-lr-xs margin-top grid col-4 no-border bg-white radius-lg-top">
                <view class="action">
                    <text class="text-xl">其他功能</text>
                </view>
            </view>
            <view class="cu-list grid col-4 no-border text-black margin-lr-sm padding-bottom radius-lg-bottom">
                <view class="cu-item" @tap="parseEventDynamicCode($event, item.bindtap)" v-for="(item, index) in iconOtherList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'" style="font-size: 56rpx">
                        <view class="cu-tag badge" v-if="item.badge != 0">
                            <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                        </view>
                    </view>

                    <text>{{ item.name }}</text>
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
// pages/template/user/user02/user02.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            iconList: [
                {
                    icon: 'moneybagfill',
                    color: 'blue',
                    badge: 0,
                    name: '待接单'
                },
                {
                    icon: 'presentfill',
                    color: 'red',
                    badge: 0,
                    name: '待上门',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'formfill',
                    color: 'purple',
                    badge: 11,
                    name: '待评价',
                    bindtap: 'showResource'
                },
                {
                    icon: 'shopfill',
                    color: 'green',
                    badge: 0,
                    name: '返修/售后',
                    bindtap: 'bindPoint'
                }
            ],
            iconOtherList: [
                {
                    icon: 'location',
                    color: 'blue',
                    badge: 0,
                    name: '地址管理'
                },
                {
                    icon: 'service',
                    color: 'blue',
                    badge: 0,
                    name: '电话客服',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'mark',
                    color: 'blue',
                    badge: 0,
                    name: '在线客服',
                    bindtap: 'showResource'
                },
                {
                    icon: 'mail',
                    color: 'blue',
                    badge: 0,
                    name: '投诉',
                    bindtap: 'bindCollect'
                },
                {
                    icon: 'settings',
                    color: 'blue',
                    badge: 0,
                    name: '设置',
                    bindtap: 'bindZan'
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
/* pages/template/user/user02/user02.wxss */
</style>
