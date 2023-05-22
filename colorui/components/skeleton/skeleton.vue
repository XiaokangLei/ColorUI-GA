<template>
    <view style="height: 100%">
        <!-- colorui/components/skeleton/skeleton.wxml -->
        <view v-if="loading" class="box padding">
            <view v-if="avatar" class="bg avatar"></view>
            <view class="column">
                <view
                    :class="(active ? 'active' : '') + ' bg list'"
                    :style="'width: ' + columnWidth[index] + ';height:' + (index + 1 == column && endHeight ? endHeight : '')"
                    v-for="(item, index) in column"
                    :key="index"
                ></view>
            </view>
        </view>
        <slot v-else />
    </view>
</template>

<script>
// colorui/components/skeleton/skeleton.js
export default {
    data() {
        return {};
    },
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        active: {
            type: Boolean,
            default: true
        },
        column: {
            type: Number,
            default: 0
        },
        columnWidth: {
            type: Array,
            default: () => []
        },
        endHeight: {
            type: String,
            default: ''
        },
        avatar: Boolean
    },
    /**
     * 组件的方法列表
     */
    methods: {},
    created: function () {}
};
</script>
<style>
/* colorui/components/skeleton/skeleton.wxss */
.box {
    width: 100%;
    overflow: hidden;
}

.column > view {
    height: 36rpx;
    margin-bottom: 15rpx;
}

.column {
    display: flex;
    flex-direction: column;
}

.bg {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
}

.active {
    animation: loading 1.4s ease infinite;
}

@keyframes loading {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

/* 扩展头像功能 */
.avatar {
    border-radius: 50%;
    width: 100rpx;
    height: 100rpx;
    float: left;
    margin-right: 20rpx;
}
</style>
