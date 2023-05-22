<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/indexes/indexes.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">索引列表</view>
        </cu-custom>

        <view class="cu-bar bg-white search fixed" :style="'top:' + CustomBar + 'px;'">
            <view class="search-form round">
                <text class="cuIcon-search"></text>
                <input type="text" placeholder="输入搜索的关键词" confirm-type="search" />
            </view>
            <view class="action">
                <button class="cu-btn bg-gradual-blue shadow-blur round">搜索</button>
            </view>
        </view>

        <view class="margin-top-xxl padding-top">
            <scroll-view
                scroll-y
                class="indexes"
                :scroll-into-view="'indexes-' + listCurID"
                :style="'height:calc(100vh - ' + CustomBar + 'px - 50px)'"
                :scroll-with-animation="true"
                :enable-back-to-top="true"
            >
                <block v-for="(item, index) in list" :key="index">
                    <view :class="'padding indexItem-' + list[index]" :id="'indexes-' + list[index]" :data-index="list[index]">{{ list[index] }}</view>

                    <view class="cu-list menu-avatar no-padding">
                        <view class="cu-item bg-white" v-for="(item, sub) in 2" :key="sub">
                            <view class="cu-avatar round lg bg-blue light">{{ list[index] }}</view>

                            <view class="content">
                                <view class="text-black">
                                    {{ list[index] }}
                                    <text class="text-abc">{{ list[sub] }}</text>
                                    iniac
                                </view>
                                <view class="text-gray text-sm">12月15日 响铃{{ sub + 6 }}声</view>
                            </view>
                        </view>
                    </view>
                </block>
            </scroll-view>
        </view>

        <view class="indexBar flex align-center" :style="'height:calc(100vh - ' + CustomBar + 'px - 50px)'">
            <view class="indexBar-box bg-white flex flex-column radius shadow" @touchstart="tStart" @touchend="tEnd" @touchmove.stop.prevent="tMove">
                <view class="indexBar-item flex justify-center" :id="index" @touchstart="getCur" @touchend="setCur" v-for="(item, index) in list" :key="index">
                    {{ list[index] }}
                </view>
            </view>
        </view>

        <!-- 选择显示 -->
        <view v-if="!hidden" class="indexToast">
            {{ listCur }}
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-7e063c3c010456be"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/indexes/indexes.js
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
/* pages/index/plugin/indexes/indexes.wxss */
</style>
