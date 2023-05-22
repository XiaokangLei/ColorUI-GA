<template>
    <view style="height: 100%">
        <!-- pages/about/home/home.wxml -->

        <!-- 背景图 -->
        <image src="/static/images/bg.png" mode="widthFix" class="bg-img-new"></image>

        <scroll-view scroll-y class="scrollPage">
            <view class="UCenter-bg">
                <image src="/static/images/tabbar/basics_cur.png" class="png" mode="widthFix"></image>
                <view class="text-xl text-orange text-blod">
                    ColorUI GA
                    <text class="text-df">v2.1.1</text>
                </view>
                <text class="margin-top-sm text-orange">By: L.</text>
                <text class="margin-top-sm text-gray">最近更新：2023/2/5</text>
            </view>
            <view class="margin">
                <view class="padding-bottom flex text-center">
                    <view class="flex flex-sub flex-column text-orange">
                        <view class="text-xxl text-bold">{{ modelTotal }}</view>
                        <view class="margin-top-xs">
                            <text class="cuIcon-circlefill"></text>
                            样式
                        </view>
                    </view>
                    <view class="flex flex-sub flex-column text-blue">
                        <view class="text-xxl text-bold">{{ templateCount }}</view>
                        <view class="margin-top-xs">
                            <text class="cuIcon-newsfill"></text>
                            模板
                        </view>
                    </view>
                    <view class="flex flex-sub flex-column text-pink">
                        <view class="text-xxl text-bold">{{ visitTotal }}</view>
                        <view class="margin-top-xs">
                            <text class="cuIcon-attentionfill"></text>
                            访问
                        </view>
                    </view>
                    <view class="flex flex-sub flex-column text-green">
                        <view class="text-xxl text-bold">{{ usersCount }}</view>
                        <view class="margin-top-xs">
                            <text class="cuIcon-myfill"></text>
                            用户
                        </view>
                    </view>
                </view>
            </view>

            <view class="cu-list menu card-menu sm-border margin-top margin-bottom-xl shadow radius-lg">
                <view class="cu-item arrow" @tap="toPage" data-url="/pages/about/about/about">
                    <view class="content">
                        <image src="/static/images/tabbar/basics_cur.png" class="png" mode="aspectFit"></image>
                        <text>关于小程序</text>
                    </view>
                </view>
                <view class="cu-item arrow" @tap="toPage" data-url="/pages/about/log/log">
                    <view class="content">
                        <text class="cuIcon-formfill text-blue"></text>
                        <text>更新日志</text>
                    </view>
                </view>
                <view class="cu-item arrow" @tap="toPage" data-url="/pages/about/appreciate/appreciate">
                    <view class="content">
                        <text class="cuIcon-wefill text-red"></text>
                        <text>致谢</text>
                    </view>
                </view>
                <view class="cu-item" @tap="CopyText" data-link="https://github.com/XiaokangLei/ColorUI-GA">
                    <view class="content">
                        <text class="cuIcon-github text-black"></text>
                        <text>源码开源</text>
                    </view>
                    <view class="cuIcon-copy text-blue"></view>
                </view>
                <view class="cu-item" @tap="CopyText" data-link="https://one.x-artspace.cn/ColorUI-GA-Docs">
                    <view class="content">
                        <text class="cuIcon-link text-green"></text>
                        <text>文档链接</text>
                    </view>
                    <view class="cuIcon-copy text-blue"></view>
                </view>
            </view>

            <view class="cu-list menu card-menu sm-border margin-top-sm shadow-lg">
                <!-- 联系作者 -->
                <view class="cu-item">
                    <button class="cu-btn content" open-type="contact">
                        <text class="cuIcon-service text-orange text-xl"></text>
                        <text class="text-l text-black">联系作者</text>
                    </button>
                </view>
                <view class="cu-item">
                    <button class="cu-btn content" open-type="feedback">
                        <text class="cuIcon-write text-cyan text-xl"></text>
                        <text class="text-l text-black">意见反馈</text>
                    </button>
                </view>
            </view>
            <view class="margin-top">
                <copyright compName="copyright"></copyright>
            </view>

            <view class="cu-tabbar-height"></view>
        </scroll-view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/about/home/home.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            templateCount: 0,
            usersCount: 0,
            modelTotal: 0,
            visitTotal: 0
        };
    },
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    props: {},
    /**
     * 组件的方法列表
     */
    methods: {
        attached() {
            let that = this;
            uni.showLoading({
                title: '数据加载中',
                mask: true
            });
            let i = 0;
            numDH();
            function numDH() {
                if (i < 20) {
                    setTimeout(function () {
                        that.setData({
                            templateCount: i,
                            usersCount: i,
                            modelTotal: i,
                            visitTotal: i
                        });
                        i++;
                        numDH();
                    }, 20);
                } else {
                    that.setData({
                        templateCount: that.coutNum(20),
                        usersCount: that.coutNum(1480),
                        modelTotal: that.coutNum(46),
                        visitTotal: that.coutNum(3676)
                    });
                }
            }
            uni.hideLoading();
        },

        coutNum(e) {
            if (e > 1000 && e < 10000) {
                e = (e / 1000).toFixed(1) + 'k';
            }
            if (e > 10000) {
                e = (e / 10000).toFixed(1) + 'W';
            }
            return e;
        },

        CopyText(e) {
            uni.setClipboardData({
                data: e.currentTarget.dataset.link,
                success: (res) => {
                    uni.showToast({
                        title: '链接已复制',
                        duration: 1000
                    });
                }
            });
        },

        toPage(e) {
            uni.navigateTo({
                url: e.currentTarget.dataset.url
            });
        }
    },
    mounted() {
        // 处理小程序 attached 生命周期
        this.attached();
    },
    created: function () {}
};
</script>
<style>
/* pages/about/home/home.wxss */
.UCenter-bg {
    /* background-image: url("https://image.weilanwl.com/color2.0/index.jpg"); */
    background-size: cover;
    height: 480rpx;
    display: flex;
    justify-content: center;
    padding-top: 40rpx;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-weight: 300;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.UCenter-bg .text {
    opacity: 0.8;
}

.png {
    width: 200rpx;
    height: 200rpx;
}

.UCenter-bg .gif-wave {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
    mix-blend-mode: screen;
    height: 100rpx;
}
</style>
