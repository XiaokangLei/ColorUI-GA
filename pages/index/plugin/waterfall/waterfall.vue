<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/waterfall/waterfall.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">瀑布流</view>
        </cu-custom>

        <view class="cu-waterfall bg-white padding-bottom-xl">
            <view class="flex-sub">
                <view class="flow">
                    <view class="cu-card case no-card" v-for="(item, index) in leftData" :key="index">
                        <view class="cu-item">
                            <view class="image">
                                <image :src="item.image" mode="widthFix"></image>
                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <view class="flex-sub">
                <view class="flow">
                    <view class="cu-card case no-card" v-for="(item, index) in rightData" :key="index">
                        <view class="cu-item shadow">
                            <view class="image">
                                <image :src="item.image" mode="widthFix"></image>
                            </view>
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
// pages/index/plugin/waterfall/waterfall.js
let leftHeight = 0;
let rightHeight = 0;
let leftData = [];
let rightData = [];
export default {
    components: {
        copyright
    },
    data() {
        return {
            leftData: [],
            rightData: [],
            orgData: [
                {
                    title: '瀑布流示例1',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic_0NF_MgX2DptxYFGoM0SUv?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '瀑布流示例2',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic_AcXKfK5Fr6Dl5i_tr5Vwy?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '瀑布流示例3',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic_6vP65kAdE8pqGbI9cqYNm?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '瀑布流示例4',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic__Y1hiTPzdjSL1bvsUODgK?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '瀑布流示例4',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic_z7UntCMyEWdzIGVQUhfBu?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '瀑布流示例4',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic_sKe8npGuQpHFSHa3HS91t?imageMogr2/thumbnail/450x/interlace/1'
                },
                {
                    title: '瀑布流示例4',
                    name: 'WaterFall',
                    image: 'https://image.meiye.art/pic_j-BV0e4xP0zOHz2WNgBac?imageMogr2/thumbnail/450x/interlace/1'
                }
            ]
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.create(this.orgData);
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
        leftHeight = 0;
        rightHeight = 0;
        leftData = [];
        rightData = [];
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
        create(data) {
            let promiseArr = [];
            for (let i in data) {
                let p = new Promise((resolve, reject) => {
                    uni.getImageInfo({
                        src: data[i].image,
                        complete: (res) => {
                            let proportion = res.height / res.width;
                            data[i].height = 375 * proportion;
                            resolve(data[i]);
                        }
                    });
                });
                promiseArr.push(p);
            }
            Promise.all(promiseArr).then((res) => {
                this.sort(res);
                this.setData({
                    leftData,
                    rightData
                });
            });
        },

        sort(data) {
            data.forEach((item) => {
                if (leftHeight <= rightHeight) {
                    leftHeight += item.height;
                    leftData.push(item);
                } else {
                    rightHeight += item.height;
                    rightData.push(item);
                }
            });
        }
    }
};
</script>
<style>
/* pages/index/plugin/waterfall/waterfall.wxss */
</style>
