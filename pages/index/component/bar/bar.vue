<template>
    <view style="height: 100%">
        <!-- pages/index/component/bar/bar.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isCustom="true">
            <view slot="content">操作条</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-bold">顶部操作条</text>
            </view>
        </view>

        <view class="margin-tb-xs">
            <view class="cu-bar bg-white margin-top-xs">
                <view class="action">
                    <text class="cuIcon-back text-gray"></text>
                    返回
                </view>
                <view class="content text-bold">ColorUI GA</view>
            </view>
            <view class="cu-bar bg-white margin-top-xs">
                <view class="action">
                    <text class="cuIcon-homefill text-gray"></text>
                    首页
                </view>
                <view class="content text-bold">ColorUI GA</view>
                <view class="action">
                    <text class="cuIcon-recordfill text-red"></text>
                </view>
            </view>
            <view class="cu-bar bg-blue margin-top-xs">
                <view class="action">
                    <text class="cuIcon-close"></text>
                    关闭
                </view>
                <view class="content text-bold">ColorUI GA</view>
            </view>
            <view class="cu-bar bg-blue light search margin-top-xs">
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="content">ColorUI GA</view>
                <view class="action">
                    <text class="cuIcon-more"></text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-bold">搜索操作条</text>
            </view>
        </view>

        <view class="margin-top-xs">
            <view class="cu-bar search bg-white margin-top-xs">
                <view class="search-form round">
                    <text class="cuIcon-search"></text>
                    <input type="text" placeholder="搜索内容" confirm-type="search" />
                </view>
                <view class="action">
                    <button class="cu-btn bg-blue shadow-blur round">搜索</button>
                </view>
            </view>
            <view class="cu-bar search bg-white margin-top-xs">
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="search-form round">
                    <text class="cuIcon-search"></text>
                    <input type="text" placeholder="搜索内容" confirm-type="search" />
                </view>
                <view class="action">
                    <text>北京</text>
                    <text class="cuIcon-triangledownfill"></text>
                </view>
            </view>
            <view class="cu-bar bg-red search margin-top-xs">
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="search-form radius">
                    <text class="cuIcon-search"></text>
                    <input type="text" placeholder="搜索内容" confirm-type="search" />
                </view>
                <view class="action">
                    <text>北京</text>
                    <text class="cuIcon-triangledownfill"></text>
                </view>
            </view>
            <view class="cu-bar bg-cyan search margin-top-xs">
                <view class="search-form radius">
                    <text class="cuIcon-search"></text>
                    <input type="text" placeholder="搜索内容" confirm-type="search" />
                </view>
                <view class="action">
                    <text class="cuIcon-close"></text>
                    <text>取消</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-bold">底部操作条</text>
            </view>
        </view>

        <view class="margin-top-xs">
            <view class="cu-bar tabbar bg-white margin-top-xs">
                <view class="action">
                    <view class="cuIcon-cu-image">
                        <image src="/static/images/tabbar/basics_cur.png"></image>
                    </view>
                    <view class="text-blue">主页</view>
                </view>
                <view class="action">
                    <view class="cuIcon-cu-image">
                        <image src="/static/images/tabbar/component.png"></image>
                        <view class="cu-tag badge">99</view>
                    </view>
                    <view class="text-gray">设计</view>
                </view>
                <view class="action">
                    <view class="cuIcon-cu-image">
                        <image src="/static/images/tabbar/about.png"></image>
                        <view class="cu-tag badge"></view>
                    </view>
                    <view class="text-gray">关于</view>
                </view>
            </view>
            <view class="cu-bar tabbar margin-bottom-xl bg-black margin-top-xs">
                <view class="action text-orange">
                    <view class="cuIcon-homefill"></view>
                    首页
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-similar"></view>
                    分类
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-recharge"></view>
                    积分
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-my">
                        <view class="cu-tag badge"></view>
                    </view>
                    我的
                </view>
            </view>
            <view class="cu-bar tabbar margin-bottom-xl bg-white margin-top-xs">
                <view class="action text-green">
                    <view class="cuIcon-homefill"></view>
                    首页
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-similar"></view>
                    分类
                </view>
                <view class="action text-gray add-action">
                    <button class="cu-btn cuIcon-add bg-green shadow"></button>
                    发布
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-my">
                        <view class="cu-tag badge"></view>
                    </view>
                    我的
                </view>
            </view>
            <view class="cu-bar tabbar bg-black margin-top-xs">
                <view class="action text-green">
                    <view class="cuIcon-homefill"></view>
                    首页
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-similar"></view>
                    分类
                </view>
                <view class="action text-gray add-action">
                    <button class="cu-btn cuIcon-add bg-green shadow"></button>
                    发布
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="action text-gray">
                    <view class="cuIcon-my">
                        <view class="cu-tag badge"></view>
                    </view>
                    我的
                </view>
            </view>
            <view class="cu-bar bg-white tabbar border shop margin-top-xs">
                <button class="action" open-type="contact">
                    <view class="cuIcon-service text-green">
                        <view class="cu-tag badge"></view>
                    </view>
                    Service
                </button>
                <view class="action text-orange">
                    <view class="cuIcon-favorfill"></view>
                    Collection
                </view>
                <view class="action">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="bg-red submit">Buy Now</view>
            </view>
            <view class="cu-bar bg-white tabbar border shop margin-top-xs">
                <button class="action" open-type="contact">
                    <view class="cuIcon-service text-green">
                        <view class="cu-tag badge"></view>
                    </view>
                    Service
                </button>
                <view class="action">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="bg-orange submit">Add to cart</view>
                <view class="bg-red submit">Buy Now</view>
            </view>
            <view class="cu-bar bg-white tabbar border shop margin-top-xs">
                <button class="action" open-type="contact">
                    <view class="cuIcon-service text-green">
                        <view class="cu-tag badge"></view>
                    </view>
                    Service
                </button>
                <view class="action">
                    <view class="cuIcon-shop"></view>
                    Shop
                </view>
                <view class="action">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="btn-group">
                    <button class="cu-btn bg-red round shadow-blur">Buy Now</button>
                </view>
            </view>
            <view class="cu-bar bg-white tabbar border shop margin-top-xs">
                <button class="action" open-type="contact">
                    <view class="cuIcon-service text-green">
                        <view class="cu-tag badge"></view>
                    </view>
                    Service
                </button>
                <view class="action">
                    <view class="cuIcon-cart">
                        <view class="cu-tag badge">99</view>
                    </view>
                    Cart
                </view>
                <view class="btn-group">
                    <button class="cu-btn bg-orange round shadow-blur">Add to cart</button>
                    <button class="cu-btn bg-red round shadow-blur">Buy Now</button>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                <text class="text-bold">输入操作条</text>
            </view>
        </view>

        <view class="margin-top-xs">
            <view class="cu-bar input margin-top-xs">
                <view class="action">
                    <text class="cuIcon-sound text-grey"></text>
                </view>
                <input class="solid-bottom" :focus="false" maxlength="300" cursor-spacing="10" />
                <view class="action">
                    <text class="cuIcon-emojifill text-grey"></text>
                </view>
                <button class="cu-btn bg-blue shadow-blur">发送</button>
            </view>
            <view class="cu-bar input margin-top-xs">
                <view class="cu-avatar round" style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"></view>
                <view class="action">
                    <text class="cuIcon-roundaddfill text-grey"></text>
                </view>
                <input class="solid-bottom" maxlength="300" cursor-spacing="10" />
                <view class="action">
                    <text class="cuIcon-emojifill text-grey"></text>
                </view>
                <button class="cu-btn bg-blue shadow-blur">发送</button>
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
// pages/index/component/bar/bar.js
export default {
    components: {
        copyright
    },
    data() {
        return {};
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
/* pages/index/component/bar/bar.wxss */
</style>
