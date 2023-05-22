<template>
    <view style="height: 100%">
        <!-- pages/template/index/index01/index01.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">首页01模板</view>
        </cu-custom>

        <!-- 页面 -->
        <view class="cu-timeline margin-xs radius-lg" style="min-height: 90vh">
            <view class="box-serach">
                <view class="cu-bar search bg-white radius-lg">
                    <view class="action text-black">
                        <text>北京</text>
                        <text class="cuIcon-triangledownfill"></text>
                    </view>
                    <view class="search-form round">
                        <text class="cuIcon-search"></text>
                        <input type="text" placeholder="报酬高" confirm-type="search" />
                    </view>
                    <view class="flex padding-sm text-xxl text-black">
                        <text class="cuIcon-message"></text>
                    </view>
                </view>
            </view>

            <!-- 滚动图片 -->
            <swiper
                :class="'screen-swiper margin-lr-sm margin-top-xs ' + (DotStyle ? 'square-dot' : 'round-dot')"
                :indicator-dots="true"
                :circular="true"
                :autoplay="true"
                interval="5000"
                duration="500"
            >
                <swiper-item v-for="(item, index) in swiperList" :key="index">
                    <image :src="item.url" class="radius" mode="aspectFill" style="height: 340rpx"></image>
                </swiper-item>
            </swiper>
            <!-- 常用功能 -->
            <view class="cu-list grid col-4 no-border text-black margin-top-xs">
                <view class="cu-item" @tap="parseEventDynamicCode($event, item.bindtap)" v-for="(item, index) in iconList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'" style="font-size: 56rpx">
                        <view class="cu-tag badge" v-if="item.badge != 0">
                            <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                        </view>
                    </view>

                    <text>{{ item.name }}</text>
                </view>
            </view>

            <view class="flex solid-bottom margin-lr padding-tb justify-between">
                <text class="text-xl text-black">最新任务</text>
                <text class="text-lg text-gray">
                    更多任务
                    <text class="cuIcon-right"></text>
                </text>
            </view>

            <view class="margin-lr" v-for="(item, index) in newList" :key="index">
                <view class="flex padding-top-xs justify-between">
                    <view class="flex padding-top-xs">
                        <text class="text-xl text-black">{{ item.title }}</text>
                        <view class="cu-tag bg-orange sm radius" v-if="item.tag">{{ item.tag }}</view>
                    </view>
                    <text class="text-xxl text-red padding-top-xs">
                        <text class="text-bold">{{ item.pay }}</text>
                        <text class="text-gray text-lg">/时</text>
                    </text>
                </view>

                <view class="flex padding-bottom-sm justify-start">
                    <text class="text-gray">
                        <text class="cuIcon-location"></text>
                        {{ item.location }}
                    </text>
                    <text class="margin-left-lg text-gray">
                        <text class="cuIcon-time"></text>
                        {{ item.time }}
                    </text>
                </view>

                <view class="flex solid-bottom padding-bottom justify-start">
                    <view class="cu-tag line-blue radius" v-for="(item, index1) in item.tagList" :key="index1">{{ item }}</view>
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
// pages/template/index/index01/index01.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            cardCur: 0,

            swiperList: [
                {
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                }
            ],

            iconList: [
                {
                    icon: 'moneybagfill',
                    color: 'blue',
                    badge: 0,
                    name: '热门推荐'
                },
                {
                    icon: 'presentfill',
                    color: 'red',
                    badge: 0,
                    name: '附近任务',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'formfill',
                    color: 'purple',
                    badge: 0,
                    name: '金牌雇主',
                    bindtap: 'showResource'
                },
                {
                    icon: 'shopfill',
                    color: 'green',
                    badge: 0,
                    name: '排行榜',
                    bindtap: 'bindPoint'
                }
            ],

            newList: [
                {
                    title: '制定同频色板',
                    tag: '金牌雇主',
                    location: '江北·五里店',
                    pay: '60',
                    time: '3~5小时',
                    tagList: ['高信用', '加急']
                },
                {
                    title: '制定同色系色阶',
                    tag: '',
                    location: '江北·五里店',
                    pay: '100',
                    time: '24小时',
                    tagList: ['高信用', '高报酬']
                },
                {
                    title: 'UI辅助色彩校正',
                    tag: '',
                    location: '江北·五里店',
                    pay: '5',
                    time: '2小时',
                    tagList: ['高信用']
                }
            ],

            DotStyle: false
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
        cardSwiper(e) {
            this.setData({
                cardCur: e.detail.current
            });
        }
    }
};
</script>
<style>
/* pages/template/index/index01/index01.wxss */
.cu-bar .search-form-new {
    background-color: #f5f5f5;
    line-height: 64rpx;
    height: 72rpx;
    font-size: 24rpx;
    color: var(--black);
    flex: 1;
    display: flex;
    align-items: center;
    /* margin: 0 30rpx; */
}

.cu-bar .search-form-new + .action {
    margin-right: 30rpx;
}

.cu-bar .search-form-new input {
    flex: 1;
    padding-right: 30rpx;
    height: 64rpx;
    line-height: 64rpx;
    font-size: 26rpx;
    background-color: transparent;
}

.cu-bar .search-form-new [class*='cuIcon-'] {
    margin: 0 0.5em 0 0.8em;
}

.cu-bar .search-form-new [class*='cuIcon-']::before {
    top: 0rpx;
}

.box-search {
    margin: 20rpx 0;
}

.box-search view.cu-bar {
    margin-top: 20rpx;
}
</style>
