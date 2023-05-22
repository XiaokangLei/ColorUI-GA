<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/home/home.wxml -->

        <cu-custom :noFixed="true" :isLucency="true">
            <view slot="content"><text class="">扩展样式</text></view>
        </cu-custom>

        <!-- 全屏背景图 -->
        <image src="/static/images/bg.png" mode="widthFix" class="bg-img-new"></image>

        <!-- 页面 -->
        <scroll-view scroll-y class="scrollPage cu-timeline">
            <!-- 滚动图片 -->
            <swiper
                class="card-swiper square-dot"
                :indicator-dots="true"
                :circular="true"
                :autoplay="true"
                interval="5000"
                duration="500"
                @change="cardSwiper"
                previousMargin="0.01rpx"
                indicator-color="#8799a3"
                indicator-active-color="#0081ff"
                :style="'margin-top: ' + (StatusBar + CustomBar) + 'rpx;'"
            >
                <swiper-item :class="cardCur == index ? 'cur' : ''" @tap="jumpTo" :data-page="item.page" v-for="(item, index) in swiperList" :key="index">
                    <view class="swiper-item">
                        <view class="bg-img radius-lg" :style="'background-image: url(' + item.url + ');height: 360rpx;'">
                            <view class="padding-xl text-white">
                                <view class="padding-xs text-xl">
                                    {{ item.title }}
                                </view>
                                <view class="padding-xs">
                                    {{ item.des }}
                                </view>
                            </view>
                        </view>
                        <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
                    </view>
                </swiper-item>
            </swiper>
            <!-- 扩展list -->
            <view class="nav-list margin-top">
                <navigator
                    hover-class="none"
                    :url="'/pages/index/plugin/' + item.name + '/' + item.name"
                    :class="'nav-li bg-' + item.color"
                    v-for="(item, index) in elementsPlugins"
                    :key="index"
                >
                    <image src="/static/images/0004.svg" mode="widthFix" class="image-bg" style="z-index: -2; margin: -8rpx 0rpx 0rpx -32rpx"></image>

                    <view class="nav-title">{{ item.title }}</view>

                    <view class="flex">
                        <view class="flex-sub nav-name">{{ item.name }}</view>
                        <view class="flex-sub nav-des text-right align-end">扩展</view>
                    </view>

                    <text :class="'cuIcon-' + item.icon"></text>
                </navigator>
            </view>
            <copyright compName="copyright"></copyright>

            <view class="cu-tabbar-height"></view>
        </scroll-view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/home/home.js
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
                    id: 0,
                    type: 'image',
                    title: '索引列表',
                    des: '索引跳转列表样式',
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/plugin/indexes/indexes'
                },
                {
                    id: 1,
                    type: 'image',
                    title: '瀑布流',
                    des: '图片瀑布流样式',
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/plugin/waterfall/waterfall'
                },
                {
                    id: 2,
                    type: 'image',
                    title: '全屏抽屉',
                    des: '侧边展示抽屉',
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/plugin/drawer/drawer'
                }
            ],
            elementsPlugins: [
                {
                    title: '索引列表',
                    name: 'indexes',
                    color: 'purple light',
                    icon: 'vipcard'
                },
                {
                    title: '微动画 ',
                    name: 'animation',
                    color: 'mauve light',
                    icon: 'form'
                },
                {
                    title: '全屏抽屉',
                    name: 'drawer',
                    color: 'pink light',
                    icon: 'list'
                },
                {
                    title: '垂直导航',
                    name: 'verticalnav',
                    color: 'brown light',
                    icon: 'news'
                },
                {
                    title: '聊天',
                    name: 'chat',
                    color: 'green light',
                    icon: 'message'
                },
                {
                    title: '瀑布流',
                    name: 'waterfall',
                    color: 'blue light',
                    icon: 'pic'
                },
                {
                    title: '卡片翻转',
                    name: 'overturn',
                    color: 'red light',
                    icon: 'camerarotate'
                },
                {
                    title: '骨架屏',
                    name: 'skeleton',
                    color: 'pink light',
                    icon: 'news'
                },
                {
                    title: '抽奖',
                    name: 'draw',
                    color: 'pink light',
                    icon: 'present'
                },
                {
                    title: '历史搜索',
                    name: 'search',
                    color: 'mauve light',
                    icon: 'search'
                },
                {
                    title: '打卡',
                    name: 'clockin',
                    color: 'cyan light',
                    icon: 'mobile'
                },
                {
                    title: '卡券',
                    name: 'coupon',
                    color: 'brown light',
                    icon: 'news'
                },
                {
                    title: '商品滑动',
                    name: 'goods',
                    color: 'green light',
                    icon: 'shop'
                },
                {
                    title: '卡片设计',
                    name: 'design',
                    color: 'blue light',
                    icon: 'pic'
                }
            ]
        };
    },
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    props: {},
    /**
     * 组件的方法列表
     */
    methods: {
        cardSwiper(e) {
            this.setData({
                cardCur: e.detail.current
            });
        },
        // 轮播图跳转
        jumpTo(e) {
            return uni.navigateTo({
                url: e.currentTarget.dataset.page
            });
        }
    },
    created: function () {}
};
</script>
<style>
/* pages/index/plugin/home/home.wxss */
.image-bg {
    position: absolute;
    height: 100%;
    opacity: 0.5;
}
</style>
