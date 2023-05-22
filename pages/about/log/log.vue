<template>
    <view style="height: 100%">
        <!-- pages/about/log/log.wxml -->

        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">更新日志</view>
        </cu-custom>

        <view class="cu-timeline">
            <block v-for="(item, index) in logData" :key="index">
                <view class="cu-item text-blue">
                    <view class="bg-blue light content shadow">
                        <view class="cu-capsule radius">
                            <view class="cu-tag bg-white text-blue">{{ item.version }}</view>
                            <view class="cu-tag line-blue">{{ item.data }}</view>
                        </view>
                        <view class="margin-top-sm text-content" v-for="(item, index1) in item.info" :key="index1">
                            <view>{{ item }}</view>
                        </view>
                    </view>
                </view>
            </block>
            <view class="margin-top">
                <copyright compName="copyright"></copyright>
            </view>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/about/log/log.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            logData: [
                {
                    version: 'v2.1.1',
                    data: '2023/2/5',
                    info: ['1.新增新闻资讯模板+3', '2.样式库代码调整']
                },
                {
                    version: 'v2.1.0',
                    data: '2023/1/12',
                    info: ['1.新增完整UI模板《北岛小店》', '2.新增倒计时样式', '3.新增进步器样式', '4.样式库代码调整']
                },
                {
                    version: 'v2.0.9',
                    data: '2023/1/5',
                    info: ['1.新增书籍学习模板+2', '2.新增登录注册模板+2', '3.新增日历农历、常用公司logo图标', '4.部分样式调整']
                },
                {
                    version: 'v2.0.8',
                    data: '2022/12/15',
                    info: ['1.新增骨架屏、日历、表格样式', '2.新增历史搜索、卡券、商品滑动样式', '3.新增轻提示、抽奖、卡片设计样式', '4.部分样式调整']
                },
                {
                    version: 'v2.0.7',
                    data: '2022/12/12',
                    info: ['1.UI模板+4', '2.新增评分样式', '3.新增手风琴样式', '4.新增滚动提示样式', '5.部分样式调整']
                },
                {
                    version: 'v2.0.6',
                    data: '2022/12/09',
                    info: ['1.用户列表UI模板+2', '2.评论页UI模板+2', '3.新增瀑布流样式', '4.新增背景色样式', '5.轮播图样式+1', '6.部分样式调整']
                },
                {
                    version: 'v2.0.5',
                    data: '2022/11/27',
                    info: ['1.首页UI模板+2', '2.个人中心UI模板+2', '3.部分样式更新']
                },
                {
                    version: 'v2.0.4',
                    data: '2022/10/24',
                    info: ['1.优化darkmodel样式', '2.新增背景浅色渐变高亮样式', '3.部分样式更新']
                },
                {
                    version: 'v2.0.3',
                    data: '2022/10/18',
                    info: ['1.去除模板页', '2.新增黑色模式', '3.部分样式更新']
                },
                {
                    version: 'v2.0.2',
                    data: '2022/10/16',
                    info: ['1.新增模板页、关于页', '2.去除悬浮按钮，新增关于页面', '3.新增日志更新页面', '4.代码开源']
                },
                {
                    version: 'v2.0.1',
                    data: '2022/10/14',
                    info: ['1.ColorUI 2.0基础代码结构重构', '2.临时修复swiper左侧消失bug', '3.基础页面开发']
                }
            ]
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
/* pages/about/log/log.wxss */
</style>
