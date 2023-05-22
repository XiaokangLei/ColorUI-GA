<template>
    <view style="height: 100%">
        <!-- pages/template/education/education01/education01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">书籍学习01模板</view>
        </cu-custom>

        <view class="margin-xs">
            <view class="bg-white radius-lg" style="min-height: 90vh">
                <view class="flex padding-xs justify-between">
                    <view class="flex">
                        <view class="padding-right-sm text-xl padding-top-xs">
                            <text class="cuIcon-back text-black"></text>
                        </view>
                    </view>
                    <view class="flex">
                        <view class="padding-tb-xs text-lg text-black">
                            <view>电子书</view>
                        </view>
                    </view>
                    <view class="flex text-xxl">
                        <view class="cuIcon-forward text-black padding-top-xs"></view>
                    </view>
                </view>
                <view class="flex margin-lr-sm padding-tb justify-start">
                    <view
                        class="bg-img radius margin-lr-xs"
                        style="background-image: url(https://image.meiye.art/pic_CYD_28h6ew2rYJFmR9Neh?imageMogr2/thumbnail/450x/interlace/1); height: 230rpx; width: 160rpx"
                    ></view>
                    <view class="text-black margin-left-sm" style="width: 480rpx">
                        <view class="text-right">
                            <view class="cu-avatar round bg-black">書</view>
                        </view>
                        <view class="text-left margin-top-sm">
                            <text class="text-xl text-black text-bold">聪明人的才华战略</text>
                        </view>
                        <view class="text-left margin-top-xs">
                            <text class="text-black">你多才多艺却一事无成的人生，需要一份才华战略来拯救！</text>
                        </view>
                    </view>
                </view>

                <view class="padding-tb solid-bottom">
                    <view class="flex text-center bg-white">
                        <view class="flex flex-sub flex-column">
                            <view class="text-xl text-black text-bold">14.2万</view>
                            <view class="margin-top-xs text-sm text-gray">字数</view>
                        </view>
                        <view class="flex flex-sub flex-column">
                            <view class="text-xl text-black text-bold">5.8MB</view>
                            <view class="margin-top-xs text-sm text-gray">文件大小</view>
                        </view>
                        <view class="flex flex-sub flex-column">
                            <view class="text-xl text-black text-bold">754</view>
                            <view class="margin-top-xs text-sm text-gray">阅读次数</view>
                        </view>
                    </view>
                </view>

                <view class="margin-tb-sm margin-left text-black text-bold text-lg">作者</view>

                <view class="cu-list menu margin-tb-lg padding-bottom solid-bottom">
                    <view class="cu-item arrow" style="height: 120rpx">
                        <view class="content">
                            <image
                                src="https://image.meiye.art/pic__Y1hiTPzdjSL1bvsUODgK?imageMogr2/thumbnail/450x/interlace/1"
                                class="png radius"
                                style="height: 120rpx; width: 100rpx"
                            ></image>
                            <text class="text-black text-bold padding-lr-sm">莱昂纳多·洛斯佩纳托</text>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu margin-tb-lg padding-bottom solid-bottom">
                    <view class="cu-item arrow" style="height: 120rpx">
                        <view class="content">
                            <view class="icon-plant text-black text-bold">
                                <text class="text-black text-bold padding-lr-sm">免费试读</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="margin-tb-xs margin-left text-black text-bold text-lg">电子书简介</view>
                <view class="margin padding-bottom" style="line-height: 48rpx">
                    你是不是经常心血来潮，兴趣、工作换了一个又一个？你是不是知道自己不要什么，但不知道想要什么？你是不是还在寻找能够与自己的天赋和才华匹配的人生使命？你多才多艺却一事无成的人生，需要一份才华战略来拯救！
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
// pages/template/education/education01/education01.js
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
/* pages/template/education/education01/education01.wxss */
.bg-img-blur {
    height: 650rpx;
    filter: blur(60rpx);
    z-index: -999;
    background-image: url('https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1');
}
</style>
