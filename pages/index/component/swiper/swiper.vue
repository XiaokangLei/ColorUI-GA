<template>
    <view style="height: 100%">
        <!-- pages/index/component/swiper/swiper.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">轮播图</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-pink"></text>
                全屏限高轮播
            </view>
            <view class="action">
                <text class="margin-right-xs">SquareDot</text>
                <switch class="sm" @change="DotStyleFun"></switch>
            </view>
        </view>

        <swiper :class="'screen-swiper ' + (DotStyle ? 'square-dot' : 'round-dot')" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
            <swiper-item v-for="(item, index) in swiperList" :key="index">
                <image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>

                <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
            </swiper-item>
        </swiper>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-pink"></text>
                常规限高轮播
            </view>
        </view>

        <swiper :class="'margin screen-swiper ' + (DotStyle ? 'square-dot' : 'round-dot')" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
            <swiper-item class="radius" v-for="(item, index) in swiperList" :key="index">
                <image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>

                <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
            </swiper-item>
        </swiper>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-title text-pink"></text>
                卡片式轮播
            </view>
        </view>

        <swiper
            :class="'card-swiper ' + (DotStyle ? 'square-dot' : 'round-dot')"
            :indicator-dots="true"
            :circular="true"
            @change="cardSwiper"
            previousMargin="0.01rpx"
            indicator-color="#8799a3"
            indicator-active-color="#0081ff"
        >
            <swiper-item :class="cardCur == index ? 'cur' : ''" v-for="(item, index) in swiperList" :key="index">
                <view class="swiper-item">
                    <image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
                    <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
                </view>
            </swiper-item>
        </swiper>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-title text-pink"></text>
                堆叠式轮播
            </view>
        </view>

        <view class="tower-swiper" @touchmove="towerMove" @touchstart="towerStartFun" @touchend="towerEnd">
            <view
                :class="'tower-item ' + (item.zIndex == 1 ? 'none' : '')"
                :style="'--index:' + item.zIndex + ';--left:' + item.mLeft"
                v-for="(item, index) in swiperList"
                :key="index"
            >
                <view class="swiper-item">
                    <image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
                    <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-title text-pink"></text>
                3D轮播
            </view>
        </view>

        <swiper
            class="swiper-3d"
            :current="swiperCurrent"
            circular
            previous-margin="100"
            next-margin="100"
            @animationfinish="swiperChange"
            :circular="true"
            :autoplay="true"
            interval="5000"
            duration="500"
        >
            <swiper-item class="item" :wx:index="index" v-for="(item, index) in swiperList" :key="index">
                <image :src="item.url" :class="swiperCurrent == index ? 'active' : 'no-active'" modex="heightFix" />
            </swiper-item>
        </swiper>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/swiper/swiper.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            cardCur: 0,
            swiperCurrent: 0,

            swiperList: [
                {
                    id: 0,
                    type: 'image',
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    id: 1,
                    type: 'image',
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    id: 2,
                    type: 'image',
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    id: 3,
                    type: 'image',
                    url: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    id: 4,
                    type: 'image',
                    url: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    id: 5,
                    type: 'image',
                    url: 'https://image.meiye.art/FiqphSjedkvi1y0hfqeNrYGXqLKo?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    id: 6,
                    type: 'image',
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                }
            ],

            DotStyle: '',
            towerStart: '',
            direction: ''
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.towerSwiper('swiperList');
        // 初始化towerSwiper 传已有的数组名即可
    },
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
        DotStyleFun(e) {
            this.setData({
                DotStyle: e.detail.value
            });
        },

        // cardSwiper
        cardSwiper(e) {
            this.setData({
                cardCur: e.detail.current
            });
        },

        // towerSwiper
        // 初始化towerSwiper
        towerSwiper(name) {
            let list = this[name];
            for (let i = 0; i < list.length; i++) {
                list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
                list[i].mLeft = i - parseInt(list.length / 2);
            }
            this.setData({
                swiperList: list
            });
        },

        // towerSwiper触摸开始
        towerStartFun(e) {
            this.setData({
                towerStart: e.touches[0].pageX
            });
        },

        // towerSwiper计算方向
        towerMove(e) {
            this.setData({
                direction: e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
            });
        },

        // towerSwiper计算滚动
        towerEnd(e) {
            let direction = this.direction;
            let list = this.swiperList;
            if (direction == 'right') {
                let mLeft = list[0].mLeft;
                let zIndex = list[0].zIndex;
                for (let i = 1; i < list.length; i++) {
                    list[i - 1].mLeft = list[i].mLeft;
                    list[i - 1].zIndex = list[i].zIndex;
                }
                list[list.length - 1].mLeft = mLeft;
                list[list.length - 1].zIndex = zIndex;
                this.setData({
                    swiperList: list
                });
            } else {
                let mLeft = list[list.length - 1].mLeft;
                let zIndex = list[list.length - 1].zIndex;
                for (let i = list.length - 1; i > 0; i--) {
                    list[i].mLeft = list[i - 1].mLeft;
                    list[i].zIndex = list[i - 1].zIndex;
                }
                list[0].mLeft = mLeft;
                list[0].zIndex = zIndex;
                this.setData({
                    swiperList: list
                });
            }
        },

        swiperChange(e) {
            if (e.detail.source == 'touch' || e.detail.source == 'autoplay') {
                this.setData({
                    swiperCurrent: e.detail.current
                });
            }
        }
    }
};
</script>
<style>
/* pages/index/component/swiper/swiper.wxss */
</style>
