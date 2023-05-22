<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/rate/rate.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">评分</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基础样式
            </view>
        </view>

        <view class="padding text-xxl flex align-center margin-sm bg-white radius-df">
            <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
            </view>
            <view class="margin-left">
                <text class="text-xxl text-red">{{ active + 1 }}星</text>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                大小
            </view>
        </view>

        <view class="margin-sm bg-white radius-lg">
            <view class="padding-lr padding-tb-sm text-xl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}星</text>
                </view>
            </view>

            <view class="padding-lr padding-tb-sm text-xxl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}星</text>
                </view>
            </view>

            <view class="padding-lr padding-tb-sm text-xxxl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}星</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                颜色
            </view>
        </view>

        <view class="margin-sm bg-white radius-lg">
            <view class="padding-lr padding-tb-sm text-xl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-orange'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}星</text>
                </view>
            </view>

            <view class="padding-lr padding-tb-sm text-xl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-yellow'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}星</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                图标
            </view>
        </view>

        <view class="margin-sm bg-white radius-lg">
            <view class="padding-lr padding-tb-sm text-xl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-like' : 'cuIcon-likefill') + ' ' + extraClass + ' text-red'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}星</text>
                </view>
            </view>

            <view class="padding-lr padding-tb-sm text-xl flex align-center">
                <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                    <text :class="(index > active ? 'cuIcon-notification' : 'cuIcon-notificationfill') + ' ' + extraClass + ' text-red'"></text>
                </view>
                <view class="margin-left">
                    <text class="text-red">{{ active + 1 }}</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                自定义个数
            </view>
        </view>

        <view class="padding-lr padding-tb-sm text-xl flex align-center margin-sm bg-white radius-df">
            <view @tap="click_muti" :data-index="index" v-for="(item, index) in count_muti" :key="index">
                <text :class="(index > active_muti ? 'cuIcon-like' : 'cuIcon-likefill') + ' ' + extraClass + ' text-red'"></text>
            </view>
            <view class="margin-left">
                <text class="text-red">{{ active_muti + 1 }}星</text>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-xs">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                自定义间隔
            </view>
        </view>

        <view class="padding-lr padding-tb-sm text-xl flex align-center margin-sm bg-white radius-df">
            <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                <text :class="(index > active ? 'cuIcon-like' : 'cuIcon-likefill') + ' ' + extraClass + ' text-red padding-lr-xs'"></text>
            </view>
            <view class="margin-left">
                <text class="text-red">{{ active + 1 }}星</text>
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
// pages/index/plugin/rate/rate.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            count: 5,
            active: 0,
            score: 1,
            count_muti: 8,
            active_muti: 0,
            score_muti: 1,
            extraClass: ''
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
         * 点击评分
         */
        click(e) {
            const { score, count } = this;
            const active = e.currentTarget.dataset.index;
            this.setData({
                active
            });
            this.$emit(
                'click',
                {
                    detail: {
                        result: (score / count) * active
                    }
                },
                {}
            );
        },

        /**
         * 点击评分
         */
        click_muti(e) {
            const { score_muti, count_muti } = this;
            const active_muti = e.currentTarget.dataset.index;
            this.setData({
                active_muti
            });
            this.$emit(
                'click_muti',
                {
                    detail: {
                        result: (score_muti / count_muti) * active_muti
                    }
                },
                {}
            );
        }
    }
};
</script>
<style>
/* pages/index/plugin/rate/rate.wxss */
</style>
