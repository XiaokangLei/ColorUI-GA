<template>
    <view style="height: 100%">
        <!-- pages/template/comment/comment03/comment03.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">评论页03模板</view>
        </cu-custom>

        <view class="">
            <view class="bg-white margin-xs radius-lg" style="min-height: 90vh">
                <view class="flex padding-sm justify-between solid-bottom">
                    <view class="flex padding-top-xs">
                        <view
                            class="cu-avatar round"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                    </view>
                    <view class="text-xxl">
                        <view class="flex justify-center cuIcon-peoplelist text-black"></view>
                        <view class="text-sm">我的关注</view>
                    </view>
                </view>

                <view class="cu-list menu-avatar padding-bottom-sm solid-bottom">
                    <!-- 个人信息：头像、昵称、日期和会员等级 -->
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-brown">吴天毅_7845 < view class="cu-tag margin-right round bg-yellow sm">Lv3</view>
                        </view>
                        <view class="text-gray text-sm">6月20号</view>
                    </view>
                </view>
                <!-- 评论内容 -->
                <view class="text-black">
                    <view class="margin-lr padding-left">
                        <text class="text-lg">非常满意</text>
                    </view>
                    <!-- 打分 -->
                    <view class="margin-lr padding-left padding-top">
                        <view class="rate padding-bottom-xs text-lg flex align-center">
                            <text class="padding-right-xs">打分</text>
                            <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                                <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
                            </view>
                        </view>
                    </view>
                    <!-- 商品信息 -->
                    <view class="margin-left-xl margin-right bg-gray radius">
                        <view class="flex justify-between">
                            <view class="flex">
                                <view class="padding-xs">
                                    <view
                                        class="cu-avatar lg radius"
                                        style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                                    ></view>
                                </view>
                                <view class="padding-xs padding-top-sm text-df text-black">
                                    <view class="text-bold">谭鸭血老火锅(簋街店)</view>
                                    <view class="text-gray text-sm padding-top-xs">东城区 东直门 四川火锅</view>
                                </view>
                            </view>
                            <view class="flex justify-center">
                                <view class="flex align-center text-xxl text-gray padding-lr-sm">
                                    <view class="cuIcon-favor"></view>
                                    <text class="text-lg">1531</text>
                                </view>
                            </view>
                        </view>
                    </view>
                    <!-- 浏览 -->
                    <view class="margin-lr padding-left padding-top-xs">
                        <text class="text-df text-gray">浏览 43</text>
                    </view>
                    <!-- 提示、评论、分享 -->
                    <view class="flex justify-between text-gray padding-top-xs">
                        <view class="margin-lr padding-left padding-top-xs text-lg">
                            <text class="cuIcon-appreciate"></text>
                            <text class="text-df text-gray">成为第一个点赞的人</text>
                        </view>
                        <view class="margin-lr padding-left padding-top-xs text-lg">
                            <text class="cuIcon-comment"></text>
                            <text class="text-df padding-left-xs padding-right-sm">1</text>
                            <text class="cuIcon-forward"></text>
                        </view>
                    </view>
                    <!-- 评论回复 -->
                    <view class="margin-lr padding-left padding-top-sm">
                        <text class="text-df text-blue">谭鸭血老火锅(商家)：</text>
                        <text class="text-black">亲爱滴阁下您好，感谢您光临谭鸭血篇街店用餐，本店每日隆重推出38通抵100元限时抢购。</text>
                    </view>
                </view>
            </view>

            <view class="cu-list menu-avatar padding-bottom solid-bottom">
                <!-- 个人信息：头像、昵称、日期和会员等级 -->
                <view class="cu-item">
                    <view
                        class="cu-avatar round lg"
                        style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                    ></view>
                    <view class="content">
                        <view class="text-lg text-brown">吴天毅_7845 < view class="cu-tag margin-right round bg-yellow sm">Lv3</view>
                    </view>
                    <view class="text-gray text-sm">6月20号</view>
                </view>
            </view>
            <!-- 评论内容 -->
            <view class="text-black">
                <view class="margin-lr padding-left">
                    <text class="text-lg">老板的热情特别赞 味道也好</text>
                </view>
                <!-- 打分 -->
                <view class="margin-lr padding-left padding-top">
                    <view class="rate padding-bottom-xs text-lg flex align-center">
                        <text class="padding-right-xs">打分</text>
                        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
                            <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
                        </view>
                    </view>
                </view>
                <!-- 商品信息 -->
                <view class="margin-left-xl margin-right bg-gray radius">
                    <view class="flex justify-between">
                        <view class="flex">
                            <view class="padding-xs">
                                <view
                                    class="cu-avatar lg radius"
                                    style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                                ></view>
                            </view>
                            <view class="padding-xs padding-top-sm text-df text-black">
                                <view class="text-bold">苍蝇胡同(秦安街总店)</view>
                                <view class="text-gray text-sm padding-top-xs">东城区 东直门 四川火锅</view>
                            </view>
                        </view>
                        <view class="flex justify-center">
                            <view class="flex align-center text-xxl text-gray padding-lr-sm">
                                <view class="cuIcon-favor"></view>
                                <text class="text-lg">1297</text>
                            </view>
                        </view>
                    </view>
                </view>
                <!-- 浏览 -->
                <view class="margin-lr padding-left padding-top-xs">
                    <text class="text-df text-gray">浏览 40</text>
                </view>
                <!-- 提示、评论、分享 -->
                <view class="flex justify-between text-gray padding-top-xs">
                    <view class="margin-lr padding-left padding-top-xs text-lg">
                        <text class="cuIcon-appreciate"></text>
                        <text class="text-df text-gray">成为第一个点赞的人</text>
                    </view>
                    <view class="margin-lr padding-left padding-top-xs text-lg">
                        <text class="cuIcon-comment"></text>
                        <text class="text-df padding-left-xs padding-right-sm">1</text>
                        <text class="cuIcon-forward"></text>
                    </view>
                </view>
                <!-- 评论回复 -->
                <view class="margin-lr padding-left padding-top-sm">
                    <text class="text-df text-blue">苍蝇胡同(商家)：</text>
                    <text class="text-black">再次感谢您慷慨的五星!再次感谢!</text>
                </view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-a4d24a2a79560267"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/template/comment/comment03/comment03.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            count: 5,
            active: 0,
            score: 1,
            extraClass: ''
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
         * 点击评分
         */
        click(e) {
            const { score, count } = this;
            const active = e.currentTarget.dataset.index;
            this.setData({
                active
            });
            this.$emit(
                'click',
                {
                    detail: {
                        result: (score / count) * active
                    }
                },
                {}
            );
        }
    }
};
</script>
<style>
/* pages/template/comment/comment03/comment03.wxss */
</style>
