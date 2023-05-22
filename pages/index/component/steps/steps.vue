<template>
    <view style="height: 100%">
        <!-- pages/index/component/steps/steps.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">步骤条</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基本用法
            </view>
            <view class="action">
                <button class="cu-btn bg-blue shadow" @tap="basicsSteps">下一步</button>
            </view>
        </view>

        <view class="bg-white margin-xs padding radius-df margin-sm">
            <view class="cu-steps">
                <view :class="'cu-item ' + (index > basics ? '' : 'text-red')" v-for="(item, index) in basicsList" :key="index">
                    <text :class="'cuIcon-' + item.icon"></text>

                    {{ item.name }}
                </view>
            </view>
        </view>

        <view class="bg-white margin-xs padding radius-df margin-sm">
            <view class="cu-steps">
                <view :class="'cu-item ' + (index > basics ? '' : 'text-orange')" v-for="(item, index) in basicsList" :key="index">
                    <text :class="'cuIcon-' + (index > basics ? 'title' : item.icon)"></text>

                    {{ item.name }}
                </view>
            </view>
        </view>

        <view class="bg-white margin-xs padding radius-df margin-sm">
            <view class="cu-steps steps-arrow">
                <view :class="'cu-item ' + (index > basics ? '' : 'text-blue')" v-for="(item, index) in basicsList" :key="index">
                    <text :class="'cuIcon-' + item.icon"></text>

                    {{ item.name }}
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                数字完成
            </view>
            <view class="action">
                <button class="cu-btn bg-blue shadow" @tap="numSteps">下一步</button>
            </view>
        </view>

        <view class="bg-white margin-xs padding radius-df margin-sm">
            <view class="cu-steps">
                <view :class="'cu-item ' + (index > num ? '' : 'text-blue')" v-for="(item, index) in numList" :key="index">
                    <text :class="'num ' + (index == 2 ? 'err' : '')" :data-index="index + 1"></text>

                    {{ item.name }}
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                多级显示
            </view>
            <view class="action">
                <button class="cu-btn bg-blue shadow" @tap="scrollSteps">下一步</button>
            </view>
        </view>

        <scroll-view scroll-x class="bg-white padding response cu-steps steps-bottom margin-top-sm" :scroll-into-view="'scroll-' + scroll" scroll-with-animation>
            <view :class="'cu-item ' + (index > scroll ? '' : 'text-blue') + ' padding-lr-xl'" :id="'scroll-' + index" v-for="(item, index) in 10" :key="index">
                Level {{ index + 1 }}

                <text class="num" :data-index="index + 1"></text>
            </view>
        </scroll-view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/steps/steps.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            basicsList: [
                {
                    icon: 'usefullfill',
                    name: '开始'
                },
                {
                    icon: 'radioboxfill',
                    name: '等待'
                },
                {
                    icon: 'roundclosefill',
                    name: '错误'
                },
                {
                    icon: 'roundcheckfill',
                    name: '完成'
                }
            ],
            basics: 0,
            numList: [
                {
                    name: '开始'
                },
                {
                    name: '等待'
                },
                {
                    name: '错误'
                },
                {
                    name: '完成'
                }
            ],
            num: 0,
            scroll: 0
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
        basicsSteps() {
            this.setData({
                basics: this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1
            });
        },

        numSteps() {
            this.setData({
                num: this.num == this.numList.length - 1 ? 0 : this.num + 1
            });
        },

        scrollSteps() {
            this.setData({
                scroll: this.scroll == 9 ? 0 : this.scroll + 1
            });
        }
    }
};
</script>
<style>
/* pages/index/component/steps/steps.wxss */
</style>
