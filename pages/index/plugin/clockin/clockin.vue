<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/clockin/clockin.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">打卡</view>
        </cu-custom>

        <view class="bg-white margin-sm radius-lg" style="min-height: 86vh">
            <!-- 顶部个人信息-头像、布局 -->
            <view class="flex padding-sm justify-between solid-bottom">
                <view class="flex">
                    <view class="padding-lr-xs">
                        <view
                            class="cu-avatar lg round"
                            style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>
                    </view>
                    <view class="padding-xs text-xl text-black">
                        <view>小可</view>
                        <view class="text-sm text-gray padding-top-xs">北京朝阳三里屯店</view>
                    </view>
                </view>
                <view class="text-gray text-sm padding-right padding-top-sm">工号：1000200000</view>
            </view>
            <!-- 打卡信息-时间轴 -->
            <view class="margin-sm margin-top">
                <view class="text-gray padding-bottom">打卡信息：</view>
                <view class="cu-timeline">
                    <view class="cu-item cur cuIcon-noticefill">
                        <view class="content bg-blue light shadow-blur" v-if="status != 0">
                            <text class="cuIcon-time">{{ now_time_stop }}</text>
                            <view class="cuIcon-location padding-top-xs">北京朝阳三里屯店</view>
                        </view>
                        <view class="content bg-gray shadow-blur" v-else>
                            <text class="text-orange">上班未打卡</text>
                        </view>
                    </view>
                    <view class="cu-item cur cuIcon-noticefill">
                        <view class="content bg-blue light shadow-blur" v-if="status == 3">
                            <text class="cuIcon-time">{{ now_time_stop_end }}</text>
                            <view class="cuIcon-location padding-top-xs">北京朝阳三里屯店</view>
                        </view>
                        <view class="content bg-gray shadow-blur" v-else>
                            <text class="text-orange">下班未打卡</text>
                        </view>
                    </view>
                </view>
            </view>
            <!-- 打卡按钮 -->
            <view class="margin-top-xl">
                <view class="flex justify-center">
                    <view class="cu-clockin-time flex justify-center align-center" :animation="animationData" @tap.stop.prevent="clockInStart" v-if="status == 0">
                        <view class="text-white" style="z-index: 99">
                            <text>上班打卡 {{ now_time }}</text>
                        </view>
                    </view>
                    <view class="cu-clockin-time_over flex justify-center align-center" @tap.stop.prevent="clockInStart" v-if="status == 1">
                        <text class="text-white" style="z-index: 99">已打卡 {{ now_time_stop }}</text>
                    </view>
                    <view class="cu-clockin-time flex justify-center align-center" @tap.stop.prevent="clockInEnd" v-if="status == 2">
                        <text class="text-white" style="z-index: 99">下班打卡 {{ now_time }}</text>
                    </view>
                    <view class="cu-clockin-time_over flex justify-center align-center" @tap.stop.prevent="clockInStart" v-if="status == 3">
                        <text class="text-white" style="z-index: 99">已打卡 {{ now_time_stop_end }}</text>
                    </view>
                </view>
                <view class="margin-tb padding-tb flex justify-center align-center">
                    当前位置：
                    <text class="cuIcon-location">{{ current_address }}</text>
                    <text class="padding-left text-orange">刷新</text>
                </view>
            </view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/clockin/clockin.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            now_time: '',
            current_address: '北京朝阳三里屯店',
            status: 0,
            //0---》上班未打卡 1----》上班已打卡 2-----下班未打卡》
            now_time_stop: '',
            //已打卡时间
            now_time_stop_end: '',
            //下班已打卡时间
            animationData: '' //打卡动画栈
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getCurrentTime();
        this.getUserLocation();
        this.setData({
            now_time: this.getTime()
        });
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
        // 上班打卡
        clockInStart() {
            uni.vibrateLong(); //使手机震动400m
            let animationData = uni.createAnimation({
                timingFunction: 'ease-in',
                duration: 1000
            });
            animationData.rotateY(180).step();
            // 导出动画栈
            this.setData(
                {
                    animationData: animationData.export()
                },
                setTimeout(() => {
                    this.setData(
                        {
                            status: 1,
                            //上班已打卡
                            now_time_stop: this.now_time
                        },
                        setTimeout(() => {
                            this.setData({
                                status: 2
                            });
                        }, 3000)
                    );
                }, 1000)
            );
        },

        // 下班打卡
        clockInEnd() {
            this.setData({
                status: 3,
                //上班已打卡
                now_time_stop_end: this.now_time
            });
        },

        getCurrentTime: function () {
            var time = setInterval(() => {
                this.setData({
                    now_time: this.getTime()
                });
            }, 1000);
        },

        getTime() {
            let dateTime = '';
            let hh = new Date().getHours();
            if (new Date().getMinutes() < 10) {
                let mf = '0' + new Date().getMinutes();
            } else {
                let mf = new Date().getMinutes();
            }
            if (new Date().getSeconds() < 10) {
                let ss = '0' + new Date().getSeconds();
            } else {
                let ss = new Date().getSeconds();
            }
            dateTime = hh + ':' + mf + ':' + ss;
            return dateTime;
        },

        // 获取当前的地址
        getUserLocation: function () {
            let that = this;
            uni.getSetting({
                success: (res) => {
                    if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
                        uni.showModal({
                            title: '请求授权当前位置',
                            content: '需要获取您的地理位置，请确认授权',
                            success: function (res) {
                                if (res.cancel) {
                                    uni.showToast({
                                        title: '拒绝授权',
                                        icon: 'none',
                                        duration: 1000
                                    });
                                } else if (res.confirm) {
                                    uni.openSetting({
                                        success: function (dataAu) {
                                            if (dataAu.authSetting['scope.userLocation'] == true) {
                                                //再次授权，调用wx.getLocation的API
                                                that.getLocation();
                                            } else {
                                                uni.showToast({
                                                    title: '授权失败',
                                                    icon: 'none',
                                                    duration: 1000
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    } else if (res.authSetting['scope.userLocation'] == undefined) {
                        that.getLocation();
                    } else {
                        that.getLocation();
                    }
                }
            });
        },

        getLocation: function () {
            uni.getLocation({
                type: 'wgs84',
                success: (res) => {
                    console.log(res);
                    const latitude = res.latitude;
                    const longitude = res.longitude;
                    //  调用腾讯地图sdk获取到当前的地址
                }
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/clockin/clockin.wxss */
</style>
