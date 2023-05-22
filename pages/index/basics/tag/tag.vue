<template>
    <view style="height: 100%">
        <!-- pages/index/basics/tag/tag.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">标签</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                标签形状
            </view>
        </view>

        <view class="flex justify-around padding bg-white margin-sm radius-df">
            <view class="cu-tag margin-right">默认</view>
            <view class="cu-tag round margin-right">椭圆</view>
            <view class="cu-tag radius margin-right">圆角</view>
        </view>

        <view class="cu-bar bg-white margin-top solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                标签尺寸
            </view>
        </view>

        <view class="padding bg-white margin-sm radius-df flex justify-around">
            <view class="cu-tag radius sm margin-right">小尺寸</view>
            <view class="cu-tag radius margin-right">普通尺寸</view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                标签颜色
            </view>
        </view>

        <view class="bg-white padding-sm flex flex-wrap margin-sm radius-lg">
            <view class="padding-xs" v-if="item.name != 'gray'" v-for="(item, index) in ColorList" :key="index">
                <view :class="'cu-tag bg-' + item.name + ' radius'">{{ item.title }}</view>
            </view>
            <view class="padding-xs" v-if="item.name != 'gray' && item.name != 'black' && item.name != 'white'" v-for="(item, index) in ColorList" :key="index">
                <view :class="'cu-tag bg-' + item.name + ' light radius'">{{ item.title }}</view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                镂空标签
            </view>
        </view>

        <view class="bg-white padding-sm flex flex-wrap margin-sm radius-lg">
            <view class="padding-xs" v-if="item.name != 'white'" v-for="(item, index) in ColorList" :key="index">
                <view :class="'cu-tag line-' + item.name">{{ item.title }}</view>
            </view>
            <view class="padding-xs" v-if="item.name != 'white'" v-for="(item, index) in ColorList" :key="index">
                <view :class="'cu-tag line-' + item.name + ' round'">{{ item.title }}</view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                胶囊样式
            </view>
        </view>

        <view class="bg-white padding-sm flex flex-wrap margin-sm radius-lg">
            <view class="margin-bottom">
                <view class="cu-capsule margin-right">
                    <view class="cu-tag bg-red">
                        <text class="cuIcon-likefill"></text>
                    </view>
                    <view class="cu-tag line-red">12</view>
                </view>
                <view class="cu-capsule margin-right">
                    <view class="cu-tag bg-red">标签</view>
                    <view class="cu-tag line-red">12</view>
                </view>
                <view class="cu-capsule round margin-right">
                    <view class="cu-tag bg-blue">
                        <text class="cuIcon-likefill"></text>
                    </view>
                    <view class="cu-tag line-blue">23</view>
                </view>
                <view class="cu-capsule round margin-right">
                    <view class="cu-tag bg-blue">标签</view>
                    <view class="cu-tag line-blue">123</view>
                </view>
            </view>
            <view class="">
                <view class="cu-capsule radius margin-right">
                    <view class="cu-tag bg-orange">
                        <text class="cuIcon-likefill"></text>
                    </view>
                    <view class="cu-tag line-orange">23</view>
                </view>
                <view class="cu-capsule radius margin-right">
                    <view class="cu-tag bg-green">标签</view>
                    <view class="cu-tag line-green">23</view>
                </view>
                <view class="cu-capsule radius margin-right">
                    <view class="cu-tag bg-brown sm">
                        <text class="cuIcon-likefill"></text>
                    </view>
                    <view class="cu-tag line-brown sm">23</view>
                </view>
                <view class="cu-capsule radius margin-left">
                    <view class="cu-tag bg-pink sm">标签</view>
                    <view class="cu-tag line-brown sm">23</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                提示标签
            </view>
        </view>

        <view class="bg-white padding flex justify-between align-center margin-sm radius-lg">
            <view class="cu-avatar xl radius">
                L
                <view class="cu-tag badge">99+</view>
            </view>
            <view class="cu-avatar xl radius" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)">
                <view class="cu-tag badge">9</view>
            </view>
            <view class="cu-avatar xl radius">
                <view class="cu-tag badge"></view>
                <text class="cuIcon-people"></text>
            </view>
            <view class="cu-avatar xl radius">
                <view class="cu-tag badge">99+</view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                图标标签
            </view>
        </view>

        <view class="bg-white margin-sm radius-df">
            <view class="cu-list grid col-4 no-border margin-sm">
                <view class="cu-item" v-for="(item, index) in iconList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color">
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
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/tag/tag.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            ColorList: app.globalData.ColorList,
            iconList: [
                {
                    icon: 'cardboardfill',
                    color: 'red',
                    badge: 120,
                    name: 'VR'
                },
                {
                    icon: 'recordfill',
                    color: 'orange',
                    badge: 1,
                    name: '录像'
                },
                {
                    icon: 'picfill',
                    color: 'yellow',
                    badge: 8,
                    name: '图像'
                },
                {
                    icon: 'noticefill',
                    color: 'olive',
                    badge: 22,
                    name: '通知'
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
/* pages/index/basics/tag/tag.wxss */
</style>
