<template>
    <view style="height: 100%">
        <!-- pages/index/component/chat/chat.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">聊天</view>
        </cu-custom>

        <view style="padding-bottom: 84rpx">
            <view class="cu-chat">
                <view class="cu-item self">
                    <view class="main">
                        <view class="content bg-green shadow">
                            <text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
                        </view>
                    </view>
                    <view class="cu-avatar radius" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="date">2018年3月23日 13:23</view>
                </view>

                <view class="cu-info round">对方撤回一条消息!</view>

                <view class="cu-item">
                    <view class="cu-avatar radius" style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="main">
                        <view class="content shadow">
                            <text>喵喵喵！喵喵喵！</text>
                        </view>
                    </view>
                    <view class="date">13:23</view>
                </view>

                <view class="cu-info">
                    <text class="cuIcon-roundclosefill text-red"></text>
                    对方拒绝了你的消息
                </view>

                <view class="cu-info">
                    对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
                    <text class="text-blue">发送好友验证</text>
                </view>

                <view class="cu-item self">
                    <view class="main">
                        <image src="https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1" class="radius" mode="widthFix"></image>
                    </view>
                    <view class="cu-avatar radius" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="date">13:23</view>
                </view>

                <view class="cu-item self">
                    <view class="main">
                        <view class="action text-bold text-grey">3"</view>
                        <view class="content shadow">
                            <text class="cuIcon-sound text-xxl padding-right-xl"></text>
                        </view>
                    </view>
                    <view class="cu-avatar radius" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="date">13:23</view>
                </view>

                <view class="cu-item self">
                    <view class="main">
                        <view class="action">
                            <text class="cuIcon-locationfill text-orange text-xxl"></text>
                        </view>
                        <view class="content shadow">喵星球，喵喵市</view>
                    </view>
                    <view class="cu-avatar radius" style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="date">13:23</view>
                </view>

                <view class="cu-item">
                    <view class="cu-avatar radius" style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"></view>
                    <view class="main">
                        <view class="content shadow">@#$^&**</view>
                        <view class="action text-grey">
                            <text class="cuIcon-warnfill text-red text-xxl"></text>
                            <text class="text-sm margin-left-sm">翻译错误</text>
                        </view>
                    </view>
                    <view class="date">13:23</view>
                </view>
            </view>

            <view :class="'cu-bar foot input ' + (InputBottom != 0 ? 'cur' : '')" :style="'bottom:' + InputBottom + 'px'">
                <view class="action">
                    <text class="cuIcon-sound text-grey"></text>
                </view>

                <input class="solid-bottom" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10" />

                <view class="action">
                    <text class="cuIcon-emojifill text-grey"></text>
                </view>

                <button class="cu-btn bg-green shadow">发送</button>
            </view>
        </view>
    </view>
</template>

<script>
// pages/index/component/chat/chat.js
export default {
    data() {
        return {
            InputBottom: 0
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
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
/* pages/index/component/chat/chat.wxss */
</style>
