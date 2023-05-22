<template>
    <view style="height: 100%">
        <!-- pages/about/appreciate/appreciate.wxml -->

        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">致谢</view>
        </cu-custom>

        <scroll-view scroll-y class="scrollPage">
            <view class="margin-xl bg-white padding-xl radius-lg shadow-lg">
                <view class="text-center margin-bottom text-lg text-bold text-blue">⛱️致谢</view>
                <view class="text-content">
                    <view class="flex flex-wrap" @tap="CopyText" data-link="https://github.com/weilanwl/ColorUI">
                        <view class="basis-xl">
                            <view class="text-cut" style="width: 500rpx">ColorUI: https://github.com/weilanwl/ColorUI</view>
                        </view>
                        <view class="cuIcon-copy text-blue"></view>
                    </view>
                    <view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://github.com/TaleLin/lin-ui">
                        <view class="basis-xl">
                            <view class="text-cut" style="width: 500rpx">Lin-UI: https://github.com/TaleLin/lin-ui</view>
                        </view>
                        <view class="cuIcon-copy text-blue"></view>
                    </view>
                    <view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://github.com/vant-ui/vant-weapp">
                        <view class="basis-xl">
                            <view class="text-cut" style="width: 500rpx">Vant: https://github.com/vant-ui/vant-weapp</view>
                        </view>
                        <view class="cuIcon-copy text-blue"></view>
                    </view>
                    <view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://www.meiye.art/inspiration">
                        <view class="basis-xl">
                            <view class="text-cut" style="width: 500rpx">MeiYe: https://www.meiye.art/inspiration</view>
                        </view>
                        <view class="cuIcon-copy text-blue"></view>
                    </view>
                    <view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://gitee.com/susuhhhhhh/wxmini_demo">
                        <view class="basis-xl">
                            <view class="text-cut" style="width: 500rpx">WxminiDemo: https://gitee.com/susuhhhhhh/wxmini_demo</view>
                        </view>
                        <view class="cuIcon-copy text-blue"></view>
                    </view>
                </view>
            </view>
            <view class="margin-top">
                <copyright compName="copyright"></copyright>
            </view>
            <ad unit-id="adunit-51012464dc9a71e9" ad-type="video" ad-theme="white"></ad>
        </scroll-view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/about/appreciate/appreciate.js
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
    methods: {
        CopyText(e) {
            uni.setClipboardData({
                data: e.currentTarget.dataset.link,
                success: (res) => {
                    uni.showToast({
                        title: '已复制',
                        duration: 1000
                    });
                }
            });
        }
    }
};
</script>
<style>
/* pages/about/appreciate/appreciate.wxss */
</style>
