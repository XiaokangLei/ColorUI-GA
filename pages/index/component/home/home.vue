<template>
    <view style="height: 100%">
        <!-- pages/index/component/home/home.wxml -->

        <cu-custom :noFixed="true" :isLucency="true">
            <view slot="content"><text class="">组件设计</text></view>
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
                        <!-- <image src="{{item.url}}" mode="aspectFill" wx:if="{{item.type=='image'}}"></image> -->
                        <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
                    </view>
                </swiper-item>
            </swiper>
            <!-- 组件list -->
            <view class="nav-list margin-top">
                <navigator
                    hover-class="none"
                    :url="'/pages/index/component/' + item.name + '/' + item.name"
                    :class="'nav-li bg-' + item.color"
                    v-for="(item, index) in elementsComponents"
                    :key="index"
                >
                    <image src="/static/images/0004.svg" mode="widthFix" class="image-bg" style="z-index: -2; margin: -8rpx 0rpx 0rpx -32rpx"></image>

                    <view class="nav-title">{{ item.title }}</view>

                    <view class="flex">
                        <view class="flex-sub nav-name">{{ item.name }}</view>
                        <view class="flex-sub nav-des text-right align-end">组件</view>
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
// pages/index/component/home/home.js
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
                    title: '操作条',
                    des: '顶部、底部操作条',
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/component/bar/bar'
                },
                {
                    id: 1,
                    type: 'image',
                    title: '导航栏',
                    des: '滑动、静态Tab样式',
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/component/nav/nav'
                },
                {
                    id: 2,
                    type: 'image',
                    title: '列表',
                    des: '宫格列表、菜单列表、消息列表',
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
                    page: '/pages/index/component/list/list'
                }
            ],
            elementsComponents: [
                {
                    title: '操作条',
                    name: 'bar',
                    color: 'purple light',
                    icon: 'vipcard'
                },
                {
                    title: '导航栏 ',
                    name: 'nav',
                    color: 'mauve light',
                    icon: 'formfill'
                },
                {
                    title: '列表',
                    name: 'list',
                    color: 'pink light',
                    icon: 'list'
                },
                {
                    title: '卡片',
                    name: 'card',
                    color: 'brown light',
                    icon: 'newsfill'
                },
                {
                    title: '表单',
                    name: 'form',
                    color: 'red light',
                    icon: 'formfill'
                },
                {
                    title: '时间轴',
                    name: 'timeline',
                    color: 'orange light',
                    icon: 'timefill'
                },
                {
                    title: '轮播',
                    name: 'swiper',
                    color: 'olive light',
                    icon: 'album'
                },
                {
                    title: '模态框',
                    name: 'modal',
                    color: 'grey light',
                    icon: 'squarecheckfill'
                },
                {
                    title: '步骤条',
                    name: 'steps',
                    color: 'cyan light',
                    icon: 'roundcheckfill'
                },
                {
                    title: '轻提示',
                    name: 'toast',
                    color: 'mauve light',
                    icon: 'noticefill'
                },
                {
                    title: '状态提示',
                    name: 'status',
                    color: 'pink light',
                    icon: 'sort'
                },
                {
                    title: '评分',
                    name: 'rate',
                    color: 'red light',
                    icon: 'favorfill'
                },
                {
                    title: '手风琴',
                    name: 'piano',
                    color: 'orange light',
                    icon: 'btn'
                },
                {
                    title: '滚动提示',
                    name: 'tips',
                    color: 'cyan light',
                    icon: 'noticefill'
                },
                {
                    title: '日历',
                    name: 'calendar',
                    color: 'green light',
                    icon: 'calendar'
                },
                {
                    title: '表格',
                    name: 'table',
                    color: 'purple light',
                    icon: 'list'
                },
                {
                    title: '步进器',
                    name: 'stepper',
                    color: 'brown light',
                    icon: 'list'
                },
                {
                    title: '倒计时',
                    name: 'countdown',
                    color: 'pink light',
                    icon: 'list'
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
/* pages/index/component/home/home.wxss */
.image-bg {
    position: absolute;
    height: 100%;
    opacity: 0.5;
}
</style>
