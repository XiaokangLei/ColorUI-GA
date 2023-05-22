<template>
    <view style="height: 100%">
        <!-- pages/template/comment/comment02/comment02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">评论页02模板</view>
        </cu-custom>

        <!-- 页面 -->
        <view class="">
            <!-- 顶部个人信息 -->
            <view class="bg-white margin-xs radius-lg">
                <view class="flex padding-xs justify-between">
                    <view class="flex">
                        <view class="padding-right-sm text-xl padding-top-xs">
                            <text class="cuIcon-back text-black"></text>
                        </view>
                    </view>
                    <view class="flex">
                        <view class="padding-tb-xs text-lg text-black">
                            <view>怪物猎人：崛起</view>
                        </view>
                    </view>
                    <view class="flex text-xxl">
                        <view class="cuIcon-forward text-black padding-top-xs"></view>
                    </view>
                </view>

                <view class="flex margin-lr-sm padding-tb justify-between">
                    <text class="text-xl text-black">
                        回复
                        <text class="text-gray text-lg">12</text>
                    </text>
                    <text class="text-lg text-gray">
                        默认排序
                        <text class="cuIcon-sort"></text>
                    </text>
                </view>

                <view class="cu-list menu-avatar">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">蓝冰雪</view>
                            <view class="text-gray text-sm">8小时前</view>
                        </view>
                        <view class="action text-xxl">
                            <view class="cuIcon-more"></view>
                        </view>
                    </view>
                    <view class="margin-left padding-left-xl text-black">
                        <view class="margin-lr padding-left">
                            <text>不错，你还得研发一个可以让怪站着给你打的连招</text>
                        </view>
                        <view class="margin-left-xl margin-right padding-lr bg-gray radius">
                            <view class="margin-tb-xs padding-tb-sm bg-gray">
                                <text class="text-blue">Amini：</text>
                                <text class="text-black">这不是?</text>
                            </view>
                        </view>
                    </view>
                    <view class="flex solid-bottom padding-lr padding-tb-sm justify-end">
                        <view class="action text-xl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                        <text class="text-gray">回复</text>
                        <view class="action text-xl text-black margin-left">
                            <view class="cuIcon-appreciate"></view>
                        </view>
                        <text class="text-gray">赞</text>
                        <view class="action text-xl text-black margin-left">
                            <view class="cuIcon-footprint"></view>
                        </view>
                        <text class="text-gray">踩</text>
                    </view>
                </view>

                <view class="cu-list menu-avatar no-padding">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">wendy</view>
                            <view class="text-gray text-sm">7-31</view>
                        </view>
                        <view class="action text-xxl">
                            <view class="cuIcon-more"></view>
                        </view>
                    </view>
                    <view class="margin-left padding-left-xl text-black">
                        <view class="margin-lr padding-left">
                            <text>
                                我崛起原版太刀开荒打到毕业就是用的你说的大连招樱花。一般就是起手拔刀二连斩-纳刀-大居合(小居合)
                                -樱花-纳刀-大居合-樱花-纳刀-小居合-体操-纳刀-大居合-体操...
                            </text>
                        </view>
                        <view class="margin-left-xl margin-right padding-lr bg-gray radius">
                            <view class="margin-tb-xs padding-tb-sm bg-gray">
                                <text class="text-blue">L.</text>
                                <view class="cu-tag bg-blue light round sm">作者</view>
                                <text class="text-blue">：</text>
                                <text class="text-black">冷却太长</text>
                            </view>
                        </view>
                        <view class="flex solid-bottom padding-lr padding-tb-sm justify-end">
                            <view class="action text-xl text-black">
                                <view class="cuIcon-comment"></view>
                            </view>
                            <text class="text-gray">回复</text>
                            <view class="action text-xl text-black margin-left">
                                <view class="cuIcon-appreciate"></view>
                            </view>
                            <text class="text-gray">赞</text>
                            <view class="action text-xl text-black margin-left">
                                <view class="cuIcon-footprint"></view>
                            </view>
                            <text class="text-gray">踩</text>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar no-padding">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">Kenny Lee</view>
                            <view class="text-gray text-sm">7-29</view>
                        </view>
                        <view class="action text-xxl">
                            <view class="cuIcon-more"></view>
                        </view>
                    </view>
                    <view class="margin-left padding-left-xl text-black">
                        <view class="margin-lr padding-left">
                            <text>
                                怪物猎人崛起里面的兔团子，每个团子都有一个发动几率，有高有低。举个例子，有一个加快吃肉速度的团子，概率是好像是70%，意思是出进任务有70%的概率触发吗？
                            </text>
                        </view>
                    </view>
                    <view class="flex solid-bottom padding-lr padding-tb-sm justify-end">
                        <view class="action text-xl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                        <text class="text-gray">回复</text>
                        <view class="action text-xl text-black margin-left">
                            <view class="cuIcon-appreciate"></view>
                        </view>
                        <text class="text-gray">赞</text>
                        <view class="action text-xl text-black margin-left">
                            <view class="cuIcon-footprint"></view>
                        </view>
                        <text class="text-gray">踩</text>
                    </view>
                </view>
            </view>
        </view>

        <view :class="'cu-bar foot input ' + (InputBottom != 0 ? 'cur' : '')" :style="'bottom:' + InputBottom + 'px'">
            <view class="action">
                <text class="cuIcon-write text-gray"></text>
            </view>

            <input class="solid-bottom" placeholder="回复TA" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" />

            <view class="action">
                <text class="cuIcon-emoji text-black"></text>
                <text class="text-lg padding-right-sm">Fun</text>
                <text class="cuIcon-appreciate text-black"></text>
                <text class="text-lg padding-right-sm">赞</text>
                <text class="cuIcon-footprint text-black"></text>
                <text class="text-lg padding-right-sm">踩</text>
                <text class="cuIcon-favor text-black"></text>
                <text class="text-lg">3</text>
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
// pages/template/comment/comment02/comment02.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            InputBottom: 0
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
        InputFocus(e) {
            this.setData({
                InputBottom: e.detail.height
            });
        },

        InputBlur(e) {
            this.setData({
                InputBottom: 0
            });
        }
    }
};
</script>
<style>
/* pages/template/comment/comment02/comment02.wxss */
</style>
