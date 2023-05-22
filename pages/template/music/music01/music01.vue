<template>
    <view style="height: 100%">
        <!-- pages/template/music/music01/music01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">音乐播放01模板</view>
        </cu-custom>

        <view class="scrollPage margin-xs bg-oc-gray-9 radius-lg">
            <view class="radius-lg">
                <view class="flex padding-sm justify-between">
                    <view class="flex padding-top-xs text-xxxl text-black">
                        <text class="cuIcon-close text-white"></text>
                    </view>
                    <view class="text-xxxl">
                        <view class="flex justify-center cuIcon-more text-blace"></view>
                    </view>
                </view>
                <view class="bg-white padding-bottom radius-xl" style="margin-top: 320rpx; z-index: -1; height: 960rpx">
                    <view style="padding-top: 300rpx">
                        <view class="text-xl text-black text-center">降E大调第1三重奏鸣曲</view>
                        <view class="text-center padding-top-sm"><text class="text-sm text-gray text-center">Trio Sonata for organ No. 1 in E fat major</text></view>
                        <view class="margin-top-xl text-center text-xxxl text-black padding-top-lg">
                            <text class="cuIcon-refresh padding-right-xl"></text>
                            <text class="cuIcon-likefill text-red padding-lr-xl"></text>
                            <text class="cuIcon-sort padding-left-xl"></text>
                        </view>
                        <view class="padding margin-lr margin-top-lg">
                            <view class="flex">
                                <view class="text-black padding-right-xs">1:20</view>
                                <view class="cu-progress round margin-top-xs xs">
                                    <view class="bg-grey" style="width: 25%"></view>
                                </view>
                                <view class="text-black padding-left-xs">5:'00'</view>
                            </view>
                        </view>
                        <view class="margin-top">
                            <view class="flex justify-center">
                                <view class="margin-right text-xxxl text-black flex align-center"><text class="cuIcon-backwardfill"></text></view>
                                <view class="cu-avatar xl round margin-lr-xl bg-oc-gray-9"><text class="cuIcon-playfill text-brown"></text></view>
                                <view class="margin-left text-xxxl text-black flex align-center"><text class="cuIcon-play_forward_fill"></text></view>
                            </view>
                        </view>
                        <view class="padding-lr margin-xxl">
                            <view
                                class="shadow-blur bg-img radius-lg"
                                style="
                                    background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1);
                                    height: 560rpx;
                                    margin-top: -1200rpx;
                                    z-index: 99;
                                    position: relative;
                                "
                            ></view>
                        </view>
                    </view>
                </view>
                <view class="padding-tb">
                    <view class="flex justify-between">
                        <view class="flex">
                            <view
                                class="cu-avatar round margin-left-sm"
                                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view
                                class="cu-avatar round margin-left-sm"
                                style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view
                                class="cu-avatar round margin-left-sm"
                                style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view class="cu-avatar round margin-left bg-oc-gray-7"><text class="cuIcon-more"></text></view>
                        </view>
                        <view class="flex">
                            <view class="padding-right-sm">
                                <button class="cu-btn round">200条评论</button>
                            </view>
                        </view>
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
// pages/template/music/music01/music01.js
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
/* pages/template/music/music01/music01.wxss */
.scrollPage {
    height: 100%;
    min-height: 86vh;
}
</style>
