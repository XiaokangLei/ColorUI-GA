<template>
    <view style="height: 100%">
        <!-- pages/template/comment/comment01/comment01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">评论页01模板</view>
        </cu-custom>

        <view class="scrollPage">
            <view class="bg-white margin-xs radius-lg">
                <view class="flex padding-tb-sm padding-lr-xs justify-between">
                    <view class="flex">
                        <view class="padding-right-sm text-xxl padding-top-xs">
                            <text class="cuIcon-back_android text-black"></text>
                        </view>
                        <view
                            class="cu-avatar round"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="padding-lr-xs text-xl text-black flex justify-center align-center">
                            <view>yiche朱涛</view>
                        </view>
                    </view>
                    <view class="flex text-xxl justify-center align-center">
                        <view class="cu-btn round bg-blue sm margin-right-xs"><text class="cuIcon-add">关注</text></view>
                        <view class="cuIcon-more text-black"></view>
                    </view>
                </view>
                <view class="cu-bar">
                    <view class="text-black text-xxl padding-lr-sm">热门评论</view>
                </view>
                <view class="cu-list menu-avatar">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">谦和钢笔</view>
                            <view class="text-gray text-sm">05-08</view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-appreciate"><text class="text-gray text-lg">37</text></view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                    </view>
                    <view class="margin-left padding-left-xl text-black">
                        <view class="margin-lr padding-left">
                            <text>
                                从卡罗拉和雷凌的配置就可以看出丰田在中国为了缩减生产成本手段真是无所不用其极。混动卡罗拉全系只有一个型号带雷达，再高配有了视频倒车影像就把雷达取消了。车内的按钮连疏油层都不涂，轻轻蹭一下就是个印子...
                            </text>
                        </view>
                        <view class="margin-left-xl margin-right padding-lr bg-gray radius-lg">
                            <view class="margin-tb-xs padding-top-sm bg-gray">
                                <text class="text-blue">一抹♡柔情：</text>
                                <text class="text-black">看看领克吧，全能满足你，内饰相当精致</text>
                            </view>
                            <view class="margin-tb-xs padding-top-xs bg-gray">
                                <text class="text-blue">Distortion 624：</text>
                                <text class="text-black">这些可以加的东西不配就不配，国产车是配一大堆可以后期加的配置，安全气囊却能少就少</text>
                            </view>
                            <view class="margin-tb-xs padding-top-xs padding-bottom-sm bg-gray">
                                <text class="text-blue">共3条回复></text>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar no-padding">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">飞奔移动电源</view>
                            <view class="text-gray text-sm">05-08</view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-appreciate"><text class="text-gray text-lg">18</text></view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                    </view>
                    <view class="margin-left padding-left-xl text-black">
                        <view class="margin-lr padding-left">
                            <text>内饰设计不太养眼，但是实际我坐过一次，感觉还可以，没有想象的那么差，可能广汽做工不错的原因。</text>
                        </view>
                        <view class="margin-left-xl margin-right padding-lr bg-gray radius-lg">
                            <view class="margin-tb-xs padding-tb-sm bg-gray">
                                <text class="text-blue">yiche朱涛</text>
                                <view class="cu-tag bg-blue light round sm">作者</view>
                                <text class="text-blue">：</text>
                                <text class="text-black">设计非常传统，但丰田理念就这样，耐用为主，不会很激进。</text>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar no-padding padding-bottom">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">性感的大象</view>
                            <view class="text-gray text-sm">05-08</view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-appreciate"><text class="text-gray text-lg">12</text></view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                    </view>
                    <view class="margin-left padding-left-xl text-black">
                        <view class="margin-lr padding-left">
                            <text>国产之光。外观设计无可挑剔,全系列车型国产车里面显得高端大气上档次。MG6和550开始及以上的车型底盘和用料值得称赞。</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 底部评论 -->
        <view :class="'cu-bar foot input ' + (InputBottom != 0 ? 'cur' : '')" :style="'bottom:' + InputBottom + 'px'">
            <view class="action">
                <text class="cuIcon-write text-gray"></text>
            </view>

            <input class="solid-bottom" placeholder="写评论" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" />

            <view class="action">
                <text class="cuIcon-comment text-black"></text>
                <text class="cuIcon-appreciate text-black"></text>
                <text class="cuIcon-favor text-black"></text>
                <text class="cuIcon-forward text-black"></text>
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
// pages/template/comment/comment01/comment01.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            InputBottom: 0
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
        InputFocus(e) {
            this.setData({
                InputBottom: e.detail.height
            });
        },

        InputBlur(e) {
            this.setData({
                InputBottom: 0
            });
        }
    }
};
</script>
<style>
/* pages/template/comment/comment01/comment01.wxss */
</style>
