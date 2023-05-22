<template>
    <view style="height: 100%">
        <!-- pages/index/component/countdown/countdown.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">倒计时</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基础样式
            </view>
        </view>

        <view class="bg-white">
            <view class="flex justify-center align-center padding text-lg">
                <view class="cu-tag radius bg-orange light">{{ left_time_list[0] }}</view>
                天
                <view class="cu-tag radius bg-orange light">{{ left_time_list[1] }}</view>
                时
                <view class="cu-tag radius bg-orange light">{{ left_time_list[2] }}</view>
                分
                <view class="cu-tag radius bg-orange light">{{ left_time_list[3] }}</view>
                秒
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                自定义
            </view>
        </view>

        <view class="bg-white">
            <view class="flex justify-center align-center padding text-lg">
                <view class="cu-tag radius bg-pink light">{{ left_time_list[0] }}</view>
                天
                <view class="cu-tag radius bg-pink light">{{ left_time_list[1] }}</view>
                时
                <view class="cu-tag radius bg-pink light">{{ left_time_list[2] }}</view>
                分
                <view class="cu-tag radius bg-pink light">{{ left_time_list[3] }}</view>
                秒
            </view>
        </view>

        <view class="bg-white">
            <view class="flex justify-center align-center padding text-lg">
                <view class="cu-tag round bg-orange">{{ left_time_list[0] }}</view>
                天
                <view class="cu-tag round bg-orange">{{ left_time_list[1] }}</view>
                时
                <view class="cu-tag round bg-orange">{{ left_time_list[2] }}</view>
                分
                <view class="cu-tag round bg-orange">{{ left_time_list[3] }}</view>
                秒
            </view>
        </view>

        <view class="bg-white">
            <view class="flex justify-center align-center padding text-lg">
                <view class="solid padding-xs">{{ left_time_list[0] }}</view>
                天
                <view class="solid padding-xs">{{ left_time_list[1] }}</view>
                时
                <view class="solid padding-xs">{{ left_time_list[2] }}</view>
                分
                <view class="solid padding-xs">{{ left_time_list[3] }}</view>
                秒
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                拆分显示
            </view>
        </view>

        <view class="bg-white">
            <view class="flex justify-center align-center padding text-lg">
                <block v-for="(item, index) in left_time_list_date[0]" :key="index">
                    <view class="cu-tag radius bg-orange">{{ item }}</view>
                </block>
                天
                <block v-for="(item, index) in left_time_list_date[1]" :key="index">
                    <view class="cu-tag radius bg-orange">{{ item }}</view>
                </block>
                时
                <block v-for="(item, index) in left_time_list_date[2]" :key="index">
                    <view class="cu-tag radius bg-orange">{{ item }}</view>
                </block>
                分
                <block v-for="(item, index) in left_time_list_date[3]" :key="index">
                    <view class="cu-tag radius bg-orange">{{ item }}</view>
                </block>
                秒
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/countdown/countdown.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            left_time: '',
            //活动剩余时间的秒数
            timer: '',
            //倒计时定时器
            left_time_list: [],
            //剩余秒数转换 天，小时 分 秒
            left_time_list_date: []
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getLeftTime('2023/08/03 11:20:00');
    },
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
    onUnload() {
        if (this.timer) {
            console.log('销毁计时器');
            clearInterval(this.timer);
        }
    },
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
         * 定时器，计算剩下时间
         * @param {*} end_time
         */
        getLeftTime(end_time) {
            let left_time = this.getTimestap(end_time);
            this.initDate(left_time);
            this.timer = setInterval(() => {
                if (left_time-- === 0) {
                    this.setData({
                        left_time: 0,
                        left_time_list: this.formatSeconds(0)
                    });
                    clearInterval(this.timer);
                } else {
                    this.initDate(left_time);
                }
            }, 1000);
        },

        /**
         * 初始化数据
         */
        initDate(e) {
            let left_time_list = this.formatSeconds(e);
            let left_time_list_date = this.formatDate(JSON.stringify(left_time_list));
            this.setData({
                left_time: e,
                left_time_list,
                left_time_list_date
            });
        },

        /**
         * 获取指定时间-当前时间的秒数
         * @param {*} end_time
         */
        getTimestap(end_time) {
            // 当前时间
            var currentTime = parseInt(new Date().getTime() / 1000);
            // 未来时间
            var futureTime = parseInt(new Date(end_time.replace(/-/g, '/')).getTime() / 1000); //ios无法解析
            return futureTime <= currentTime ? 0 : futureTime - currentTime;
        },

        /**
         * 毫秒-天-时-分-秒
         * @param {*} value
         */
        formatSeconds(value) {
            let time = [];
            let day = parseInt(value / 86400);
            let hour = parseInt((value % 86400) / 3600);
            let min = parseInt(((value % 86400) % 3600) / 60);
            let sec = parseInt(((value % 86400) % 3600) % 60);
            time[0] = day > 0 ? this.addZero(day) : this.addZero(0);
            time[1] = hour > 0 ? this.addZero(hour) : this.addZero(0);
            time[2] = min > 0 ? this.addZero(min) : this.addZero(0);
            time[3] = sec > 0 ? this.addZero(sec) : this.addZero(0);
            return time;
        },

        /**
         * 拆分数组-天-时-分-秒
         * @param {*} e
         */
        formatDate(e) {
            let list = JSON.parse(e);
            for (let i = 0; i < list.length; i++) {
                list[i] = list[i].toString().split('');
            }
            return list;
        },

        /**
         * 补0
         * @param {*} num
         */
        addZero(num) {
            return num < 10 ? '0' + num : num;
        }
    }
};
</script>
<style>
/* pages/index/component/countdown/countdown.wxss */
</style>
