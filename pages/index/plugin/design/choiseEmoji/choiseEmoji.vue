<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/design/choiseEmoji/choiseEmoji.wxml -->

        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">Emoji选择</view>
        </cu-custom>

        <view class="container_index">
            <view class="padding-sm text-center">
                <view class="text-sl">{{ emoji }}</view>
            </view>

            <view class="margin bg-white padding-sm radius shadow-lg" style="max-height: 1100rpx">
                <scroll-view class="pro_list" scroll-y style="height: 1000rpx">
                    <view class="cu-list grid col-5 no-border">
                        <view class="cu-item text-xxxl" @tap="emojiChange" :data-value="item.emoji" v-for="(item, index) in iconList" :key="index">
                            <view>{{ item.emoji }}</view>
                        </view>
                    </view>
                </scroll-view>
            </view>

            <view class="button_type bg-orange" @tap="jumpPage" data-page="addEvent" :data-emoji="emoji" hover-class="item-hover" hover-stay-time="100">
                <text class="margin-tb-sm text-xxl">确认选择{{ emoji }}</text>
            </view>
        </view>
    </view>
</template>

<script>
// pages/index/plugin/design/choiseEmoji/choiseEmoji.js
export default {
    data() {
        return {
            emojiNum: 1,
            iconList: [
                {
                    emoji: '❤️'
                },
                {
                    emoji: '✨'
                },
                {
                    emoji: '😗'
                },
                {
                    emoji: '😀'
                },
                {
                    emoji: '😄'
                },
                {
                    emoji: '😆'
                },
                {
                    emoji: '🤣'
                },
                {
                    emoji: '🙃'
                },
                {
                    emoji: '🥰'
                },
                {
                    emoji: '😍'
                },
                {
                    emoji: '🤩'
                },
                {
                    emoji: '😘'
                },
                {
                    emoji: '😙'
                },
                {
                    emoji: '😋'
                },
                {
                    emoji: '😛'
                },
                {
                    emoji: '😜'
                },
                {
                    emoji: '😝'
                },
                {
                    emoji: '🤫'
                },
                {
                    emoji: '😑'
                },
                {
                    emoji: '🙄'
                },
                {
                    emoji: '😔'
                },
                {
                    emoji: '😪'
                },
                {
                    emoji: '😕'
                },
                {
                    emoji: '☹️'
                },
                {
                    emoji: '😮'
                },
                {
                    emoji: '😰'
                },
                {
                    emoji: '😓'
                },
                {
                    emoji: '😩'
                },
                {
                    emoji: '😤'
                },
                {
                    emoji: '😡'
                },
                {
                    emoji: '😈'
                },
                {
                    emoji: '💀'
                },
                {
                    emoji: '🤡'
                },
                {
                    emoji: '👻'
                },
                {
                    emoji: '👋'
                },
                {
                    emoji: '🖐️'
                },
                {
                    emoji: '👌'
                },
                {
                    emoji: '👈'
                },
                {
                    emoji: '👉'
                },
                {
                    emoji: '🤙'
                },
                {
                    emoji: '🙏'
                },
                {
                    emoji: '🤳'
                },
                {
                    emoji: '💅'
                },
                {
                    emoji: '👃'
                },
                {
                    emoji: '👂'
                },
                {
                    emoji: '👀'
                },
                {
                    emoji: '👁️'
                },
                {
                    emoji: '👶'
                },
                {
                    emoji: '👧'
                },
                {
                    emoji: '👨‍🦳'
                },
                {
                    emoji: '🙍'
                },
                {
                    emoji: '🙅'
                },
                {
                    emoji: '💁'
                },
                {
                    emoji: '🙇'
                },
                {
                    emoji: '👩‍🍳'
                },
                {
                    emoji: '🧙'
                },
                {
                    emoji: '🚶'
                },
                {
                    emoji: '🧑‍🤝‍🧑'
                },
                {
                    emoji: '👫'
                },
                {
                    emoji: '💏'
                },
                {
                    emoji: '👪'
                },
                {
                    emoji: '👨‍👩‍👧‍👦'
                },
                {
                    emoji: '🌂'
                },
                {
                    emoji: '🎃'
                },
                {
                    emoji: '🌈'
                }
            ],
            gridCol: 5,
            emoji: '😍'
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
        emojiChange(e) {
            this.setData({
                emoji: e.currentTarget.dataset.value
            });
        },

        jumpPage(e) {
            uni.setStorage({
                key: 'emoji',
                data: e.currentTarget.dataset.emoji,
                success: function () {
                    uni.navigateBack(); //返回上一个页面
                }
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/design/choiseEmoji/choiseEmoji.wxss */

.button_type {
    height: 100rpx;
    line-height: 100rpx;
    margin-left: 25%;
    bottom: 100rpx;
    font-size: large;
    position: fixed;
    width: 50%;
    text-align: center;
    border-radius: 25rpx;
}
</style>
