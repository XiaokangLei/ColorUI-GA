<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/search/search.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">历史搜索</view>
        </cu-custom>

        <view class="bg-white margin-sm radius-lg" style="min-height: 80vh">
            <view class="cu-bar search">
                <view class="search-form round">
                    <text class="cuIcon-search"></text>
                    <input type="text" placeholder="搜索内容" @confirm="getData" :value="search" />
                </view>
                <view class="action" @tap.stop.prevent="clear_input">
                    <text>取消</text>
                </view>
            </view>

            <view class="margin-top padding-lr">
                <view class="text-black text-bold">热门搜索</view>
                <view class="padding-tb flex">
                    <block v-for="(item, index) in hot_list" :key="index">
                        <view class="padding-lr-xs" :data-index="index" @tap.stop.prevent="getSearch">
                            <view class="cu-tag round bg-orange light">{{ item }}</view>
                        </view>
                    </block>
                </view>
            </view>

            <view class="margin-top padding-lr">
                <view class="flex justify-between">
                    <view class="text-black text-bold">搜索历史</view>
                    <view class="cuIcon-delete text-gray" @tap.stop.prevent="clearHistory">清除历史</view>
                </view>
                <view class="padding-tb flex">
                    <block v-for="(item, index) in list" :key="index">
                        <view class="padding-lr-xs" :data-index="index" @tap.stop.prevent="getSearch">
                            <view class="cu-tag round bg-grey light">{{ item }}</view>
                        </view>
                    </block>
                </view>
            </view>

            <view class="margin-top padding-lr">
                <view class="flex justify-between">
                    <view class="text-black">操作说明</view>
                </view>
                <view class="padding-tb">
                    <view class="text-sm">1、搜索框内填入内容并Enter键进行搜索</view>
                    <view class="text-sm">2、搜索历史会显示之前搜索内容，最多保留12个</view>
                    <view class="text-sm">3、取消按钮会清除搜索框内的数据</view>
                    <view class="text-sm">4、点击热门搜索标签，快捷搜索热门信息</view>
                    <view class="text-sm">5、点击清除历史，将清除本地搜索缓存</view>
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
// pages/index/plugin/search/search.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            hot_list: ['组件库', '小程序', '李白', '李清照'],
            list: [],
            search: ''
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
    onShow() {
        if (uni.getStorageSync('search_history')) {
            this.setData({
                list: JSON.parse(uni.getStorageSync('search_history')).slice(0, 15)
            });
        }
    },
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
        getData(e) {
            let data = e.detail.value.replace(/(^\s*)|(\s*$)/g, ''); //去掉前后的空格
            if (data.trim() != '') {
                this.list.forEach((key, index) => {
                    if (key == data) {
                        this.list.splice(index, 1);
                    }
                });
                this.list.unshift(data);
                this.setData({
                    list: this.list.slice(0, 15)
                });
                uni.setStorageSync('search_history', JSON.stringify(this.list));
            }
        },

        clear_input() {
            this.setData({
                search: ''
            });
        },

        getSearch(e) {
            let { index } = e.currentTarget.dataset;
            let { hot_list } = this;
            let va = hot_list[index];
            this.setData({
                search: va
            });
            // 将标签存到历史搜索中
            this.list.forEach((item, index) => {
                if (item == va) {
                    this.list.splice(index, 1);
                }
            });
            this.list.unshift(va);
            this.setData({
                list: this.list.slice(0, 15)
            });
            uni.setStorageSync('search_history', JSON.stringify(this.list));
        },

        //清空历史
        clearHistory() {
            this.setData({
                list: []
            });
            uni.removeStorageSync('search_history');
        },

        getSearchOne(e) {
            let { index } = e.currentTarget.dataset;
            let { list } = this;
            let va = list[index];
            this.setData({
                search: va
            });
            this.list.forEach((item, index) => {
                if (item == va) {
                    this.list.splice(index, 1);
                }
            });
            this.list.unshift(va);
            this.setData({
                list: this.list.slice(0, 15)
            });
            // console.log(this.data.list)
            uni.setStorageSync('search_history', JSON.stringify(this.list));
        }
    }
};
</script>
<style>
/* pages/index/plugin/search/search.wxss */
</style>
