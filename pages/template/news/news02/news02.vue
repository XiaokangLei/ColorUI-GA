<template>
    <view style="height: 100%">
        <!-- pages/template/news/news02/news02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">新闻资讯02</view>
        </cu-custom>

        <view class="cu-timeline margin-xs radius-lg" style="min-height: 92vh">
            <!-- 搜索 -->
            <scroll-view scroll-x class="bg-white nav radius-lg">
                <view class="flex text-center">
                    <view
                        :class="'cu-item ' + (index == TabCur ? 'text-blue cur text-bold text-lg' : '')"
                        @tap="tabSelect"
                        :data-id="item.id"
                        v-for="(item, index) in tabList"
                        :key="index"
                    >
                        {{ item.name }}
                    </view>
                </view>
            </scroll-view>

            <scroll-view scroll-x class="bg-white nav margin-lr-sm margin-tb-sm">
                <view class="flex text-center">
                    <view class="cu-tag round"><text class="padding-lr-xs">默认</text></view>
                    <view class="cu-tag round"><text class="padding-lr-xs">经验/观点</text></view>
                    <view class="cu-tag round"><text class="padding-lr-xs">规范/资料</text></view>
                    <view class="cu-tag round"><text class="padding-lr-xs">人物/访谈</text></view>
                    <view class="cu-tag round"><text class="padding-lr-xs">行业/资讯</text></view>
                    <view class="cu-tag round"><text class="padding-lr-xs">金融/科技</text></view>
                </view>
            </scroll-view>

            <view class="cu-card article no-card margin-top-lg" v-for="(item, index) in newsList" :key="index">
                <view class="cu-item shadow">
                    <view class="content">
                        <view class="">
                            <!-- <view class="text-black text-bold text-lg">{{item.title}}</view> -->
                            <view class="">
                                <text class="text-black text-bold text-lg text-cut-2">{{ item.title }}</text>
                            </view>
                            <view class="flex justify-between margin-top">
                                <view class="text-gray text-sm">经验 | 2.1万观看 99赞 12评论</view>
                            </view>
                        </view>
                        <view>
                            <image :src="item.url" mode="aspectFill" class="radius" style="height: 180rpx; width: 230rpx"></image>
                        </view>
                    </view>
                    <view class="flex justify-between">
                        <view class="text-gray text-sm padding-left flex align-center">
                            <view class="cu-avatar sm round" :style="'background-image:url(' + item.url + ');'"></view>
                            <text class="padding-left-xs text-df text-bold">{{ item.user }}</text>
                        </view>
                        <view class="text-gray text-sm padding-right flex align-center">24分钟前</view>
                    </view>
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
// pages/template/news/news02/news02.js
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
            TabCur: 3,
            scrollLeft: 0,
            tabList: [
                {
                    id: 0,
                    name: '首页'
                },
                {
                    id: 1,
                    name: '关注'
                },
                {
                    id: 2,
                    name: '作品'
                },
                {
                    id: 3,
                    name: '经验'
                }
            ],
            newsList: [
                {
                    title: '矢量插画师：通过摄影作品学习建筑的空间语言',
                    user: '飞屋瑞',
                    date: '2019-05-12',
                    collection: 97,
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '微信大改版之UI设计分析！分析点啥？',
                    user: 'moxiao',
                    date: '2019-05-12',
                    collection: 21,
                    url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '如何合理创建间距系统，来更快地实现设计方案？',
                    user: '毒眸',
                    date: '2019-05-12',
                    collection: 17,
                    url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '百度如何成为小程序生态的最大变量？',
                    user: '罗超频道',
                    date: '2019-05-12',
                    collection: 23,
                    url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
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
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60
            });
        }
    }
};
</script>
<style>
/* pages/template/news/news02/news02.wxss */
</style>
