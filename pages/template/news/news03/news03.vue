<template>
    <view style="height: 100%">
        <!-- pages/template/news/news03/news03.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">新闻资讯03</view>
        </cu-custom>

        <view class="cu-timeline margin-xs radius-lg">
            <view class="padding-sm text-center">
                <text class="text-xxl text-bold text-black">高速上开车千万不要打开它，不但耗油，还很容易发生车祸!</text>
            </view>

            <view class="flex justify-between margin-top-xs">
                <view class="flex padding-left-sm">
                    <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="text-gray text-sm padding-left-sm">
                        <view class="text-lg text-black">真相实验室</view>
                        <view class="">4小时前</view>
                    </view>
                </view>

                <view class="padding-right flex align-center">
                    <button class="cu-btn round bg-blue">
                        <text class="cuIcon-add"></text>
                        关注
                    </button>
                </view>
            </view>
            <view class="padding-sm text-lg margin-top-sm">
                <text>2018年5月17日，搜狐汽车应奥迪邀请前往葡萄牙波尔图，参加第八代奥迪A6的全球首次试驾，在杜罗河谷地长达40km的蜿蜒山路上感受全新奥迪A6带来的驾驶新体验。</text>
                <view class="bg-white margin-tb-sm">
                    <view
                        class="bg-img radius"
                        style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1); height: 360rpx"
                    ></view>
                </view>
                <text>
                    杜罗河谷地是欧洲著名的葡萄酒产区，奥迪A6远离了平坦的城市道路，穿梭在此起彼伏的山路之中，一款中大型轿车如此选择试驾场地，或许在向人们诠释自身的运动天赋，或许是想尽快摆脱官车的沉闷气氛。
                    面对眼花缭乱的共享汽车平台，应该如何选的共享汽车应该如何选择?面对眼花缭乱的共享汽车平台，应该如何选的共享汽车应该如何选择?面对眼花缭乱的共享汽车平台，应该如何选的共享汽车应该如何选择?面对眼花缭乱的共享汽车平台，应该如何选的共享汽车应该如何选择?
                    去年年底开始，比亚迪广泛的进入欧洲市场，虽然时间不长，销量方面还没有大规模的第三方统计，但根据比亚迪官方的快报，比亚迪在海外已经连续几个月销量破万，这其中采用e平台3.0技术和刀片电池的元Plus也就是Atto
                    3车型无疑是最大的主力。
                    对于欧洲市场，电动车领域此前大部分被特斯拉及大众，Stellantis品牌垄断，以三元锂电池和圆柱电池为主，元Plus及所采用的磷酸铁锂片状电池组显然是一个全新形态，尤其是对于刀片电池这样的“新物种”，欧洲媒体和消费者也给与了广泛的关注，在现代汽车的发源地之一德国，当地主流电视台DW，知名汽车媒体Auto
                    Motor und Sport等对Atto 3进行了评测，探讨了刀片电池的安全性和出色性能，以及元Plus自身的设计和体验。
                </text>
            </view>
            <view class="padding-left-sm flex align-center">
                <button class="cu-btn round">评测</button>
                <button class="cu-btn round margin-left-sm">原创视频</button>
                <button class="cu-btn round margin-left-sm">新车上市</button>
            </view>

            <view class="flex justify-between margin-tb bg-gray margin-lr-sm padding-tb-sm radius">
                <view class="flex padding-left-sm">
                    <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="text-gray text-sm padding-left-sm">
                        <view class="text-lg text-black">真相实验室</view>
                        <view class="">讲得清事实，HOLD得住真相!</view>
                    </view>
                </view>

                <view class="padding-right flex align-center">
                    <button class="cu-btn round line-blue">
                        <text class="cuIcon-add"></text>
                        关注
                    </button>
                </view>
            </view>

            <view class="bg-white">
                <view class="cu-bar">
                    <view class="text-black text-xxl padding-lr-sm">全部评论</view>
                </view>
                <view class="cu-list menu-avatar">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">谦和钢笔</view>
                            <view class="text-gray text-sm">05-08</view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-appreciate"><text class="text-gray text-lg">37</text></view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                    </view>
                    <view class="margin-left-sm padding-left text-black">
                        <view class="margin-lr-sm padding-left">
                            <text>
                                从卡罗拉和雷凌的配置就可以看出丰田在中国为了缩减生产成本手段真是无所不用其极。混动卡罗拉全系只有一个型号带雷达，再高配有了视频倒车影像就把雷达取消了。车内的按钮连疏油层都不涂，轻轻蹭一下就是个印子...
                            </text>
                        </view>
                        <view class="margin-left-lg margin-right padding-lr bg-gray radius-lg">
                            <view class="margin-tb-xs padding-top-sm bg-gray">
                                <text class="text-blue">一抹♡柔情：</text>
                                <text class="text-black">看看领克吧，全能满足你，内饰相当精致</text>
                            </view>
                            <view class="margin-tb-xs padding-top-xs bg-gray">
                                <text class="text-blue">Distortion 624：</text>
                                <text class="text-black">这些可以加的东西不配就不配，国产车是配一大堆可以后期加的配置，安全气囊却能少就少</text>
                            </view>
                            <view class="margin-tb-xs padding-top-xs padding-bottom-sm bg-gray">
                                <text class="text-blue">共3条回复></text>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar no-padding">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">飞奔移动电源</view>
                            <view class="text-gray text-sm">05-08</view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-appreciate"><text class="text-gray text-lg">18</text></view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                    </view>
                    <view class="margin-left-sm padding-left text-black">
                        <view class="margin-lr-sm padding-left">
                            <text>内饰设计不太养眼，但是实际我坐过一次，感觉还可以，没有想象的那么差，可能广汽做工不错的原因。</text>
                        </view>
                        <view class="margin-left-lg margin-right padding-lr bg-gray radius-lg">
                            <view class="margin-tb-xs padding-tb-sm bg-gray">
                                <text class="text-blue">yiche朱涛</text>
                                <view class="cu-tag bg-blue light round sm">作者</view>
                                <text class="text-blue">：</text>
                                <text class="text-black">设计非常传统，但丰田理念就这样，耐用为主，不会很激进。</text>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar no-padding padding-bottom">
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg"
                            style="background-image: url(https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-bold">性感的大象</view>
                            <view class="text-gray text-sm">05-08</view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-appreciate"><text class="text-gray text-lg">12</text></view>
                        </view>
                        <view class="action text-xxl text-black">
                            <view class="cuIcon-comment"></view>
                        </view>
                    </view>
                    <view class="margin-left-sm padding-left text-black">
                        <view class="margin-lr-sm padding-left">
                            <text>国产之光。外观设计无可挑剔,全系列车型国产车里面显得高端大气上档次。MG6和550开始及以上的车型底盘和用料值得称赞。</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 底部评论 -->
        <view :class="'cu-bar foot input ' + (InputBottom != 0 ? 'cur' : '')" :style="'bottom:' + InputBottom + 'px'">
            <view class="action">
                <text class="cuIcon-write text-gray"></text>
            </view>

            <input class="solid-bottom" placeholder="写评论" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" />

            <view class="action">
                <text class="cuIcon-comment text-black"></text>
                <text class="cuIcon-appreciate text-black"></text>
                <text class="cuIcon-favor text-black"></text>
                <text class="cuIcon-forward text-black"></text>
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
// pages/template/news/news03/news03.js
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
        InputFocus() {
            console.log('占位：函数 InputFocus 未声明');
        },

        InputBlur() {
            console.log('占位：函数 InputBlur 未声明');
        }
    }
};
</script>
<style>
/* pages/template/news/news03/news03.wxss */
</style>
