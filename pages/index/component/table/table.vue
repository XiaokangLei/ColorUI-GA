<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/table/table.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">表格样式</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                一列 (key-value)
            </view>
        </view>

        <view class="table">
            <block>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
            </block>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                两列 (key-value)
            </view>
        </view>

        <view class="table">
            <block>
                <view class="flex-sub">
                    <view class="table-tr text-bold solid" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr solid" v-if="index % 2 == 0" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
                <view class="flex-sub">
                    <view class="table-tr text-bold solid" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr solid" v-if="index % 2 != 0" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
            </block>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                三列 (key-value)
            </view>
        </view>

        <view class="table">
            <block>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <view class="table-tr" v-if="index % 3 == 0" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                </view>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <view class="table-tr" v-if="index % 3 == 1" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                </view>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <view class="table-tr" v-if="index % 3 == 2" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                </view>
            </block>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                四列 (key-value)
            </view>
        </view>

        <view class="table">
            <block>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr" v-if="index % 4 == 0" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr" v-if="index % 4 == 1" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr" v-if="index % 4 == 2" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- <scroll-view scroll-y='true' style="height:1000rpx;"> -->
                    <view class="table-tr" v-if="index % 4 == 3" v-for="(item, index) in list" :key="index">
                        <view class="table-th">{{ item.number }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <!-- </scroll-view> -->
                </view>
            </block>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                固定高度滚动
            </view>
        </view>

        <view class="table">
            <block>
                <view class="flex-sub">
                    <view class="table-tr text-bold" v-for="(item, index) in header" :key="index">
                        <view class="table-th">{{ item.name }}</view>

                        <view class="table-th">{{ item.score }}</view>
                    </view>
                    <scroll-view :scroll-y="true" style="height: 200rpx">
                        <view class="table-tr" v-for="(item, index) in list" :key="index">
                            <view class="table-th">{{ item.number }}</view>

                            <view class="table-th">{{ item.score }}</view>
                        </view>
                    </scroll-view>
                </view>
            </block>
        </view>

        <view class="cu-bar bg-white margin-tb">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                其他样式
            </view>
        </view>

        <view class="bg-white padding-xs" v-for="(item, index) in score" :key="index">
            <view class="flex">
                <view class="flex flex-sub padding-lr align-center solid name">
                    <view class="flex-sub text-bold">{{ item.name }}</view>
                    <view class="flex-sub text-bold">{{ item.address }}</view>
                    <view class="flex-sub flex justify-end text-bold">
                        <view class="cu-tag bg-olive light">985</view>
                        <view class="cu-tag bg-orange light">211</view>
                    </view>
                </view>
            </view>

            <view class="flex padding-bottom">
                <view class="flex-sub text-center solid" v-for="(child, index1) in item.detail" :key="index1">
                    <view class="year center">{{ child.year }}年</view>

                    <view class="flex">
                        <view class="flex-sub text-center">
                            <view class="title center solid">最高分位次</view>
                            <view class="num center solid">{{ child.top_rank }}</view>
                        </view>
                        <view class="flex-sub text-center">
                            <view class="title center solid">最低分位次</view>
                            <view class="num center solid">{{ child.low_rank }}</view>
                        </view>
                        <view class="flex-sub text-center">
                            <view class="title center solid">平均分位次</view>
                            <view class="num center solid">{{ child.avg_rank }}</view>
                        </view>
                    </view>
                </view>
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
// pages/index/plugin/table/table.js
export default {
    components: {
        copyright
    },
    data() {
        return {
            header: [
                {
                    name: '序号',
                    score: '题目'
                }
            ],

            score: [
                {
                    name: '重庆大学',
                    address: '重庆市',
                    tag: [985, 211],
                    detail: [
                        {
                            year: 2019,
                            top_rank: 3499,
                            low_rank: 3579,
                            avg_rank: 3895
                        },
                        {
                            year: 2018,
                            top_rank: 3499,
                            low_rank: 3579,
                            avg_rank: 3895
                        }
                    ]
                },
                {
                    name: '四川大学',
                    address: '成都市',
                    tag: [985, 211],
                    detail: [
                        {
                            year: 2019,
                            top_rank: 3499,
                            low_rank: 3579,
                            avg_rank: 3895
                        },
                        {
                            year: 2018,
                            top_rank: 3499,
                            low_rank: 3579,
                            avg_rank: 3895
                        }
                    ]
                }
            ],

            list: '',

            child: {
                year: '',
                top_rank: '',
                low_rank: '',
                avg_rank: ''
            }
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let list = [];
        for (let i = 1; i <= 12; i++) {
            let obj = {
                number: '分数',
                score: i
            };
            list.push(obj);
        }
        this.setData({
            list
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
    methods: {}
};
</script>
<style>
/* pages/index/plugin/table/table.wxss */
</style>
