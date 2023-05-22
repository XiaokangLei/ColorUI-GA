<template>
    <view style="height: 100%">
        <!-- pages/index/basics/avatar/avatar.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">头像</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                头像形状
            </view>
        </view>

        <view class="padding margin-sm bg-white radius-df">
            <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
            <view
                class="cu-avatar radius margin-left"
                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
            ></view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                头像尺寸
            </view>
        </view>

        <view class="margin-sm bg-white radius-lg">
            <view class="padding-sm">
                <view
                    class="cu-avatar sm round margin-left"
                    style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"
                ></view>
                <view
                    class="cu-avatar round margin-left"
                    style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                ></view>
                <view
                    class="cu-avatar lg round margin-left"
                    style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                ></view>
                <view
                    class="cu-avatar xl round margin-left"
                    style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                ></view>
            </view>

            <view class="padding-lr-sm">
                <view class="cu-avatar sm round margin-left bg-red">A</view>
                <view class="cu-avatar round margin-left bg-red">B</view>
                <view class="cu-avatar lg round margin-left bg-red">C</view>
                <view class="cu-avatar xl round margin-left bg-red">D</view>
            </view>

            <view class="padding-sm">
                <view class="cu-avatar sm round margin-left bg-blue">高</view>
                <view class="cu-avatar round margin-left bg-blue">颜</view>
                <view class="cu-avatar lg round margin-left bg-blue">
                    <text>值</text>
                </view>
                <view class="cu-avatar xl round margin-left bg-blue">
                    <text class="avatar-text">UI库</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                内嵌文字(图标)
            </view>
        </view>

        <view class="padding margin-sm bg-white radius-df">
            <view class="cu-avatar radius bg-gray">
                <text class="cuIcon-people"></text>
            </view>
            <view class="cu-avatar radius margin-left bg-gray">
                <text>新</text>
            </view>
            <view class="cu-avatar radius margin-left bg-gray">
                <text>年</text>
            </view>
            <view class="cu-avatar radius margin-left bg-gray">
                <text>快</text>
            </view>
            <view class="cu-avatar radius margin-left bg-gray">
                <text>乐</text>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                头像颜色
            </view>
        </view>

        <view class="padding-sm margin-sm bg-white radius-lg">
            <view :class="'cu-avatar round lg bg-' + item.name + ' margin-xs'" v-for="(item, index) in ColorList" :key="index">
                <text class="avatar-text">{{ item.name }}</text>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                头像组
            </view>
        </view>

        <view class="padding margin-sm bg-white radius-df">
            <view class="cu-avatar-group">
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"></view>
            </view>
            <view class="cu-avatar-group">
                <view class="cu-avatar round lg" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="cu-avatar round lg" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="cu-avatar round lg" style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="cu-avatar round lg" style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"></view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                头像标签
            </view>
        </view>

        <view class="padding margin-sm bg-white radius-df">
            <view class="cu-avatar round lg margin-left" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)">
                <view class="cu-tag badge cuIcon-female bg-blue"></view>
            </view>
            <view class="cu-avatar round lg margin-left" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)">
                <view class="cu-tag badge cuIcon-female bg-pink"></view>
            </view>
            <view class="cu-avatar round lg margin-left" style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)">
                <view class="cu-tag badge cuIcon-male bg-blue"></view>
            </view>
            <view class="cu-avatar round lg margin-left" style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)">
                <view class="cu-tag badge cuIcon-male bg-pink"></view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/avatar/avatar.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            ColorList: app.globalData.ColorList,
            avatar: [
                'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1',
                'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
            ]
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
    methods: {}
};
</script>
<style>
/* pages/index/basics/avatar/avatar.wxss */
</style>
