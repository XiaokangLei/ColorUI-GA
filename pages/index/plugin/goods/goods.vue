<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/goods/goods.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">商品滑动</view>
        </cu-custom>

        <view class="cu-bar solid-bottom bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                同组水平滑动
            </view>
        </view>

        <view class="cu-good-act margin-sm bg-purple light">
            <view class="cu-good-t-box bg-oc-pink-3">
                <view class="cu-good-title">精选商品</view>
            </view>
            <view class="cu-good-point-con">
                <swiper class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000" :circular="true">
                    <swiper-item v-for="(item, index) in goods_list" :key="index">
                        <view class="cu-good-point-flex" v-for="(its, index1) in item.goods" :key="index1">
                            <image class="cu-good-point-img radius-lg" :src="its.img"></image>

                            <view>30积分</view>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
        </view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                同组垂直滑动
            </view>
        </view>

        <view class="cu-good-act margin-sm bg-purple light">
            <view class="cu-good-t-box bg-oc-pink-3">
                <view class="cu-good-title">精选商品</view>
            </view>
            <view class="cu-good-point-con">
                <swiper class="swiper-box" :vertical="true" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000" :circular="true">
                    <swiper-item v-for="(item, index) in goods_list" :key="index">
                        <view class="cu-good-point-flex" v-for="(its, index1) in item.goods" :key="index1">
                            <image class="cu-good-point-img radius-lg" :src="its.img"></image>

                            <view>30积分</view>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
        </view>

        <view class="cu-bar solid-bottom margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                单个滑动
            </view>
        </view>

        <view class="cu-good-act margin-sm bg-purple light">
            <view class="cu-good-t-box bg-oc-pink-3">
                <view class="cu-good-title">精选商品</view>
            </view>
            <view :class="'cu-good-point-con ' + (d_num == 1 ? 'cu-good-wd1' : d_num == 2 ? 'cu-good-wd2' : '')">
                <swiper class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="1500" :duration="1000" :circular="true" :display-multiple-items="d_num">
                    <swiper-item v-for="(item, index) in g_list" :key="index">
                        <view class="cu-good-point-flex-w">
                            <image class="cu-good-point-img radius-lg" :src="item.img"></image>
                            <view>{{ 40 }}积分</view>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
        </view>

        <view class="margin-top" style="margin-top: 12vh">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/goods/goods.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            goods_list: [
                {
                    goods: [
                        {
                            img: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                        },
                        {
                            img: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                        },
                        {
                            img: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
                        }
                    ]
                },
                {
                    goods: [
                        {
                            img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1'
                        },
                        {
                            img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1'
                        },
                        {
                            img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1'
                        }
                    ]
                },
                {
                    goods: [
                        {
                            img: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
                        },
                        {
                            img: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1'
                        },
                        {
                            img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1'
                        }
                    ]
                }
            ],

            g_list: [
                {
                    img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1'
                }
            ],

            d_num: 3,

            its: {
                img: ''
            }
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let len = this.g_list.length;
        this.setData({
            d_num: len > 2 ? 3 : len
        });
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
    methods: {}
};
</script>
<style>
/* pages/index/plugin/goods/goods.wxss */
</style>
