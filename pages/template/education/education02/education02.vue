<template>
    <view style="height: 100%">
        <!-- pages/template/education/education02/education02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">书籍学习02模板</view>
        </cu-custom>

        <view class="margin-xs">
            <view class="bg-white radius-lg">
                <view class="flex padding-xs justify-between">
                    <view class="flex">
                        <view class="padding-right-sm text-xl padding-top-xs">
                            <text class="cuIcon-back text-black"></text>
                        </view>
                    </view>
                </view>
                <view class="padding-tb-sm padding-lr">
                    <text class="text-xxl text-black text-bold">有声书</text>
                    <view class="text-df text-black text-bold padding-top-xs">随时随地，有温度、有情感地听本书</view>
                </view>
                <view class="bg-white radius-lg">
                    <view
                        class="bg-img bg-mask padding-sm margin-sm radius-lg"
                        style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1); height: 360rpx"
                    >
                        <view class="padding-sm text-white">
                            <view class="padding-xs text-xl">《要领》校长的领导力讲义</view>
                            <view class="padding-xs padding-left">杨斌教授亲自献声译者序</view>
                            <view class="flex align-end padding-xs padding-left justify-end padding-top-xxl">
                                <view class="bg-yellow light padding-xs margin-xs radius">
                                    <text class="text-brown">免费收听</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="padding-tb padding-lr">
                    <view class="flex justify-between">
                        <text class="text-xl text-black text-bold">所有有声书</text>
                        <view class="text-df text-gray flex align-center">
                            <checkbox class="grey" style="transform: scale(0.58, 0.58)"></checkbox>
                            仅显示未收听
                        </view>
                    </view>
                    <button class="cu-btn round margin-top bg-brown">最新</button>
                    <button class="cu-btn round margin-top margin-left-sm">最热</button>
                </view>

                <view class="flex margin-lr-sm padding-tb justify-start">
                    <view
                        class="bg-img radius margin-lr-xs"
                        style="background-image: url(https://image.meiye.art/pic_CYD_28h6ew2rYJFmR9Neh?imageMogr2/thumbnail/450x/interlace/1); height: 220rpx; width: 160rpx"
                    ></view>
                    <view class="text-black margin-left-sm" style="width: 420rpx">
                        <view class="text-left margin-top-sm">
                            <text class="text-lg text-black text-bold">《心智与阅读》有声书</text>
                        </view>
                        <view class="text-left margin-top-xs">
                            <text class="text-black">著名教育与心理学家教你如何提升阅读能力</text>
                        </view>
                        <view class="text-left margin-top-sm">
                            <text class="text-black">49.99点/会员价 29.99点</text>
                        </view>
                    </view>
                    <view class="margin-left-sm text-xl flex justify-center align-center" style="width: 40rpx">
                        <view class="cuIcon-right"></view>
                    </view>
                </view>

                <view class="flex margin-lr-sm padding-tb justify-start">
                    <view
                        class="bg-img radius margin-lr-xs"
                        style="background-image: url(https://image.meiye.art/pic_qjTGt13__1CvXWJxOo3Z7?imageMogr2/thumbnail/450x/interlace/1); height: 220rpx; width: 160rpx"
                    ></view>
                    <view class="text-black margin-left-sm" style="width: 420rpx">
                        <view class="text-left margin-top-sm">
                            <text class="text-lg text-black text-bold">《几度成功》有声书</text>
                        </view>
                        <view class="text-left margin-top-xs">
                            <text class="text-black">科学研究揭示高绩效团队的3个终极密码</text>
                        </view>
                        <view class="text-left margin-top-sm">
                            <text class="text-black">49.99点/会员价 29.99点</text>
                        </view>
                    </view>
                    <view class="margin-left-sm text-xl flex justify-center align-center" style="width: 40rpx">
                        <view class="cuIcon-right"></view>
                    </view>
                </view>

                <view class="flex margin-lr-sm padding-tb justify-start">
                    <view
                        class="bg-img radius margin-lr-xs"
                        style="background-image: url(https://image.meiye.art/pic_1uwlbRtyrU6opIfZs69-O?imageMogr2/thumbnail/450x/interlace/1); height: 220rpx; width: 160rpx"
                    ></view>
                    <view class="text-black margin-left-sm" style="width: 420rpx">
                        <view class="text-left margin-top-sm">
                            <text class="text-lg text-black text-bold">《打造最优工作节奏》有声书</text>
                        </view>
                        <view class="text-left margin-top-xs">
                            <text class="text-black">利用大脑天行高效工作</text>
                        </view>
                        <view class="text-left margin-top-sm">
                            <text class="text-black">49.99点/会员价 29.99点</text>
                        </view>
                    </view>
                    <view class="margin-left-sm text-xl flex justify-center align-center" style="width: 40rpx">
                        <view class="cuIcon-right"></view>
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
// pages/template/education/education02/education02.js
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
/* pages/template/education/education02/education02.wxss */
</style>
