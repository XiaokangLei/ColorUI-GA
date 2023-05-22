<template>
    <view style="height: 100%">
        <!-- pages/template/user/user01/user01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">个人中心01</view>
        </cu-custom>

        <!-- 页面 -->
        <view class="bg-white margin-xs radius-lg" style="min-height: 90vh">
            <!-- 顶部个人信息 -->
            <view class="bg-white radius-lg">
                <view class="flex padding-sm justify-between">
                    <view class="padding-xs text-xxl text-black">
                        <view>
                            张子栋
                            <text class="text-gray text-df">/ 平台运营</text>
                        </view>
                        <view class="text-gray text-df padding-top-sm">北京仓颉数源网络文化有限公司</view>
                    </view>
                    <view class="">
                        <view
                            class="cu-avatar xl round"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                    </view>
                </view>
            </view>
            <!-- 基本数据 -->
            <view class="cu-list grid col-4 no-border padding-xs">
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">500</view>
                    <text>信用值</text>
                </view>
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">V3</view>
                    <text>红度值</text>
                </view>
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">95</view>
                    <text>能者</text>
                </view>
                <view class="cu-item">
                    <view class="text-black text-bold text-xxl">83</view>
                    <text>任务数</text>
                </view>
            </view>
            <!-- 助力/推荐/邀请 -->
            <view class="margin-top-xs padding-lr-sm">
                <view class="bg-gradual-pinknew radius-lg shadow-blur">
                    <view class="flex padding-sm justify-between">
                        <view class="padding-xs text-xxl">
                            <view>挖贝提速</view>
                        </view>
                        <view class="padding-sm">
                            <view>当前加速：30%</view>
                        </view>
                    </view>
                    <view class="flex justify-between">
                        <view class="padding-xs text-xxl">
                            <view class="flex">
                                <view class="margin-left-xl cu-btn round bg-pink light sm">20%</view>
                                <view class="margin-left-xl cu-btn round bg-white sm text-red">30%</view>
                                <view class="margin-left-xl cu-btn round bg-pink light sm">50%</view>
                            </view>
                        </view>
                        <view class="padding-xs">
                            <view class="margin-right-sm cu-btn round bg-pink light sm">100%</view>
                        </view>
                    </view>
                    <view class="flex padding-lr justify-between">
                        <view class="cu-progress round striped active xs">
                            <view class="bg-orange" style="width: 30%"></view>
                            <view class="bg-pink light" style="width: 70%"></view>
                        </view>
                    </view>
                    <view class="flex justify-between">
                        <view class="padding-xs">
                            <view class="flex tet-df">
                                <view class="margin-left-xl"><text class="margin-left">2级</text></view>
                                <view class="margin-left-xl"><text class="margin-left">3级</text></view>
                                <view class="margin-left-xl"><text class="margin-left">4级</text></view>
                            </view>
                        </view>
                        <view class="padding-xs">
                            <view class="margin-right">5级</view>
                        </view>
                    </view>
                    <view class="flex padding-sm justify-between">
                        <view class="padding-xs text-xxl">
                            <view class="flex">
                                <view class="cu-btn round line">助力明细</view>
                                <view class="cu-btn round line margin-left-sm">我的推荐</view>
                            </view>
                        </view>
                        <view class="padding-xs">
                            <view class="cu-btn round bg-white text-red">邀新助力</view>
                        </view>
                    </view>
                </view>
            </view>
            <!-- 常用功能 -->
            <view class="cu-bar margin-top-sm">
                <view class="action">
                    <text class="text-xl">常用功能</text>
                </view>
            </view>
            <view class="cu-list grid col-4 no-border text-black">
                <view class="cu-item" @tap="parseEventDynamicCode($event, item.bindtap)" v-for="(item, index) in iconList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'" style="font-size: 56rpx">
                        <view class="cu-tag badge" v-if="item.badge != 0">
                            <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                        </view>
                    </view>

                    <text>{{ item.name }}</text>
                </view>
            </view>
            <!-- 其他功能 -->
            <view class="cu-bar margin-top-xs">
                <view class="action">
                    <text class="text-xl">其他功能</text>
                </view>
            </view>
            <view class="cu-list grid col-4 no-border text-black radius-lg">
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
// pages/template/user/user01/user01.js
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
                    name: '能贝'
                },
                {
                    icon: 'presentfill',
                    color: 'red',
                    badge: 0,
                    name: '活动',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'formfill',
                    color: 'purple',
                    badge: 0,
                    name: '订单',
                    bindtap: 'showResource'
                },
                {
                    icon: 'shopfill',
                    color: 'green',
                    badge: 0,
                    name: '投递',
                    bindtap: 'bindPoint'
                },
                {
                    icon: 'likefill',
                    color: 'red',
                    badge: 0,
                    name: '关注',
                    bindtap: 'bindCollect'
                },
                {
                    icon: 'favorfill',
                    color: 'orange',
                    badge: 0,
                    name: '收藏',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'noticefill',
                    color: 'cyan',
                    badge: 0,
                    name: '下载',
                    bindtap: 'showResource'
                },
                {
                    icon: 'rankfill',
                    color: 'blue',
                    badge: 0,
                    name: '统计',
                    bindtap: 'bindPoint'
                }
            ],
            iconOtherList: [
                {
                    icon: 'mail',
                    color: 'black',
                    badge: 0,
                    name: '客服'
                },
                {
                    icon: 'service',
                    color: 'black',
                    badge: 0,
                    name: '投诉建议',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'settings',
                    color: 'black',
                    badge: 0,
                    name: '设置',
                    bindtap: 'showResource'
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
/* pages/template/user/user01/user01.wxss */
</style>
