<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/tips/tips.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">滚动提示</view>
        </cu-custom>

        <view class="scrollPage">
            <view class="cu-bar bg-white">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    基础样式
                </view>
            </view>

            <swiper class="tips-swiperitem margin" :autoplay="true" :vertical="true" :circular="true" interval="2000" duration="500">
                <block v-for="(item, index) in Headlines" :key="index">
                    <swiper-item @touchmove.stop.prevent="falseFun">
                        <view class="radius-lg bg-orange light">
                            <view class="padding-xs text-xl">
                                <text class="cuIcon-magic text-orange"></text>
                                <text class="text-df">{{ item.title }}</text>
                            </view>
                        </view>
                    </swiper-item>
                </block>
            </swiper>

            <view class="tips-box margin-bottom">
                <swiper
                    class="tips-new-swiper bg-orange light"
                    :vertical="true"
                    :autoplay="true"
                    :circular="true"
                    interval="3000"
                    duration="500"
                    display-multiple-items="1"
                    easing-function="easeInOutCubic"
                >
                    <block v-for="(item, idx) in 5" :key="idx">
                        <swiper-item>
                            <view class="padding-left"><text class="cuIcon-magic text-orange">这是一条消息提示消息提示~</text></view>
                        </swiper-item>
                    </block>
                </swiper>
            </view>

            <view class="cu-bar bg-white margin-top-xs">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    形状/颜色
                </view>
            </view>

            <swiper class="tips-swiperitem margin" :autoplay="true" :vertical="true" :circular="true" interval="2000" duration="500">
                <block v-for="(item, index) in Headlines" :key="index">
                    <swiper-item @touchmove.stop.prevent="falseFun">
                        <view class="radius bg-orange light">
                            <view class="padding-xs text-xl">
                                <text class="cuIcon-magic text-orange"></text>
                                <text class="text-df">{{ item.title }}</text>
                            </view>
                        </view>
                    </swiper-item>
                </block>
            </swiper>

            <swiper class="tips-swiperitem margin-tb" :autoplay="true" :vertical="true" :circular="true" interval="2000" duration="500">
                <block v-for="(item, index) in Headlines" :key="index">
                    <swiper-item @touchmove.stop.prevent="falseFun">
                        <view class="bg-pink light">
                            <view class="padding-xs text-xl">
                                <text class="cuIcon-magic text-pink"></text>
                                <text class="text-df">{{ item.title }}</text>
                            </view>
                        </view>
                    </swiper-item>
                </block>
            </swiper>

            <view class="cu-bar bg-white margin-top-xs">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    方向
                </view>
            </view>

            <swiper class="tips-swiperitem margin-tb" :autoplay="true" :circular="true" interval="2000" duration="500">
                <block v-for="(item, index) in Headlines" :key="index">
                    <swiper-item @touchmove.stop.prevent="falseFun">
                        <view class="bg-pink light">
                            <view class="padding-xs text-xl">
                                <text class="cuIcon-magic text-pink"></text>
                                <text class="text-df">{{ item.title }}</text>
                            </view>
                        </view>
                    </swiper-item>
                </block>
            </swiper>

            <view class="cu-bar bg-white margin-top-xs">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    点击跳转
                </view>
            </view>

            <swiper class="tips-swiperitem margin-tb" :autoplay="true" :circular="true" interval="2000" duration="500">
                <block v-for="(item, index) in Headlines" :key="index">
                    <swiper-item @touchmove.stop.prevent="falseFun" @tap="linesclick" :data-url="item.url">
                        <view class="bg-orange light">
                            <view class="padding-xs text-xl">
                                <text class="cuIcon-magic text-orange"></text>
                                <text class="text-df">{{ item.title }}</text>
                            </view>
                        </view>
                    </swiper-item>
                </block>
            </swiper>

            <view class="cu-bar bg-white margin-top-xs">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    两行
                </view>
            </view>

            <swiper class="tips-bot-swiper bg-white radius-df padding-left-sm" :vertical="true" :autoplay="true" :circular="true" interval="3000" display-multiple-items="2">
                <block v-for="(item, idx) in 3" :key="idx">
                    <swiper-item>
                        <view class="flex text-orange" style="align-items: baseline">
                            <text class="padding-top-xs" :decode="true">2021-11-25 &nbsp;&nbsp;&nbsp;17:38</text>
                            <text :decode="true">&nbsp;&nbsp;123</text>
                        </view>
                    </swiper-item>
                </block>
            </swiper>

            <view class="cu-bar bg-white margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    多行
                </view>
            </view>

            <view class="tips-boxs margin-tb margin-lr-sm">
                <view class="tips-box_i bg-white radius-lg padding-lr padding-top-xs">
                    <swiper
                        class="tips-swiper"
                        :vertical="true"
                        :autoplay="true"
                        :circular="true"
                        interval="3000"
                        :style="'height: ' + (list.length > 6 ? '460' : list.length * 60) + 'rpx;'"
                        :display-multiple-items="list.length > 6 ? 7 : list.length"
                    >
                        <block v-for="(item, idx) in list" :key="idx">
                            <swiper-item>
                                <view class="flex" style="align-items: baseline">
                                    <text :decode="true" class="text-gray">{{ item.create_time }} &nbsp;&nbsp;&nbsp;</text>
                                    <text :decode="true" class="text-orange">&nbsp;&nbsp;抽中了{{ item.prize_name }}</text>
                                </view>
                            </swiper-item>
                        </block>
                    </swiper>
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
// pages/index/plugin/tips/tips.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            Headlines: [
                {
                    id: 0,
                    title: 'ColorUI GA 最新版v2.0.6上线啦~',
                    url: '/pages/about/about/about'
                },
                {
                    id: 1,
                    title: '新增6种UI模板库、瀑布流样式',
                    url: '/pages/about/about/about'
                }
            ],
            list: [
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '一等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '三等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '二等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '四等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '五等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '参与奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '会员卡'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '优惠券'
                }
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
    methods: {
        /**
         * 点击跳转
         * @param {*} e
         */
        linesclick: function (e) {
            var swip = e.currentTarget.dataset;
            console.log(swip);
            uni.navigateTo({
                url: swip.url
            });
        },

        falseFun() {
            console.log('占位：函数 false 未声明');
        }
    }
};
</script>
<style>
/* pages/index/plugin/tips/tips.wxss */
</style>
