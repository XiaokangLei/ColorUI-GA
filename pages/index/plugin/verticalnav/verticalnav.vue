<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/verticalnav/verticalnav.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">垂直导航</view>
        </cu-custom>

        <swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
            <swiper-item v-for="(item, index) in swiperList" :key="index">
                <image :src="item.url" mode="aspectFill"></image>
            </swiper-item>
        </swiper>

        <view class="flex margin-top-xs">
            <scroll-view class="cu-vertical-nav nav cu-timeline" scroll-y scroll-with-animation :scroll-top="cu - vertical - navTop" style="height: calc(100vh - 375rpx)">
                <view :class="'cu-item ' + (index == TabCur ? 'text-green cur' : '')" @tap="tabSelect" :data-id="index" v-for="(item, index) in list" :key="index">
                    Tab-{{ item.name }}
                </view>
            </scroll-view>

            <scroll-view class="bg-ghostWhite" scroll-y scroll-with-animation style="height: calc(100vh - 375rpx)" :scroll-into-view="'main-' + MainCur" @scroll="VerticalMain">
                <view class="padding-top padding-lr" :id="'main-' + index" v-for="(item, index) in list" :key="index">
                    <view class="cu-bar solid-bottom bg-white">
                        <view class="action">
                            <text class="cuIcon-title text-green"></text>
                            Tab-{{ item.name }}
                        </view>
                    </view>

                    <view class="cu-list menu-avatar">
                        <view class="cu-item">
                            <view
                                class="cu-avatar round lg"
                                style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view class="content">
                                <view class="text-grey">《百年孤独》</view>
                                <view class="text-gray text-sm flex">
                                    <text class="text-cut">
                                        <text class="cuIcon-infofill text-red margin-right-xs"></text>
                                        生命从来不曾离开过孤独而独立存在
                                    </text>
                                </view>
                            </view>
                            <view class="action">
                                <view class="text-grey text-xs">22:20</view>
                                <view class="cu-tag round bg-grey sm">5</view>
                            </view>
                        </view>
                        <view class="cu-item">
                            <view
                                class="cu-avatar radius lg"
                                style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view class="content">
                                <view class="text-pink">
                                    <text class="text-cut">酸菜鱼</text>
                                </view>
                                <view class="text-gray text-sm flex">
                                    <text class="text-cut">人人都是酸菜鱼，又酸...</text>
                                </view>
                            </view>
                            <view class="action">
                                <view class="text-grey text-xs">22:20</view>
                                <view class="cu-tag round bg-red sm">5</view>
                            </view>
                        </view>
                        <view class="cu-item grayscale">
                            <view
                                class="cu-avatar radius lg"
                                style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                            ></view>
                            <view class="content">
                                <view>
                                    <text class="text-cut">《阿凡达》</text>
                                    <view class="cu-tag round bg-orange sm">下播</view>
                                </view>
                                <view class="text-gray text-sm flex">
                                    <text class="text-cut">即将重映</text>
                                </view>
                            </view>
                            <view class="action">
                                <view class="text-grey text-xs">22:20</view>
                                <view class="cu-tag round bg-red sm">5</view>
                            </view>
                        </view>
                        <view class="cu-item cur">
                            <view
                                class="cu-avatar radius lg"
                                style="background-image: url(https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1)"
                            >
                                <view class="cu-tag badge"></view>
                            </view>
                            <view class="content">
                                <view>
                                    <text class="text-cut">百香果</text>
                                    <view class="cu-tag round bg-orange sm">水果</view>
                                </view>
                                <view class="text-gray text-sm flex">
                                    <text class="text-cut">
                                        商家：
                                        <text class="cuIcon-locationfill text-orange margin-right-xs"></text>
                                        运输中...
                                    </text>
                                </view>
                            </view>
                            <view class="action">
                                <view class="text-grey text-xs">22:20</view>
                                <view class="cuIcon-notice_forbid_fill text-gray"></view>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/verticalnav/verticalnav.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            Custom: app.globalData.Custom,
            TabCur: 0,
            MainCur: 0,
            VerticalNavTop: 0,
            list: [],
            load: true,

            swiperList: [
                {
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                }
            ],

            listCur: '',
            cu: 0,
            vertical: 0,
            navTop: 0
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        uni.showLoading({
            title: '加载中...',
            mask: true
        });
        let list = [{}];
        for (let i = 0; i < 26; i++) {
            list[i] = {};
            list[i].name = String.fromCharCode(65 + i);
            list[i].id = i;
        }
        this.setData({
            list: list,
            listCur: list[0]
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        uni.hideLoading();
    },
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
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                MainCur: e.currentTarget.dataset.id,
                VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
            });
        },

        VerticalMain(e) {
            let that = this;
            let list = this.list;
            let tabHeight = 0;
            if (this.load) {
                for (let i = 0; i < list.length; i++) {
                    let view = uni
                        .createSelectorQuery()
                        .in(uni)
                        .select('#main-' + list[i].id);
                    view.fields(
                        {
                            size: true
                        },
                        (data) => {
                            list[i].top = tabHeight;
                            tabHeight = tabHeight + data.height;
                            list[i].bottom = tabHeight;
                        }
                    ).exec();
                }
                that.setData({
                    load: false,
                    list: list
                });
            }
            let scrollTop = e.detail.scrollTop + 20;
            for (let i = 0; i < list.length; i++) {
                if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
                    that.setData({
                        VerticalNavTop: (list[i].id - 1) * 50,
                        TabCur: list[i].id
                    });
                    return false;
                }
            }
        }
    }
};
</script>
<style>
/* pages/index/plugin/verticalnav/verticalnav.wxss */
</style>
