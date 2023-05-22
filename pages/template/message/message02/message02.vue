<template>
    <view style="height: 100%">
        <!-- pages/template/message/message02/message02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">消息列表02模板</view>
        </cu-custom>

        <view class="">
            <view class="bg-white margin-xs radius-lg">
                <view class="radius-lg-top solid-bottom">
                    <view class="flex padding-sm justify-between padding-lr">
                        <view class="flex align-center text-xl text-black">消息</view>
                        <view class="flex align-center text-lg">
                            <view class="box-serach" style="width: 220rpx">
                                <view class="cu-bar search radius-lg">
                                    <view class="search-form round">
                                        <text class="cuIcon-search"></text>
                                        <input type="text" placeholder="搜索" confirm-type="search" />
                                    </view>
                                </view>
                            </view>
                            <view class="padding-sm text-xxl">
                                <view class="flex justify-center cuIcon-friend text-blace"></view>
                            </view>
                            <view class="padding-sm text-xxl">
                                <view class="flex justify-center cuIcon-settings text-blace"></view>
                            </view>
                        </view>
                    </view>
                    <view class="padding flex justify-between margin-lr-sm">
                        <view class="text-center">
                            <view class="cu-avatar lg radius bg-gradual-orange">
                                <text class="cuIcon-noticefill"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">通知</view>
                        </view>
                        <view class="text-center">
                            <view class="cu-avatar lg radius bg-gradual-blue">
                                <text class="cuIcon-radiobox"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">@我的</view>
                        </view>
                        <view class="text-center">
                            <view class="cu-avatar lg radius bg-gradual-green">
                                <text class="cuIcon-commentfill"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">评论</view>
                        </view>
                        <view class="text-center">
                            <view class="cu-avatar lg radius bg-gradual-pink">
                                <text class="cuIcon-appreciatefill"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">赞</view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar padding-tb-sm bg-gray" style="min-height: 64vh">
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-red-6">
                            <view class="cuIcon-notice text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-black">微博视频</view>
                            <view class="text-gray text-sm text-cut" style="width: 500rpx">您2019年05月01日15:22上传的视频转码</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">昨天</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-orange-4">
                            <view class="cuIcon-commentfill text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-black">未关注人消息</view>
                            <view class="text-gray text-sm">微博任务发来了新消息</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">昨天</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg bg-oc-indigo-5"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-red">Eleven1dream</view>
                            <view class="text-gray text-sm">嗨!我来啦~ 来撩你一下![5/15]</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">昨天'00':03</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg bg-oc-orange-4"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-black">丹麦小吐司</view>
                            <view class="text-gray text-sm">互粉哦，关注你了</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">4-31</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg bg-oc-orange-4"
                            style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-black">野生兔</view>
                            <view class="text-gray text-sm">有问题向你求助，快来快来啊阿啊</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">3-20</view>
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
// pages/template/message/message02/message02.js
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
/* pages/template/message/message02/message02.wxss */
</style>
