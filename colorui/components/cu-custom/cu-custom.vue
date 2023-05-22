<template>
    <!-- colorui/components/cu-custom.wxml -->
    <view :class="'cu-custom ' + (isLucency == true ? 'lucency' : '')" :style="'height:' + (isLucency == true ? 0 : CustomBar) + 'px'">
        <view
            :class="'cu-bar ' + (noFixed ? '' : 'fixed') + ' ' + (bgImage != '' ? 'none-bg text-white bg-img' : '') + ' ' + bgColor"
            :style="'height:' + CustomBar + 'px;padding-top:' + StatusBar + 'px;' + (bgImage ? 'background-image:url( + bgImage+)' : '')"
        >
            <view class="action" @tap="BackPage" v-if="isBack && mode != 'singlePage'">
                <text class="cuIcon-back"></text>
                <slot name="backText"></slot>
            </view>
            <view class="action" @tap="toHome" :data-url="homePage" v-if="isBack && mode == 'singlePage'">
                <text class="cuIcon-home padding-left-sm"></text>
                <slot name="homeText"></slot>
            </view>
            <view
                class="action border-custom"
                v-if="isCustom"
                :style="'width:' + Custom.width + 'px;height:' + Custom.height + 'px;margin-left:calc(750rpx - ' + Custom.right + 'px)'"
            >
                <text class="cuIcon-back" @tap="BackPage"></text>
                <text class="cuIcon-homefill" @tap="toHome" :data-url="homePage"></text>
            </view>
            <view class="content" :style="'top:' + StatusBar + 'px'">
                <slot name="content"></slot>
            </view>
            <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
// colorui/components/cu-custom.js
const app = getApp();
export default {
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            Custom: app.globalData.Custom,
            mode: 'default'
        };
    },
    /**
     * 组件的一些选项
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    props: {
        bgColor: {
            type: String,
            default: ''
        },
        isCustom: {
            type: Boolean,
            default: false
        },
        isBack: {
            type: Boolean,
            default: false
        },
        bgImage: {
            type: String,
            default: ''
        },
        isLucency: {
            type: Boolean,
            default: false
        },
        noFixed: {
            type: Boolean,
            default: false
        },
        homePage: {
            type: String,
            default: '/pages/index/index'
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handlePageShow() {
            this.getInfo();
        },

        BackPage() {
            uni.navigateBack({
                delta: 1
            });
        },

        toHome(e) {
            if (e.currentTarget.dataset.url != '') {
                uni.reLaunch({
                    url: e.currentTarget.dataset.url
                });
            } else {
                uni.reLaunch({
                    url: '/pages/index/index'
                });
            }
        },

        getInfo() {
            var that = this;
            if (getCurrentPages().length === 1) {
                that.setData({
                    mode: 'singlePage'
                });
            }
        }
    },
    created: function () {}
};
</script>
<style>
/* colorui/components/cu-custom.wxss */
.lucency {
    /* position: absolute;
  z-index: 1; */
    background-color: transparent !important;
}
</style>
