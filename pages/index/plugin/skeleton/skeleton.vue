<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/skeleton/skeleton.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">骨架屏</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基本样式
            </view>
            <view class="action">
                开启骨架屏
                <switch @change="openSkeleton" class="margin-left-xs" :checked="loading"></switch>
            </view>
        </view>

        <view class="bg-white">
            <view class="cu-card case no-card" v-for="(item, index) in data_var" :key="index">
                <cu-skeleton :loading="item.loading" :column="4" :columnWidth="['50%', '90%', '70%', '80%']" endHeight="36rpx">
                    <view class="padding">
                        <view class="text-lg text-black">岁月静好</view>
                        <view class="text-lg padding-tb-xs">你的努力一定会被旁人看在眼里。</view>
                        <view class="text-lg">谢谢你 在这世界的角落 发现了我</view>
                        <view class="text-lg padding-top-xs">追踪着鹿的猎人是看不见山的。</view>
                    </view>
                </cu-skeleton>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                两列
            </view>
            <view class="action">
                开启骨架屏
                <switch @change="openSkeleton" class="margin-left-xs" :checked="loading"></switch>
            </view>
        </view>

        <view class="bg-white skeleton-double-column">
            <view class="cu-card case no-card" v-for="(item, index) in data_var" :key="index">
                <cu-skeleton :loading="item.loading" :column="4" :columnWidth="['50%', '90%', '70%', '80%']" endHeight="36rpx">
                    <view class="padding">
                        <view class="text-lg text-black">岁月静好</view>
                        <view class="text-lg padding-tb-xs">谢谢你</view>
                        <view class="text-lg">在这世界的角落</view>
                        <view class="text-lg padding-top-xs">发现了我</view>
                    </view>
                </cu-skeleton>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                带有头像
            </view>
            <view class="action">
                开启骨架屏
                <switch @change="openSkeleton" class="margin-left-xs" :checked="loading"></switch>
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-card article no-card" v-for="(item, index) in data_var" :key="index">
                <cu-skeleton :loading="item.loading" avatar :column="4" :columnWidth="['60%', '90%', '70%', '70%']" endHeight="36rpx">
                    <view class="flex">
                        <view class="cu-avatar lg round margin-left bg-red">
                            <text class="text-lg">小可</text>
                        </view>
                        <view class="padding-sm">
                            <view class="text-lg text-black">岁月静好</view>
                            <view class="text-lg padding-tb-xs">你的努力一定会被旁人看在眼里。</view>
                            <view class="text-lg">谢谢你 在这世界的角落 发现了我</view>
                            <view class="text-lg padding-top-xs">追踪着鹿的猎人是看不见山的。</view>
                        </view>
                    </view>
                </cu-skeleton>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import cuSkeleton from '@/colorui/components/skeleton/skeleton';
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/skeleton/skeleton.js
export default {
    components: {
        cuSkeleton,
        copyright
    },
    data() {
        return {
            loading: false,
            sample: [
                {
                    tagName: '小可'
                },
                {
                    tagName: '小可'
                }
            ],
            data_var: []
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let _data = this.sample;
        _data.forEach((v) => {
            v.loading = false;
        });
        this.setData({
            data_var: _data
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
    methods: {
        /**
         * 开启骨架屏
         */
        openSkeleton() {
            this.setData({
                loading: !this.loading
            });
            let _data = this.sample;
            _data.forEach((v) => {
                v.loading = false;
            });
            this.setData({
                data_var: _data
            });
            if (this.loading == false) {
                _data.forEach((v) => {
                    v.loading = false;
                });
            }
            if (this.loading == true) {
                _data.forEach((v) => {
                    v.loading = true;
                });
            }
            this.setData({
                data_var: _data
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/skeleton/skeleton.wxss */
</style>
