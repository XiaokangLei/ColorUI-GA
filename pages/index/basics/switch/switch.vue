<template>
    <view style="height: 100%">
        <!-- pages/index/basics/switch/switch.wxml -->

        <!-- 顶部自定义导航栏 -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">开关</view>
        </cu-custom>

        <!-- 基本样式 -->
        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基本样式
            </view>
        </view>

        <view class="margin-tb margin-lr-sm">
            <view class="cu-form-group radius-lg-top">
                <view class="title">未启用</view>
                <switch></switch>
            </view>
            <view class="cu-form-group">
                <view class="title">已启用</view>
                <switch checked></switch>
            </view>
            <view class="cu-form-group">
                <view class="title">禁用-默认未启用</view>
                <switch disabled></switch>
            </view>
            <view class="cu-form-group radius-lg-bottom">
                <view class="title">禁用-默认已启用</view>
                <switch checked disabled></switch>
            </view>
        </view>

        <!-- 自定义颜色、图标、样式 -->
        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                自定义
            </view>
        </view>

        <view class="margin-tb margin-lr-sm">
            <view class="cu-form-group margin-top radius-lg-top">
                <view class="title">定义颜色</view>
                <switch class="red" checked></switch>
                <switch class="blue" checked></switch>
            </view>

            <view class="cu-form-group">
                <view class="title">定义图标</view>
                <switch class="switch-sex" checked></switch>
                <switch class="switch-music" checked></switch>
            </view>

            <view class="cu-form-group radius-lg-bottom">
                <view class="title">方形开关</view>
                <switch class="orange radius" checked></switch>
            </view>
        </view>

        <!-- 绑定事件 -->
        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                绑定事件
            </view>
        </view>

        <view class="cu-form-group margin-top margin-lr-sm radius-df">
            <view class="title">当前值：{{ sex }}</view>
            <switch class="switch-sex" @change="switchSex"></switch>
        </view>

        <!-- 扩展样式 -->
        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                扩展样式(蛋黄派开关)
            </view>
        </view>

        <view class="flex justify-center margin-sm bg-white padding-sm radius-df">
            <view @tap.stop.prevent="eggClick">
                <egg-input id="egg-toggle" type="checkbox" />
                <egg-label for="egg-toggle">
                    <span id="egg" v-if="ischecked == undefined"></span>
                    <span id="egg" v-else :class="ischecked ? 'egg-flip' : 'unegg-flip'"></span>
                </egg-label>
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
// pages/index/basics/switch/switch.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            sex: '女',
            ischecked: undefined,
            undefined: ''
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
        /**
         * 开关事件
         * @param {*} e
         */
        switchSex: function (e) {
            if (e.detail.value) {
                this.setData({
                    sex: '男'
                });
            } else {
                this.setData({
                    sex: '女'
                });
            }
        },

        // 蛋黄派开关
        eggClick() {
            this.setData({
                ischecked: !this.ischecked
            });
        }
    }
};
</script>
<style>
/* pages/index/basics/switch/switch.wxss */
</style>
