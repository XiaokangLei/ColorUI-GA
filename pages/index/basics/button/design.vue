<template>
    <view style="height: 100%">
        <!-- pages/index/basics/button/design.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">按钮设计</view>
        </cu-custom>

        <view class="padding-xl">
            <view :class="'flex justify-center align-center bg-white text-center radius-lg ' + (block ? 'flex-column' : '')" style="height: 280rpx">
                <button
                    :class="
                        'cu-btn ' +
                        (border ? 'line' : 'bg') +
                        (bordersize ? bordersize : '') +
                        '-' +
                        color +
                        ' ' +
                        (round ? 'round' : '') +
                        ' ' +
                        size +
                        ' ' +
                        (shadow ? 'shadow' : '') +
                        ' ' +
                        (block ? 'block' : '')
                    "
                >
                    我是一个按钮
                </button>
            </view>
            <view class="padding text-center">
                class="cu-btn < text wx:if="{{ color }}"> {{ border ? 'line' : 'bg' }}{{ bordersize ? bordersize : '' }}-{{ color }} {{ round ? 'round' : '' }} {{ size }}
                {{ shadow ? 'shadow' : '' }} {{ block ? 'block' : '' }}"
            </view>
        </view>

        <view class="margin-sm">
            <view class="cu-form-group margin-top radius-lg-top" @tap="showModal" data-target="ColorModal">
                <view class="title">选择颜色</view>
                <view :class="'padding bg-' + color + ' solid radius shadow-blur'"></view>
            </view>

            <view class="cu-form-group">
                <view class="title">是否圆角</view>
                <switch class="sm" @change="SetRound"></switch>
            </view>

            <view class="cu-form-group">
                <view class="title">选择尺寸</view>
                <radio-group @change="SetSize">
                    <label class="margin-left-sm">
                        <radio class="blue sm radio" value="sm"></radio>
                        <text>小</text>
                    </label>
                    <label class="margin-left-sm">
                        <radio class="blue sm radio" value="" checked></radio>
                        <text>中</text>
                    </label>
                    <label class="margin-left-sm">
                        <radio class="blue sm radio" value="lg"></radio>
                        <text>大</text>
                    </label>
                    <label class="margin-left-sm">
                        <radio class="blue sm radio" value="xxl"></radio>
                        <text>超大</text>
                    </label>
                </radio-group>
            </view>

            <view class="cu-form-group">
                <view class="title">是否添加阴影</view>
                <switch class="sm" @change="SetShadow"></switch>
            </view>

            <view class="cu-form-group radius-lg-bottom">
                <view class="title">是否镂空</view>
                <switch class="sm" @change="SetBorder"></switch>
            </view>
        </view>

        <view class="cu-form-group margin-sm radius" v-if="border">
            <view class="title">边框粗细</view>
            <radio-group @change="SetBorderSize">
                <label class="margin-left-sm">
                    <radio class="blue sm radio" value="" checked></radio>
                    <text>细</text>
                </label>
                <label class="margin-left-sm">
                    <radio class="blue sm radio" value="s"></radio>
                    <text>粗</text>
                </label>
            </radio-group>
        </view>

        <view :class="'cu-modal ' + (modalName == 'ColorModal' ? 'show' : '')">
            <view class="cu-dialog">
                <view class="cu-bar justify-end solid-bottom">
                    <view class="content">选择颜色</view>
                    <view class="action" @tap="hideModal">
                        <text class="cuIcon-close text-red"></text>
                    </view>
                </view>
                <view class="grid col-5 padding">
                    <view class="padding-xs" @tap="SetColor" :data-color="item.name" v-if="item.name != 'white'" v-for="(item, index) in ColorList" :key="index">
                        <view :class="'padding-tb bg-' + item.name + ' radius'">{{ item.title }}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
// pages/index/basics/button/design.js
const app = getApp();
export default {
    data() {
        return {
            ColorList: app.globalData.ColorList,
            color: 'blue',
            modalName: '',
            round: '',
            size: '',
            shadow: '',
            border: '',
            bordersize: false,
            block: false
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
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
        showModal(e) {
            this.setData({
                modalName: e.currentTarget.dataset.target
            });
        },

        hideModal(e) {
            this.setData({
                modalName: null
            });
        },

        SetRound(e) {
            this.setData({
                round: e.detail.value
            });
        },

        SetSize(e) {
            this.setData({
                size: e.detail.value
            });
        },

        SetColor(e) {
            this.setData({
                color: e.currentTarget.dataset.color,
                modalName: null
            });
        },

        SetShadow(e) {
            this.setData({
                shadow: e.detail.value
            });
        },

        SetBorder(e) {
            this.setData({
                border: e.detail.value
            });
            if (!e.detail.value) {
                this.setData({
                    bordersize: false
                });
            }
        },

        SetBorderSize(e) {
            this.setData({
                bordersize: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/index/basics/button/design.wxss */
</style>
