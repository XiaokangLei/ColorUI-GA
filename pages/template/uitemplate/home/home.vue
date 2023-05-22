<template>
    <view style="height: 100%">
        <!-- pages/template/uitemplate/home/home.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">模板市场</view>
        </cu-custom>

        <view style="min-height: 80vh">
            <view class="toast-fixed-center" v-if="show" style="z-index: 99">
                <view :class="'radius-lg padding animation-slide-top text-lg ' + (status == 'success' ? 'bg-green light' : 'bg-red light')">
                    <text class="cuIcon-info"></text>
                    {{ message }}
                </view>
            </view>

            <view class="cu-card case margin-sm">
                <view class="cu-item shadow">
                    <view class="image" @tap="showModal" data-target="DialogModal2">
                        <image src="https://image.meiye.art/pic_V_46b2kM6sbHGcP_hIc_1?imageMogr2/thumbnail/450x/interlace/1" mode="widthFix" style="max-height: 360rpx"></image>
                        <view class="cu-tag bg-orange radius">热门</view>
                        <view class="cu-bar bg-shadeBottom">
                            <text class="text-cut text-xl">商城UI模板《北岛小店》 v1.0</text>
                        </view>
                    </view>
                    <view class="cu-list menu-avatar">
                        <view class="cu-bar btn-group bg-white padding-tb padding-lr-xl">
                            <button class="cu-btn bg-green shadow-blur round" data-link="https://one.x-artspace.cn/ColorUI-GA-Docs/h5/northlandshop/demo.html" @tap="click3">
                                H5预览地址
                                <text class="cuIcon-copy"></text>
                            </button>
                            <button class="cu-btn bg-blue shadow-blur round" @tap="showModal" data-target="DialogModal2">获取源码</button>
                        </view>
                    </view>
                </view>

                <view :class="'cu-modal ' + (modalName == 'DialogModal2' ? 'show' : '')">
                    <view class="cu-dialog">
                        <view class="cu-bar bg-white justify-end">
                            <view class="content">获取源码</view>
                            <view class="action" @tap="hideModal">
                                <text class="cuIcon-close text-red"></text>
                            </view>
                        </view>
                        <view class="padding-xl text-lg">观看15s视频，可获取源码下载链接。</view>
                        <view class="cu-bar bg-white">
                            <view class="action margin-0 flex-sub solid-left" @tap="hideModal">取消</view>
                            <view class="action margin-0 flex-sub text-green solid-left" @tap="bindVideo" data-link="">确定</view>
                        </view>
                    </view>
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
// pages/template/uitemplate/home/home.js

let loading = false;
const animation = uni.createAnimation({
    duration: 400,
    timingFunction: 'ease-out',
    delay: 0,
    transformOrigin: '50% 50% 0'
}); //动画
let rewardedVideoAd = null;
export default {
    components: {
        copyright
    },
    data() {
        return {
            show: false,
            status: '',
            message: '',
            time: 0,
            showTop: false,
            statusTop: '',
            messageTop: '',
            timeTop: 2000,
            modalName: ''
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.onLoadClone3389(options);
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
        /**
         * 生命周期函数--监听页面加载
         */
        onLoadClone3389(options) {
            // 延时初始化广告组件
            setTimeout(() => {
                this.initVideo();
            }, 300);
        },

        // 轮播图跳转
        jumpTo(e) {
            return uni.navigateTo({
                url: e.currentTarget.dataset.page
            });
        },

        /**
         * 复制内容到剪切板
         */
        CopyText(e) {
            uni.setClipboardData({
                data: e.currentTarget.dataset.link,
                success: (res) => {},
                complete: (res) => {
                    uni.hideToast();
                }
            });
        },

        /**
         * 获取视频
         */
        bindVideo(e) {
            this.setData({
                modalName: null
            });
            rewardedVideoAd.onLoad(() => {
                console.log('激励视频 广告加载成功');
            });
            rewardedVideoAd.show().then(() => console.log('激励视频 广告显示'));
            rewardedVideoAd.onClose((res) => {
                // 用户点击了【关闭广告】按钮
                if (res && res.isEnded) {
                    // 正常播放结束，可以下发游戏奖励
                    console.log('正常播放结束，可以下发游戏奖励');
                    // this.CopyText(e)
                    this.click3(e);
                } else {
                    // 播放中途退出，不下发游戏奖励
                    console.log('播放中途退出，不下发游戏奖励');
                }
            });
        },

        /**
         * 初始化广告组件
         */
        initVideo() {
            if (uni.createRewardedVideoAd) {
                rewardedVideoAd = uni.createRewardedVideoAd({
                    adUnitId: 'adunit-ecd9bb8eb3d6e4ac'
                });
                // rewardedVideoAd.onLoad(() => {
                //   console.log('onLoad event emit')
                // })
                rewardedVideoAd.onError((err) => {
                    console.log('onError event emit', err);
                });
                // rewardedVideoAd.onClose((res) => {
                //   console.log('onClose event emit', res)
                // })
            }
        },

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

        /**
         * 轻提示展示
         * @param {*} status
         * @param {*} message
         * @param {*} time
         * @param {*} fun
         */
        setShow(status, message, time = 2000, e, fun = false) {
            if (loading) {
                return;
            }
            loading = true;
            try {
                this.setData({
                    status,
                    message,
                    time,
                    show: true
                });
                setTimeout(() => {
                    this.setData({
                        show: false
                    });
                    loading = false;
                    this.CopyText(e);
                    // 触发回调函数
                    if (fun) {
                        this.end();
                    }
                }, time);
            } catch {
                console.log('CatchClause');
                console.log('CatchClause');
                loading = false;
            }
        },

        click3(e) {
            this.setShow('success', '链接已复制到剪切板，请粘贴到浏览器查看', 4000, e);
        },

        /**
         * 轻提示回调函数
         */
        end() {
            uni.showToast({
                title: '触发回调方法'
            });
        }
    }
};
</script>
<style>
/* pages/template/uitemplate/home/home.wxss */
</style>
