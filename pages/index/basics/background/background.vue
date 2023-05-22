<template>
    <view style="height: 100%">
        <!-- pages/index/basics/background/background.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">背景</view>
        </cu-custom>

        <view class="cu-bar solid-bottom bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                十级纯色背景 bg-oc-colorName-n
            </view>
        </view>

        <view class="grid col-4 padding-xs bg-white margin-sm radius-lg">
            <view class="padding-xs" v-for="(items, index) in ColorListNew" :key="index">
                <block v-for="(item, j) in 10" :key="j">
                    <view :class="'bg-oc-' + items.name + '-' + j + ' radius padding-tb-xs text-center margin-tb-xs'">
                        <view class="text-sm">{{ items.name }}-{{ j }}</view>
                    </view>
                </block>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                深色背景
            </view>
        </view>

        <view class="grid col-3 padding-sm margin-sm bg-white radius-lg">
            <view class="padding-sm" v-for="(item, index) in ColorList" :key="index">
                <view :class="'bg-' + item.name + ' padding-sm radius-lg text-center'">
                    <view class="padding-top-xs">{{ item.name }}</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                浅色背景
            </view>
        </view>

        <view class="grid col-3 bg-white margin-sm padding-sm radius-lg">
            <view class="padding-sm" v-if="index < 12" v-for="(item, index) in ColorList" :key="index">
                <view :class="'bg-' + item.name + ' padding-tb-sm padding-lr-xs radius-lg text-center light'">
                    <view class="padding-top-xs">{{ item.name }} light</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                渐变背景
            </view>
        </view>

        <view class="grid col-2 bg-white margin-sm padding-sm radius-lg">
            <view class="padding-sm">
                <view class="bg-gradual-red padding radius-lg text-center shadow-blur">
                    <view class="text-lg">red</view>
                    <view class="margin-top-sm">#f43f3b-#ec008c</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-orange padding radius-lg text-center shadow-blur">
                    <view class="text-lg">orange</view>
                    <view class="margin-top-sm">#ff9700-#ed1c24</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-green padding radius-lg text-center shadow-blur">
                    <view class="text-lg">green</view>
                    <view class="margin-top-sm">#39b54a-#8dc63f</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-blue padding radius-lg text-center shadow-blur">
                    <view class="text-lg">blue</view>
                    <view class="margin-top-sm">#0081ff-#1cbbb4</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-purple padding radius-lg text-center shadow-blur">
                    <view class="text-lg">purple</view>
                    <view class="margin-top-sm">#9000ff-#5e'00'ff</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-pink padding radius-lg text-center shadow-blur">
                    <view class="text-lg">pink</view>
                    <view class="margin-top-sm">#ec008c-#6739b6</view>
                </view>
            </view>

            <view class="padding-sm">
                <view class="bg-gradual-pinknew padding radius-lg text-center shadow-blur">
                    <view class="text-lg">pinknew</view>
                    <view class="margin-top-sm">#fea894-#ff1047</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-cyan padding radius-lg text-center shadow-blur">
                    <view class="text-lg">天青</view>
                    <view class="margin-top-sm text-Abc">#06edfe - #48b2fe</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                渐变高亮
            </view>
        </view>

        <view class="grid col-2 bg-white margin-sm padding-sm radius-lg">
            <view class="padding-sm">
                <view class="bg-gradual-red-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">red</view>
                    <view class="margin-top-sm">#f9d3d0</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-orange-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">orange</view>
                    <view class="margin-top-sm">#fcdec7</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-green-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">green</view>
                    <view class="margin-top-sm">#cfeece</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-blue-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">blue</view>
                    <view class="margin-top-sm">#bfe0ff</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-purple-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">purple</view>
                    <view class="margin-top-sm">dfd0f7</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-pink-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">pink</view>
                    <view class="margin-top-sm">#edd1f2</view>
                </view>
            </view>

            <view class="padding-sm">
                <view class="bg-gradual-pinknew-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">pinknew</view>
                    <view class="margin-top-sm">#f7cee5</view>
                </view>
            </view>
            <view class="padding-sm">
                <view class="bg-gradual-cyan-light padding radius-lg text-center shadow-blur">
                    <view class="text-lg">cyan</view>
                    <view class="margin-top-sm">#cdefff</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                图片背景
            </view>
        </view>

        <view class="bg-white margin-sm padding-sm radius-lg">
            <view
                class="bg-img bg-mask padding-sm margin-sm radius-lg"
                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1); height: 360rpx"
            >
                <view class="padding-xl text-white">
                    <view class="padding-xs text-xl">小黄人大眼萌</view>
                    <view class="padding-xs">Only the guilty need fear me.</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                透明背景(文字层)
            </view>
        </view>

        <view class="bg-white margin-sm padding-sm radius-lg">
            <view class="grid col-2 padding-xs">
                <view
                    class="bg-img padding-bottom-xl"
                    style="background-image: url(https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1); height: 207rpx"
                >
                    <view class="bg-shadeTop padding padding-bottom-xl">上面开始</view>
                </view>
                <view
                    class="bg-img padding-top-xl flex align-end"
                    style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1); height: 207rpx"
                >
                    <view class="bg-shadeBottom padding padding-top-xl flex-sub">下面开始</view>
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
// pages/index/basics/background/background.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            ColorList: app.globalData.ColorList,

            ColorListNew: [
                {
                    name: 'red'
                },
                {
                    name: 'orange'
                },
                {
                    name: 'yellow'
                },
                {
                    name: 'pink'
                },
                {
                    name: 'grape'
                },
                {
                    name: 'violet'
                },
                {
                    name: 'indigo'
                },
                {
                    name: 'blue'
                },
                {
                    name: 'cyan'
                },
                {
                    name: 'teal'
                },
                {
                    name: 'green'
                },
                {
                    name: 'lime'
                },
                {
                    name: 'gray'
                }
            ],

            j: ''
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
/* pages/index/basics/background/background.wxss */
</style>
