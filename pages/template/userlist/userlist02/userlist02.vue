<template>
    <view style="height: 100%">
        <!-- pages/template/userlist/userlist02/userlist02.wxml -->
        <cu-custom bgColor="bg-white" :isBack="true">
            <view slot="content">通讯录</view>
        </cu-custom>

        <scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-' + listCurID" style="height: 100vh" :scroll-with-animation="true" :enable-back-to-top="true">
            <block v-for="(item, index) in list" :key="index">
                <view :class="'padding indexItem-' + list[index]" :id="'indexes-' + list[index]" :data-index="list[index]">{{ list[index] }}</view>

                <view class="cu-list menu-avatar no-padding bg-white">
                    <view class="cu-item" v-for="(item, sub) in 2" :key="sub">
                        <view
                            class="cu-avatar radius lg"
                            style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                        ></view>

                        <view class="content">
                            <view class="text-black">
                                <text class="text-Abc text-xl">{{ list[index] }}imine</text>
                            </view>
                            <view class="text-gray text-sm">+ 176 2114 7787</view>
                        </view>
                    </view>
                </view>
            </block>
        </scroll-view>

        <view class="indexBar" style="height: 100vh">
            <view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove.stop.prevent="tMove">
                <view class="indexBar-item" :id="index" @touchstart="getCur" @touchend="setCur" v-for="(item, index) in list" :key="index">{{ list[index] }}</view>
            </view>
        </view>

        <!-- 选择显示 -->
        <view v-if="!hidden" class="indexToast">
            {{ listCur }}
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-a4d24a2a79560267"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/template/userlist/userlist02/userlist02.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            hidden: true,
            list: '',
            listCur: '',
            boxTop: '',
            barTop: '',
            listCurID: '',
            movableY: '',
            sub: ''
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let list = [];
        for (let i = 0; i < 26; i++) {
            list[i] = String.fromCharCode(65 + i);
        }
        this.setData({
            list: list,
            listCur: list[0]
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        let that = this;
        uni.createSelectorQuery()
            .in(uni)
            .select('.indexBar-box')
            .boundingClientRect(function (res) {
                that.setData({
                    boxTop: res.top
                });
            })
            .exec();
        uni.createSelectorQuery()
            .in(uni)
            .select('.indexes')
            .boundingClientRect(function (res) {
                that.setData({
                    barTop: res.top
                });
            })
            .exec();
    },
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
        //获取文字信息
        getCur(e) {
            this.setData({
                hidden: false,
                listCur: this.list[e.target.id]
            });
        },

        setCur(e) {
            this.setData({
                hidden: true,
                listCur: this.listCur
            });
        },

        //滑动选择Item
        tMove(e) {
            let y = e.touches[0].clientY;
            let offsettop = this.boxTop;
            let that = this; //判断选择区域,只有在选择区才会生效
            if (y > offsettop) {
                let num = parseInt((y - offsettop) / 20);
                this.setData({
                    listCur: that.list[num]
                });
            }
        },

        //触发全部开始选择
        tStart() {
            this.setData({
                hidden: false
            });
        },

        //触发结束选择
        tEnd() {
            this.setData({
                hidden: true,
                listCurID: this.listCur
            });
        },

        indexSelect(e) {
            let that = this;
            let barHeight = this.barHeight;
            let list = this.list;
            let scrollY = Math.ceil((list.length * e.detail.y) / barHeight);
            for (let i = 0; i < list.length; i++) {
                if (scrollY < i + 1) {
                    that.setData({
                        listCur: list[i],
                        movableY: i * 20
                    });
                    return false;
                }
            }
        }
    }
};
</script>
<style>
/* pages/template/userlist/userlist02/userlist02.wxss */
.indexes {
    position: relative;
}

.indexBar {
    position: fixed;
    right: 0px;
    bottom: 0px;
    padding: 20rpx 20rpx 20rpx 60rpx;
    display: flex;
    align-items: center;
}

.indexBar .indexBar-box {
    width: 40rpx;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
    border-radius: 10rpx;
}

.indexBar-item {
    flex: 1;
    width: 40rpx;
    height: 40rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24rpx;
    color: #888;
    line-height: 36rpx;
}

movable-view.indexBar-item {
    width: 40rpx;
    height: 40rpx;
    z-index: 9;
    position: relative;
}

movable-view.indexBar-item::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 10rpx;
    height: 20rpx;
    width: 4rpx;
    background-color: #f37b1d;
}

.indexToast {
    position: fixed;
    top: 0;
    right: 80rpx;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100rpx;
    height: 100rpx;
    border-radius: 10rpx;
    margin: auto;
    color: #fff;
    line-height: 100rpx;
    text-align: center;
    font-size: 48rpx;
}
</style>
