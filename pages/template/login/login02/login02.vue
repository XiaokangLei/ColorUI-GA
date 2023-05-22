<template>
    <view style="height: 100%">
        <!-- pages/template/login/login02/login02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">登录注册02模板</view>
        </cu-custom>

        <view class="margin-xs">
            <view class="bg-white radius-lg" style="min-height: 90vh">
                <view class="padding-tb padding-lr text-center">
                    <text class="text-xxl text-black">手机号快捷登录</text>
                </view>

                <view class="margin-lr padding">
                    <view class="padding-tb-sm">
                        <input placeholder="请输入手机号" />
                    </view>
                    <view class="flex justify-between padding-tb-sm">
                        <input placeholder="请输入验证码" />
                        <view class="text-gray">获取验证码</view>
                    </view>
                </view>

                <view class="padding-tb-xxl padding-top padding-lr-xs">
                    <view class="flex flex-column margin-sm">
                        <button class="cu-btn xxl bg-gradual-pinknew round">登录</button>
                    </view>
                    <view class="padding-top text-center text-blue text-lg padding-bottom-xxl">账号密码登录 | 登录遇到问题</view>
                </view>

                <view class="padding-tb-xxl padding-top padding-lr-xs" style="margin-top: 20vh">
                    <view class="padding-top text-center text-gray text-df">——— 社交账号直接登录 ———</view>
                    <view class="padding text-center">
                        <view class="cu-avatar round margin-right bg-green"><text class="icon-wechat text-lg"></text></view>
                        <view class="cu-avatar round margin-right bg-cyan"><text class="icon-tencent-qq text-lg"></text></view>
                        <view class="cu-avatar round margin-right bg-red"><text class="icon-sina-weibo text-lg"></text></view>
                        <view class="cu-avatar round margin-right bg-black"><text class="icon-apple text-lg"></text></view>
                    </view>
                    <view class="padding-lr-xl text-center text-gray padding-top-sm">
                        未注册的手机号登录时将自动注册，且代表您已经同意
                        <text class="solids-bottom">用户协议</text>
                        和
                        <text class="solid-bottom">隐私政策</text>
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
// pages/template/login/login02/login02.js
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
/* pages/template/login/login02/login02.wxss */
</style>
