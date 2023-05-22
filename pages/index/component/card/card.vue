<template>
    <view style="height: 100%">
        <!-- pages/index/component/card/card.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">卡片</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                案例类卡片
            </view>
            <view class="action">
                <switch class="sm" :checked="isCard" @change="isCardFun"></switch>
            </view>
        </view>

        <view :class="'cu-card case ' + (isCard ? 'no-card' : 'margin')">
            <view class="cu-item shadow">
                <view class="image">
                    <image src="https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1" mode="widthFix" style="max-height: 360rpx"></image>
                    <view class="cu-tag bg-blue">史诗</view>
                    <view class="cu-bar bg-shadeBottom">
                        <text class="text-cut">从自己的生活里找，先能打动自己，才有可能打动别人。</text>
                    </view>
                </view>
                <view class="cu-list menu-avatar">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content flex-sub">
                            <view class="text-grey">创意无限 格鲁</view>
                            <view class="text-gray text-sm flex justify-between">
                                十天前
                                <view class="text-gray text-sm">
                                    <text class="cuIcon-attentionfill margin-lr-xs"></text>
                                    10
                                    <text class="cuIcon-appreciatefill margin-lr-xs"></text>
                                    20
                                    <text class="cuIcon-messagefill margin-lr-xs"></text>
                                    30
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view :class="'cu-bar bg-white solid-bottom ' + (isCard ? 'margin-top' : '')">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                动态类卡片
            </view>
            <view class="action">
                <switch class="sm" :checked="isCard" @change="isCardFun"></switch>
            </view>
        </view>

        <view :class="'cu-card dynamic ' + (isCard ? 'no-card' : 'margin')">
            <view class="cu-item shadow">
                <view class="cu-list menu-avatar">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content flex-sub">
                            <view>格鲁</view>
                            <view class="text-gray text-sm flex justify-between">2022年12月3日</view>
                        </view>
                    </view>
                </view>
                <view class="text-content">创意是基于本质而来的解决方案。本质是什么，是不会因为其他外在条件而改变的东西。</view>
                <view :class="'grid flex-sub padding-lr ' + (isCard ? 'col-3 grid-square' : 'col-1')">
                    <view
                        :class="'bg-img ' + (isCard ? '' : 'only-img')"
                        style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        v-for="(item, index) in isCard ? 9 : 1"
                        :key="index"
                    ></view>
                </view>
                <view class="text-gray text-sm text-right padding">
                    <text class="cuIcon-attentionfill margin-lr-xs"></text>
                    10
                    <text class="cuIcon-appreciatefill margin-lr-xs"></text>
                    20
                    <text class="cuIcon-messagefill margin-lr-xs"></text>
                    30
                </view>
                <view class="cu-list menu-avatar comment solids-top">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-grey">斯图尔特</view>
                            <view class="text-gray text-content text-df">格鲁，你被自己的光芒变的盲目。</view>
                            <view class="bg-gray padding-sm radius margin-top-sm text-sm">
                                <view class="flex">
                                    <view>格鲁：</view>
                                    <view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
                                </view>
                            </view>
                            <view class="margin-top-sm flex justify-between">
                                <view class="text-gray text-df">2022年12月4日</view>
                                <view>
                                    <text class="cuIcon-appreciatefill text-red"></text>
                                    <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-grey">格鲁</view>
                            <view class="text-gray text-content text-df">妹妹，如果不是为了飞翔，我们要这翅膀有什么用?</view>
                            <view class="bg-gray padding-sm radius margin-top-sm text-sm">
                                <view class="flex">
                                    <view>斯图尔特：</view>
                                    <view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
                                </view>
                            </view>
                            <view class="margin-top-sm flex justify-between">
                                <view class="text-gray text-df">2022年12月4日</view>
                                <view>
                                    <text class="cuIcon-appreciate text-gray"></text>
                                    <text class="cuIcon-messagefill text-gray margin-left-sm"></text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                文章类卡片
            </view>
            <view class="action">
                <switch class="sm" :checked="isCard" @change="isCardFun"></switch>
            </view>
        </view>

        <view :class="'cu-card article ' + (isCard ? 'no-card' : 'margin') + ' margin-top'">
            <view class="cu-item shadow">
                <view class="title">
                    <view class="text-cut">每一个创意都是重新思考。</view>
                </view>
                <view class="content">
                    <image src="https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFill"></image>
                    <view class="desc">
                        <view class="text-content">创意是基于本质而来的解决方案。本质是什么，是不会因为其他外在条件而改变的东西。</view>
                        <view>
                            <view class="cu-tag bg-red light sm round">创意无限</view>
                            <view class="cu-tag bg-green light sm round">史诗</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view :class="'cu-card article ' + (isCard ? 'no-card' : 'margin') + ' margin-top'">
            <view class="cu-item shadow">
                <view class="title">
                    <view class="text-cut">每一个创意都是重新思考。</view>
                </view>
                <view class="content">
                    <view class="desc padding-right-xs">
                        <view class="text-content">创意是基于本质而来的解决方案。本质是什么，是不会因为其他外在条件而改变的东西。</view>
                        <view>
                            <view class="cu-tag bg-red light sm round">创意无限</view>
                            <view class="cu-tag bg-green light sm round">史诗</view>
                        </view>
                    </view>
                    <image src="https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFill"></image>
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
// pages/index/component/card/card.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            isCard: ''
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
        isCardFun(e) {
            this.setData({
                isCard: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/index/component/card/card.wxss */
</style>
