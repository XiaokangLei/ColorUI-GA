<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/draw/draw.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">抽奖</view>
        </cu-custom>

        <view class="cu-draw-con flex flex-column align-center">
            <view class="cu-draw-draw_sc flex flex-row align-center">
                <swiper class="cu-draw-swiper" :vertical="true" :autoplay="true" :circular="true" interval="3000" display-multiple-items="1">
                    <block v-for="(item, idx) in 2" :key="idx">
                        <swiper-item>
                            <view class="padding-left">
                                <text>恭喜用户</text>
                                <text class="text-blue">135XXXX5678</text>
                                <text>抽中10元话费</text>
                            </view>
                        </swiper-item>
                    </block>
                </swiper>
            </view>
            <view class="cu-draw-box">
                <view class="cu-draw-b_box">
                    <view class="flex flex-row align-center j_b cu-draw-prize_box">
                        <block v-for="(item, index) in prize_list" :key="index">
                            <!-- 抽奖 按钮 -->

                            <block v-if="index == 4">
                                <view class="cu-draw-prize_start cu-draw-prize_item margin-lr-xs solids radius-lg">
                                    <view class="flex justify-center padding-sm padding-lr align-center" @tap="lottery">
                                        <view class="flex align-center text-xxl text-white">开 始 抽 奖</view>
                                    </view>
                                </view>
                            </block>

                            <!-- 奖项 -->

                            <view :class="'cu-draw-prize_item flex flex-column align-center margin-lr-xs solids radius-lg ' + (item.active ? 'cu-draw-active' : '')">
                                <view class="cu-draw-prize_img">
                                    <image class="radius-lg" :src="item.icon" mode="aspectFill" />
                                </view>
                                <text class="text-white">{{ item.name }}</text>
                            </view>
                        </block>
                    </view>
                </view>
            </view>
            <view class="text-white">
                您还有
                <text class="text-blue">{{ remian_num }}次</text>
                抽奖机会
            </view>
        </view>

        <view class="margin padding-top">
            <view class="margin-top bg-white padding radius-lg">
                <view class="text-black text-sm">操作说明：</view>
                <view class="text-gray text-sm padding-top-xs">点击开始抽奖按钮，等待滚动停止，将会弹出抽奖结果。</view>
            </view>
        </view>

        <view class="margin-top" style="margin-top: 16vh">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/draw/draw.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            remian_num: 5,

            //剩余抽奖的次数
            prize_list: [
                {
                    icon: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
                    name: '钻石会员',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    name: '谢谢惠顾',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    name: '10元话费',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1',
                    name: '20元话费',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1',
                    name: '50元话费',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    name: '黄金会员',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    name: '铂金会员',
                    active: false
                },
                {
                    icon: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
                    name: '白银会员',
                    active: false
                }
            ],

            lock: false,

            //防止重复点击
            //抽奖顺序的索引
            prizeListIndex: [0, 1, 2, 4, 7, 6, 5, 3],

            // 抽奖动画
            Timer: null,

            LotteryEnd: false,

            //抽奖结束
            nowRunIndex: 0,

            active: false
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
        // 禁止弹框底层滑动
        catchTouchMove: function () {
            return false;
        },

        // 范围随机数
        randomRange(lower, upper) {
            return Math.floor(Math.random() * (upper - lower)) + lower;
        },

        // 抽奖活动
        lottery() {
            // 防止重复点击
            if (this.lock) {
                return;
            }
            this.setData({
                lock: true
            });
            this.luckChose(this.randomRange(0, 7)).then((e) => {
                uni.showToast({
                    title: '成抽中了' + e[0].name,
                    icon: 'none'
                });
            });
        },

        //ative样式的索引，
        luckChose(luckIndex) {
            return new Promise((resolve, reject) => {
                // console.log("中奖索引>>>", luckIndex)
                let that = this;
                let maxTime = this.randomRange(2500, 4000); //抽奖的时间2.5s-4s之间
                // console.log(maxTime)
                let rI = 0.01;
                // console.log(this.nowRunIndex)
                if (this.nowRunIndex == 0) {
                    //初始化从索引0开始显示抽奖激活的边框
                    this.setData({
                        'prize_list[0].active': true
                    });
                }
                function runAni(_t) {
                    that.Timer = setTimeout(() => {
                        let list = that.prize_list;
                        ++that.nowRunIndex;
                        // console.log(that.nowRunIndex >= that.data.prizeListIndex.length)
                        // console.log(that.nowRunIndex)
                        if (that.nowRunIndex >= that.prizeListIndex.length) {
                            that.nowRunIndex = 0;
                        } else {
                            ('');
                        }
                        let Pindex = that.prizeListIndex[that.nowRunIndex];
                        list.map((item, index) => {
                            item.active = Pindex == index;
                        });
                        that.setData({
                            prize_list: list
                        });
                        // console.log(that.LotteryEnd)
                        // console.log(luckIndex == that.nowRunIndex)
                        if (that.LotteryEnd && luckIndex == that.nowRunIndex) {
                            clearTimeout(that.Timer);
                            that.LotteryEnd = false;
                            that.setData({
                                lock: false
                            });
                            resolve(
                                list.filter((v) => {
                                    return v.active;
                                })
                            );
                        } else {
                            rI += 0.5;
                            runAni(_t + rI);
                        }
                    }, _t);
                }
                runAni(80);
                setTimeout(() => {
                    this.LotteryEnd = true;
                }, maxTime);
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/draw/draw.wxss */
</style>
