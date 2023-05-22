<template>
    <view style="height: 100%">
        <!-- pages/index/component/stepper/stepper.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">步进器</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基础样式
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag round bg-green sm cuIcon-move" @tap="decrease"></view>
                <view class="margin-lr text-black">{{ number }}</view>
                <view class="cu-tag round bg-red sm cuIcon-add" @tap="increase"></view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                自定义形状、颜色
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag round bg-green light sm cuIcon-move" @tap="decrease"></view>
                <view class="margin-lr text-black">{{ number }}</view>
                <view class="cu-tag round bg-red light sm cuIcon-add" @tap="increase"></view>
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag round bg-gray sm cuIcon-move" @tap="decrease"></view>
                <view class="margin-lr text-black">{{ number }}</view>
                <view class="cu-tag round bg-orange sm cuIcon-add" @tap="increase"></view>
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag radius bg-gray sm cuIcon-move" @tap="decrease"></view>
                <view class="margin-lr text-black">{{ number }}</view>
                <view class="cu-tag radius bg-gray sm cuIcon-add" @tap="increase"></view>
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag radius bg-gray sm cuIcon-move" @tap="decrease"></view>
                <view class="margin-lr text-black">{{ number }}</view>
                <view class="cu-tag radius bg-gray sm cuIcon-add" @tap="increase"></view>
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cuIcon-move" @tap="decrease"></view>
                <view class="cu-tag radius bg-gray margin-lr text-black text-lg">{{ number }}</view>
                <view class="cuIcon-add" @tap="increase"></view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                修改值
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag round bg-gray sm cuIcon-move" @tap="inputDecrease"></view>
                <view class="margin-lr text-black text-center solids-bottom" style="max-width: 64rpx">
                    <input type="number" :value="numberInput" :placeholder="numberInput" placeholder-style="color:#000000" @input="onInput" />
                    {{ numberInput }}
                </view>
                <view class="cu-tag round bg-orange sm cuIcon-add" @tap="inputIncrease"></view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                限制显示长度(0-100)
            </view>
        </view>

        <view class="bg-white padding">
            <view class="flex justify-center align-center text-lg">
                <view class="cu-tag round bg-gray sm cuIcon-move" @tap="inputDecrease"></view>
                <view class="margin-lr text-black text-center solids-bottom" style="max-width: 64rpx">
                    <input type="number" maxlength="2" :value="numberInput" :placeholder="numberInput" placeholder-style="color:#000000" @input="onInput" />
                    {{ numberInput }}
                </view>
                <view class="cu-tag round bg-orange sm cuIcon-add" @tap="inputIncrease"></view>
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
// pages/index/component/stepper/stepper.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            number: 0,
            numberInput: 0
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
         * 减少
         */
        decrease() {
            let that = this;
            let number = that.number - 1;
            if (number < 0) {
                number = 0;
            }
            that.setData({
                number: number
            });
        },

        /**
         * 减少
         */
        increase() {
            let that = this;
            let number = that.number + 1;
            that.setData({
                number: number
            });
        },

        onInput(e) {
            let that = this;
            let numberInput = e.detail.value;
            that.setData({
                numberInput: numberInput
            });
        },

        /**
         * 减少
         */
        inputDecrease() {
            let that = this;
            let numberInput = parseInt(that.numberInput) - 1;
            if (numberInput < 0) {
                numberInput = 0;
            }
            that.setData({
                numberInput: numberInput
            });
        },

        /**
         * 增加
         */
        inputIncrease() {
            let that = this;
            let numberInput = parseInt(that.numberInput) + 1;
            that.setData({
                numberInput: numberInput
            });
        }
    }
};
</script>
<style>
/* pages/index/component/stepper/stepper.wxss */
</style>
