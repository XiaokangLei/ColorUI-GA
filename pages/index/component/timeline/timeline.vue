<template>
    <view style="height: 100%">
        <!-- pages/index/component/timeline/timeline.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">时间轴</view>
        </cu-custom>

        <view class="cu-timeline">
            <view class="cu-time">昨天</view>
            <view class="cu-item cur cuIcon-noticefill">
                <view class="content bg-green shadow-blur">
                    <text>22:22</text>
                    【广州市】快件已到达地球
                </view>
            </view>
            <view class="cu-item text-red cuIcon-attentionforbidfill">
                <view class="content bg-red shadow-blur">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</view>
            </view>
            <view class="cu-item text-grey cuIcon-evaluate_fill">
                <view class="content bg-grey shadow-blur">这是第一次，我家的铲屎官走了这么久。</view>
            </view>
            <view class="cu-item text-blue">
                <view class="bg-blue content">
                    <text>20:'00'</text>
                    【月球】快件已到达月球，准备发往地球
                </view>
                <view class="bg-cyan content">
                    <text>10:'00'</text>
                    【银河系】快件已到达银河系，准备发往月球
                </view>
            </view>
        </view>

        <view class="cu-timeline">
            <view class="cu-time">06-17</view>
            <view class="cu-item">
                <view class="content">
                    <text>01:30</text>
                    【喵星】 MX-12138 已揽收，准备发往银河系
                </view>
            </view>
        </view>

        <view class="cu-timeline">
            <view class="cu-time">06-17</view>
            <view class="cu-item">
                <view class="content">
                    <view class="cu-capsule radius">
                        <view class="cu-tag bg-cyan">上午</view>
                        <view class="cu-tag line-cyan">10:'00'</view>
                    </view>
                    <view class="margin-top">
                        这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
                        在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。
                    </view>
                </view>
            </view>
            <view class="cu-item text-blue">
                <view class="bg-blue light shadow-blur content">
                    <view class="cu-list menu-avatar radius">
                        <view class="cu-item">
                            <view
                                class="cu-avatar round lg"
                                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view class="content">
                                <view class="text-grey">小黄人</view>
                                <view class="text-gray text-sm">
                                    <text class="cuIcon-infofill text-red"></text>
                                    消息未送达
                                </view>
                            </view>
                            <view class="action">
                                <view class="text-grey text-xs">22:20</view>
                                <view class="cu-tag round bg-grey sm">5</view>
                            </view>
                        </view>
                        <view class="cu-item">
                            <view
                                class="cu-avatar round lg"
                                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                            >
                                <view class="cu-tag badge">99+</view>
                            </view>
                            <view class="content">
                                <view class="text-grey">
                                    小黄人
                                    <view class="cu-tag round orange sm">SVIP</view>
                                </view>
                                <view class="text-gray text-sm">
                                    <text class="cuIcon-redpacket_fill text-red"></text>
                                    收到红包
                                </view>
                            </view>
                            <view class="action">
                                <view class="text-grey text-xs">22:20</view>
                                <text class="cuIcon-notice_forbid_fill text-gray"></text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/timeline/timeline.js
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
/* pages/index/component/timeline/timeline.wxss */
</style>
