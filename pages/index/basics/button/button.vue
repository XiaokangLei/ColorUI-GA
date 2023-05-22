<template>
    <view style="height: 100%">
        <!-- pages/index/basics/button/button.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">按钮</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                按钮形状
            </view>
            <navigator class="action" url="design" hover-class="none">
                <text class="text-df text-orange margin-right-sm">自定义</text>
                <text class="cuIcon-skinfill text-orange"></text>
            </navigator>
        </view>

        <view class="padding flex flex-wrap justify-between align-center bg-white margin-sm radius-df">
            <button class="cu-btn">默认</button>
            <button class="cu-btn round">圆角</button>
            <button class="cu-btn icon">
                <text class="cuIcon-emojifill text-blue"></text>
            </button>
        </view>

        <view class="cu-bar margin-top bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                按钮尺寸
            </view>
        </view>

        <view class="padding flex flex-wrap justify-between align-center bg-white margin-sm radius-df">
            <button class="cu-btn round sm">小尺寸</button>
            <button class="cu-btn round">默认</button>
            <button class="cu-btn round lg">大尺寸</button>
            <button class="cu-btn round xxl">超大尺寸</button>
        </view>

        <view class="cu-bar margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                按钮颜色
            </view>
            <view class="action">
                <text class="text-df margin-right-sm">阴影</text>
                <switch class="sm" @change="SetShadow"></switch>
            </view>
        </view>

        <view class="grid col-5 bg-white padding-sm margin-sm radius-lg">
            <view class="margin-tb-sm text-center" v-for="(item, index) in ColorList" :key="index">
                <button :class="'cu-btn round bg-' + item.name + ' ' + (shadow ? 'shadow' : '')">{{ item.title }}</button>
            </view>
        </view>

        <view class="cu-bar margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                镂空按钮
            </view>
            <view class="action">
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
        </view>

        <view class="grid col-5 bg-white padding-sm margin-sm radius-lg">
            <view class="margin-tb-sm text-center" v-if="item.name != 'white'" v-for="(item, index) in ColorList" :key="index">
                <button :class="'cu-btn round line' + (bordersize ? bordersize : '') + '-' + item.name + ' ' + (shadow ? 'shadow' : '')">{{ item.title }}</button>
            </view>
        </view>

        <view class="cu-bar margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                块状按钮
            </view>
        </view>

        <view class="padding flex flex-column bg-white margin-sm radius-lg">
            <button class="cu-btn bg-grey lg">玄灰</button>
            <button class="cu-btn bg-red margin-tb-sm lg">嫣红</button>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text>操作条按钮组</text>
            </view>
        </view>

        <view class="box bg-white margin-sm radius-lg">
            <view class="cu-bar btn-group">
                <button class="cu-btn bg-orange shadow-blur round lg">保存</button>
            </view>
            <view class="cu-bar btn-group">
                <button class="cu-btn bg-green shadow-blur">取消</button>
                <button class="cu-btn text-green line-green shadow">上传</button>
            </view>
            <view class="cu-bar btn-group">
                <button class="cu-btn bg-green shadow-blur round">保存</button>
                <button class="cu-btn bg-blue shadow-blur round">提交</button>
            </view>
        </view>

        <view class="cu-bar margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                无效状态
            </view>
        </view>

        <view class="padding bg-white margin-sm radius-lg">
            <button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
            <button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
        </view>

        <view class="cu-bar margin-top bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                按钮加图标
            </view>
        </view>

        <view class="padding-xl bg-white margin-sm radius-lg">
            <button class="cu-btn block line-orange lg">
                <text class="cuIcon-upload"></text>
                上传
            </button>
            <button class="cu-btn block bg-blue margin-tb-sm lg">
                <text class="cuIcon-loading2 iconfont-spin"></text>
                加载
            </button>
            <button class="cu-btn block bg-green light margin-tb-sm lg" loading>加载中</button>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/button/button.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            ColorList: app.globalData.ColorList,
            shadow: '',
            bordersize: ''
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
        SetShadow(e) {
            this.setData({
                shadow: e.detail.value
            });
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
/* pages/index/basics/button/button.wxss */
</style>
