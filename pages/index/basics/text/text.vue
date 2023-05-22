<template>
    <view style="height: 100%">
        <!-- pages/index/basics/text/text.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">文本</view>
        </cu-custom>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                大小
            </view>
        </view>

        <view class="padding-sm">
            <view class="bg-white padding-xs flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-xsl padding">
                        <text class="cuIcon-roundcheckfill text-green">文字</text>
                    </view>
                    <view class="padding">字号：60，用于图标、数字等特大显示</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-sl padding">
                        <text class="cuIcon-roundcheckfill text-green">文字</text>
                    </view>
                    <view class="padding">字号：40，用于图标、数字等较大显示</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-xxl padding">
                        <text class="text-price text-red">80.'00'</text>
                    </view>
                    <view class="padding">字号：22，用于金额数字等信息</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-xl padding">
                        <text class="text-black text-bold">您的订单已提交成功！</text>
                    </view>
                    <view class="padding">字号：18，页面大标题，用于结果页等单一信息页</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-lg padding">
                        <text class="text-black">ColorUI-GA组件库</text>
                    </view>
                    <view class="padding">字号：16，页面小标题，首要层级显示内容</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-df padding">专注视觉的小程序组件库</view>
                    <view class="padding">字号：14，页面默认字号，用于摘要或阅读文本</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-sm padding">
                        <text class="text-grey">衬衫的价格是9磅15便士</text>
                    </view>
                    <view class="padding">字号：12，页面辅助信息，次级内容等</view>
                </view>
            </view>
            <view class="bg-white padding-xs margin-top flex align-center radius-df">
                <view class="flex-sub text-center">
                    <view class="solid-bottom text-xs padding">
                        <text class="text-gray">谢谢你 在这世界的角落 发现了我</text>
                    </view>
                    <view class="padding">字号：10，说明文本，标签文字等关注度低的文字</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                颜色
            </view>
        </view>

        <view class="grid col-5 bg-white margin-sm padding-sm radius-lg">
            <view class="padding-sm" v-if="item.name != 'white'" v-for="(item, index) in list" :key="index">
                <view :class="'text-' + item.name + ' text-center'">
                    {{ item.title }}
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                阴影
            </view>
        </view>

        <view class="grid col-5 bg-white margin-sm padding-sm radius-lg">
            <view class="padding-sm" v-if="item.name != 'white'" v-for="(item, index) in list" :key="index">
                <view :class="'text-center text-shadow text-' + item.name">
                    <view class="cuIcon-ellipse text-xxl"></view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                截断
            </view>
        </view>

        <view class="bg-white margin-sm padding-sm radius-lg">
            <view class="text-cut padding bg-blue light radius" style="width: 480rpx">ColorUi GA 轻量、可靠的小程序原生css组件库，每周更新UI模板库</view>
            <view class="padding bg-blue light radius margin-top" style="width: 480rpx">
                <text class="text-cut-2">ColorUi GA 轻量、可靠的小程序原生css组件库，每周更新UI模板库</text>
            </view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                对齐
            </view>
        </view>

        <view class="bg-white margin-sm padding-sm radius-lg">
            <view class="text-left padding">谢谢你 在这世界的角落 发现了我</view>
            <view class="text-center padding">谢谢你 在这世界的角落 发现了我</view>
            <view class="text-right padding">谢谢你 在这世界的角落 发现了我</view>
        </view>

        <view class="cu-bar bg-white solid-bottom margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                特殊文字
            </view>
        </view>

        <view class="padding-sm text-center">
            <view class="padding-lr bg-white radius-df">
                <view class="solid-bottom padding">
                    <text class="text-price">80.'00'</text>
                </view>
                <view class="padding">价格文本，利用伪元素添加"¥"符号</view>
            </view>
            <view class="padding-lr bg-white margin-top radius-df">
                <view class="solid-bottom padding">
                    <text class="text-Abc">color Ui</text>
                </view>
                <view class="padding">英文单词首字母大写</view>
            </view>
            <view class="padding-lr bg-white margin-top radius-df">
                <view class="solid-bottom padding">
                    <text class="text-ABC">color Ui</text>
                </view>
                <view class="padding">全部字母大写</view>
            </view>
            <view class="padding-lr bg-white margin-top radius-df">
                <view class="solid-bottom padding">
                    <text class="text-abc">color Ui</text>
                </view>
                <view class="padding">全部字母小写</view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/text/text.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            list: app.globalData.ColorList
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
    methods: {}
};
</script>
<style>
/* pages/index/basics/text/text.wxss */
</style>
