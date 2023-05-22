<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/piano/piano.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">手风琴</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基础样式
            </view>
        </view>

        <view class="cu-list margin-top menu" v-for="(item, index) in list" :key="index">
            <view class="cu-item" @tap="click" :data-index="index">
                <view class="content padding-tb-sm">
                    <view>{{ item['name'] }}</view>
                </view>
                <view class="action padding-left-xs">
                    <text :class="'cuIcon-' + (item['checked'] ? 'unfold' : 'right')"></text>
                </view>
            </view>

            <view :class="'cu-item ' + (item['checked'] ? '' : 'piano-hidden-content')" v-for="(child, index1) in item.content" :key="index1">
                <view class="content">
                    <text>{{ child }}</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                文字展开与收起
            </view>
        </view>

        <view class="cu-bar padding-top-xs">
            <view class="action">
                <text class="cuIcon-title text-blue text-sm"></text>
                点击展开/收起按钮
            </view>
        </view>

        <view class="bg-white radius-df margin-sm padding-xs flex">
            <view :class="'piano-text ' + (value ? 'piano-ative' : '')">
                <label :class="'piano-btn ' + (value ? 'piano-ative_label' : '') + ' text-white radius bg-blue padding-lr-xs text-sm margin-left-sm'" @tap="checkboxChange"></label>
                ColorUI GA是基于ColorUI
                2.0开发的小程序原生css组件库。在原组件库的基础上会增加部分样式和模板，代码全部开源，长期更新，如果您有好的想法或对本项目有任何建议以及发现文中内容有误的请提交
                Github Issues。对于想要一起开发，补充CSS样式库的朋友，欢迎提交 PR。
            </view>
        </view>

        <view class="cu-bar">
            <view class="action">
                <text class="cuIcon-title text-blue text-sm"></text>
                点击文字展开/收起
            </view>
        </view>

        <view class="bg-white radius-df margin-sm padding-xs flex" @tap="checkboxChange">
            <view :class="'piano-text ' + (value ? 'piano-ative' : '')">
                <label :class="'piano-btn-icon ' + (value ? 'piano-ative_label' : '') + ' text-white padding-lr-xs text-sm margin-left-sm'"></label>
                ColorUI GA是基于ColorUI
                2.0开发的小程序原生css组件库。在原组件库的基础上会增加部分样式和模板，代码全部开源，长期更新，如果您有好的想法或对本项目有任何建议以及发现文中内容有误的请提交
                Github Issues。对于想要一起开发，补充CSS样式库的朋友，欢迎提交 PR。
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
// pages/index/plugin/piano/piano.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            list: [
                {
                    name: '这里是标题，点击可展开',
                    content: ['内容一', '内容二'],
                    checked: false
                },
                {
                    name: '这里是第二个标题，点击展开',
                    content: ['内容一', '内容二'],
                    checked: false
                },
                {
                    name: '这里是第三个标题，点击展开',
                    content: ['内容一', '内容二'],
                    checked: false
                }
            ],

            value: false,
            child: ''
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
        // 点击列表,收缩与展示
        click(event) {
            const index = event.currentTarget.dataset.index;
            const { list } = this;
            if (list[index].checked == true) {
                list[index].checked = false;
            } else {
                list[index].checked = true;
            }
            this.setData({
                list
            });
        },

        checkboxChange(e) {
            this.setData({
                value: !this.value
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/piano/piano.wxss */
</style>
