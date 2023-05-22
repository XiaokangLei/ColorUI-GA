<template>
    <view style="height: 100%">
        <!-- pages/about/about/about.wxml -->

        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">关于</view>
        </cu-custom>

        <scroll-view scroll-y class="scrollPage">
            <view class="margin-xl bg-white padding-xl radius-lg shadow-lg">
                <view class="text-center margin-bottom text-xl text-bold text-blue">🌈ColorUI GA</view>
                <view class="text-content">
                    <view class="margin-top-lg">Hi！开发者~欢迎使用 ColorUI GA 组件库！</view>
                    <view class="margin-top-sm">
                        该项目是基于 ColorUI 2.0
                        开发的小程序css组件库。在原组件库的基础上会增加部分样式和模板，长期更新，如果您有好的想法请移步到Github提交Issues。页面模板努力开发中，每周更新。
                    </view>
                    <view class="margin-top-sm">更多功能敬请期待！</view>
                    <view class="margin-top text-right text-blue">By L.</view>
                    <view class="margin-top-sm text-right text-blue">2022/10/12</view>
                </view>
            </view>

            <view class="margin-xl bg-white padding-xl radius-lg shadow-lg">
                <view class="text-center margin-bottom text-xl text-bold text-blue">支持作者</view>
                <view class="text-content text-center" @tap="support">
                    <button class="cu-btn bg-orange light lg">点击观看15秒视频支持作者~</button>
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
// pages/about/about/about.js
let videoAd = null;
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
    onLoad(options) {
        this.onLoadClone3389(options);
    },
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
         * 生命周期函数--监听页面加载
         */
        onLoadClone3389(options) {},

        /**
         * 复制内容到剪切板
         */
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
        },

        /**
         * 激励视频广告
         */
        support() {
            // 在页面onLoad回调事件中创建激励视频广告实例
            if (uni.createRewardedVideoAd) {
                videoAd = uni.createRewardedVideoAd({
                    adUnitId: 'adunit-ecd9bb8eb3d6e4ac'
                });
                videoAd.onLoad(() => {});
                videoAd.onError((err) => {});
                videoAd.onClose((res) => {});
            }
            // 用户触发广告后，显示激励视频广告
            if (videoAd) {
                videoAd.show().catch(() => {
                    // 失败重试
                    videoAd
                        .load()
                        .then(() => videoAd.show())
                        .catch((err) => {
                            console.log('激励视频 广告显示失败');
                        });
                });
            }
        }
    }
};
</script>
<style>
/* pages/about/about/about.wxss */
</style>
