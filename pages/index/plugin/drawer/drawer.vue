<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/drawer/drawer.wxml -->

        <scroll-view scroll-y :class="'cu-drawer-page ' + (modalName == 'viewModal' ? 'show' : '')">
            <cu-custom bgColor="bg-gradual-blue" :isBack="true">
                <view slot="content">全屏抽屉</view>
            </cu-custom>

            <view class="padding margin text-center">
                <view class="cu-btn bg-blue lg block shadow radius margin-xl" @tap="showModal" data-target="viewModal">打开抽屉</view>
            </view>

            <view class="margin padding bg-white radius-lg">
                <view class="flex justify-between">
                    <view class="text-black">操作说明</view>
                </view>
                <view class="padding-tb">
                    <view class="text-sm">1、点击『打开抽屉』左侧显示抽屉内容</view>
                    <view class="text-sm padding-tb-xs">2、点击抽屉右侧空白区域或右下键箭头标志，返回主页面</view>
                    <view class="text-sm">3、可用于展示商品大类、个人信息等场景</view>
                </view>
            </view>
            <!-- 版权和广告 -->
            <view style="margin-top: 40vh">
                <copyright compName="copyright"></copyright>
                <ad unit-id="adunit-7e063c3c010456be"></ad>
            </view>
        </scroll-view>

        <view :class="'cu-drawer-close ' + (modalName == 'viewModal' ? 'show' : '')" @tap="hideModal">
            <text class="cuIcon-pullright"></text>
        </view>

        <scroll-view scroll-y :class="'cu-drawer-window ' + (modalName == 'viewModal' ? 'show' : '')">
            <homePage></homePage>
        </scroll-view>
    </view>
</template>

<script>
import homePage from '@/pages/about/home/home';
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/drawer/drawer.js
const app = getApp();
export default {
    components: {
        homePage,
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            Custom: app.globalData.Custom,
            hasUserInfo: false,
            canIUse: uni.canIUse('button.open-type.getUserInfo'),
            TabCur: 1,
            scrollLeft: 0,
            userInfo: '',
            modalName: ''
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
        getUserInfo: function (e) {
            console.log(e);
            app.globalData.userInfo = e.detail.userInfo;
            this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true
            });
        },

        showModal(e) {
            this.setData({
                modalName: e.currentTarget.dataset.target
            });
        },

        hideModal(e) {
            this.setData({
                modalName: null
            });
        },

        tabSelect(e) {
            console.log(e);
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/drawer/drawer.wxss */
</style>
