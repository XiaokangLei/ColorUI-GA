<template>
    <view style="height: 100%">
        <!-- index.wxml -->

        <!-- 底部tab跳转对应页面 -->
        <basics v-if="PageCur == 'basics'"></basics>
        <component v-if="PageCur == 'component'"></component>
        <templates v-if="PageCur == 'templates'"></templates>
        <about v-if="PageCur == 'about'"></about>
        <plugin v-if="PageCur == 'plugin'"></plugin>

        <!-- 悬浮工具栏 -->
        <!-- <view class="fixed-tools-view show margin-bottom" style="z-index:200;">
  <view class="icon-view show" bindtap="showModal" data-target="DialogModal2">
    <text class="cuIcon-info text-red" />
  </view>
</view>

<view class="cu-modal {{modalName=='DialogModal2'?'show':''}}">
  <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
      <view class="content text-blue">关于ColorUI GA</view>
      <view class="action" bindtap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-xl">
      <view>Hi！开发者~欢迎使用ColorUI-GA组件库！</view>
      <view class='margin-top-sm'>该项目是基于ColorUI 2.0开发的小程序组件库。在原组件库的基础上会增加部分样式和模板，长期更新，如果您有好的想法请移步到Github提交Issues。努力重构代码中，完成后开源。</view>
      <view class='margin-top-sm'>更多功能敬请期待！</view>
    </view>
    <view class="cu-bar bg-white">
      <view class="action margin-0 flex-sub text-blue solid-left" bindtap="hideModal">确定</view>
    </view>
  </view>
</view> -->

        <view class="cu-bar tabbar shadow foot bg-blur">
            <view class="action" @tap="NavChange" data-cur="basics">
                <view class="cuIcon-cu-image">
                    <image :src="'/images/tabbar/navi' + (PageCur == 'basics' ? '_cur' : '') + '/static/pages/index/.png'"></image>
                </view>
                <view :class="PageCur == 'basics' ? 'text-blue' : 'text-gray'">基础</view>
            </view>

            <view class="action" @tap="NavChange" data-cur="component">
                <view class="cuIcon-cu-image">
                    <image :src="'/images/tabbar/component' + (PageCur == 'component' ? '_cur' : '') + '/static/pages/index/.png'"></image>
                </view>
                <view :class="PageCur == 'component' ? 'text-blue' : 'text-gray'">组件</view>
            </view>

            <view class="action" @tap="NavChange" data-cur="templates">
                <view class="cuIcon-cu-image">
                    <image :src="'/images/tabbar/basics' + (PageCur == 'templates' ? '_cur' : '') + '/static/pages/index/.png'"></image>
                </view>
                <view :class="PageCur == 'templates' ? 'text-blue' : 'text-gray'">设计</view>
            </view>

            <view class="action" @tap="NavChange" data-cur="plugin">
                <view class="cuIcon-cu-image">
                    <image :src="'/images/tabbar/chat' + (PageCur == 'plugin' ? '_cur' : '') + '/static/pages/index/.png'"></image>
                </view>
                <view :class="PageCur == 'plugin' ? 'text-blue' : 'text-gray'">扩展</view>
            </view>

            <view class="action" @tap="NavChange" data-cur="about">
                <view class="cuIcon-cu-image">
                    <image :src="'/images/tabbar/about' + (PageCur == 'about' ? '_cur' : '') + '/static/pages/index/.png'"></image>
                </view>
                <view :class="PageCur == 'about' ? 'text-blue' : 'text-gray'">关于</view>
            </view>
        </view>
    </view>
</template>

<script>
import basics from '@/pages/index/basics/home/home';
import component from '@/pages/index/component/home/home';
import templates from '@/pages/template/home/home';
import plugin from '@/pages/index/plugin/home/home';
import about from '@/pages/about/home/home';
// index.js
export default {
    components: {
        basics,
        component,
        templates,
        plugin,
        about
    },
    data() {
        return {
            PageCur: 'templates',
            modalName: ''
        };
    },
    /**
     * 页面分享
     */
    onShareAppMessage() {
        return {
            title: '轻量、可靠的UI模板库',
            imageUrl: '/static/images/share.jpg',
            path: '/pages/index/index'
        };
    },
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

        NavChange(e) {
            this.setData({
                PageCur: e.currentTarget.dataset.cur
            });
        }
    }
};
</script>
<style>
/**index.wxss**/

/* 悬浮工具栏 */
.fixed-tools-view {
    position: fixed;
    right: 40rpx;
    bottom: -360rpx;
    width: 80rpx;
    transition: all 0.4s ease-in-out 0s;
}

.fixed-tools-view .icon-view {
    position: relative;
    background: #ffffff;
    border: 1rpx solid #e8e8e8;
    height: 0rpx;
    width: 0rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48rpx;
    color: #585858;
    border-radius: 1024rpx;
    visibility: hidden;
    transition: all 0.4s ease-in-out 0s;
}

.fixed-tools-view .icon-view.show {
    height: 72rpx;
    width: 72rpx;
    visibility: visible;
}

.fixed-tools-view .icon-view.show + .icon-view.show {
    margin-top: 24rpx;
}

.fixed-tools-view.show {
    bottom: 120rpx;
}
</style>
