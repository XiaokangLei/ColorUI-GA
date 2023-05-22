<template>
    <view style="height: 100%">
        <!-- pages/index/basics/home/home.wxml -->

        <cu-custom :noFixed="true" :isLucency="true">
            <view slot="content"><text class="">基础样式</text></view>
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
                        <!-- 图片不带文字 -->
                        <!-- <image src="{{item.url}}" mode="aspectFill" wx:if="{{item.type=='image'}}"></image> -->
                        <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
                    </view>
                </swiper-item>
            </swiper>
            <!-- 基础list -->
            <view class="nav-list margin-top">
                <navigator
                    open-type="navigate"
                    hover-class="none"
                    :url="'/pages/index/basics/' + item.name + '/' + item.name"
                    :class="'nav-li bg-' + item.color"
                    v-for="(item, index) in elements"
                    :key="index"
                >
                    <image src="/static/images/0004.svg" mode="widthFix" class="image-bg" style="z-index: -2; margin: -8rpx 0rpx 0rpx -32rpx"></image>

                    <view class="nav-title">{{ item.title }}</view>

                    <view class="flex">
                        <view class="flex-sub nav-name">{{ item.name }}</view>
                        <view class="flex-sub nav-des text-right align-end">基础</view>
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
// pages/index/basics/home/home.js
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
                    title: '布局UI设计',
                    des: 'Flex、Grid及基础样式',
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/basics/layout/layout'
                },
                {
                    id: 1,
                    type: 'image',
                    title: '背景UI设计',
                    des: '纯色、渐变色图片背景等样式',
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/basics/background/background'
                },
                {
                    id: 2,
                    type: 'image',
                    title: '文本UI设计',
                    des: '文本大小、颜色及标题等样式',
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/basics/text/text'
                }
            ],
            elements: [
                {
                    title: '布局',
                    name: 'layout',
                    color: 'blue light',
                    icon: 'newsfill'
                },
                {
                    title: '背景',
                    name: 'background',
                    color: 'cyan light',
                    icon: 'colorlens'
                },
                {
                    title: '文本',
                    name: 'text',
                    color: 'purple light',
                    icon: 'font'
                },
                {
                    title: '图标 ',
                    name: 'icon',
                    color: 'mauve light',
                    icon: 'icon'
                },
                {
                    title: '按钮',
                    name: 'button',
                    color: 'pink light',
                    icon: 'btn'
                },
                {
                    title: '标签',
                    name: 'tag',
                    color: 'brown light',
                    icon: 'tagfill'
                },
                {
                    title: '头像',
                    name: 'avatar',
                    color: 'red light',
                    icon: 'myfill'
                },
                {
                    title: '进度条',
                    name: 'progress',
                    color: 'orange light',
                    icon: 'icloading'
                },
                {
                    title: '阴影',
                    name: 'shadow',
                    color: 'olive light',
                    icon: 'copy'
                },
                {
                    title: '加载',
                    name: 'loading',
                    color: 'green light',
                    icon: 'loading2'
                },
                {
                    title: '标题',
                    name: 'title',
                    color: 'blue light',
                    icon: 'brand'
                },
                {
                    title: '边框',
                    name: 'border',
                    color: 'pink light',
                    icon: 'creative'
                },
                {
                    title: '开关',
                    name: 'switch',
                    color: 'mauve light',
                    icon: 'command'
                },
                {
                    title: '复选框',
                    name: 'checkbox',
                    color: 'red light',
                    icon: 'squarecheck'
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
/* pages/index/basics/home/home.wxss */
.image-bg {
    position: absolute;
    height: 100%;
    opacity: 0.5;
}
</style>
