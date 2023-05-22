<template>
    <view style="height: 100%">
        <!-- pages/index/component/modal/modal.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">模态框</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                普通窗口
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="Modal" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view :class="'cu-modal ' + (modalName == 'Modal' ? 'show' : '')">
            <view class="cu-dialog">
                <view class="cu-bar bg-white justify-end">
                    <view class="content">Modal标题</view>
                    <view class="action" @tap="hideModal">
                        <text class="cuIcon-close text-red"></text>
                    </view>
                </view>
                <view class="padding-xl">Modal 内容。</view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                底部窗口
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="bottomModal" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view :class="'cu-modal bottom-modal ' + (modalName == 'bottomModal' ? 'show' : '')">
            <view class="cu-dialog">
                <view class="cu-bar bg-white">
                    <view class="action text-green">确定</view>
                    <view class="action text-blue" @tap="hideModal">取消</view>
                </view>
                <view class="padding-xl">Modal 内容。</view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                对话窗口
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DialogModal1" style="height: 84rpx">
                    <text class="text-lg">演示1</text>
                </button>
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DialogModal2" style="height: 84rpx">
                    <text class="text-lg">演示2</text>
                </button>
            </view>
        </view>

        <view :class="'cu-modal ' + (modalName == 'DialogModal1' ? 'show' : '')">
            <view class="cu-dialog">
                <view class="cu-bar bg-white justify-end">
                    <view class="content">ColorUI GA</view>
                    <view class="action" @tap="hideModal">
                        <text class="cuIcon-close text-red"></text>
                    </view>
                </view>
                <view class="padding-xl text-left">ColorUI GA 是基于ColorUI 2.0开发的轻量、可靠、开源的小程序原生css组件库，理论上适用于其他支持css库的所有平台。</view>
                <view class="cu-bar bg-white justify-end">
                    <view class="action">
                        <button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
                        <button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
                    </view>
                </view>
            </view>
        </view>

        <view :class="'cu-modal ' + (modalName == 'DialogModal2' ? 'show' : '')">
            <view class="cu-dialog">
                <view class="cu-bar bg-white justify-end">
                    <view class="content">ColorUI GA</view>
                    <view class="action" @tap="hideModal">
                        <text class="cuIcon-close text-red"></text>
                    </view>
                </view>
                <view class="padding-xl text-left">ColorUI GA 是基于ColorUI 2.0开发的轻量、可靠、开源的小程序原生css组件库，理论上适用于其他支持css库的所有平台。</view>
                <view class="cu-bar bg-white">
                    <view class="action margin-0 flex-sub text-green" @tap="hideModal">
                        <text class="cuIcon-moneybag"></text>
                        微信支付
                    </view>
                    <view class="action margin-0 flex-sub text-green solid-left" @tap="hideModal">取消</view>
                    <view class="action margin-0 flex-sub solid-left" @tap="hideModal">确定</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                图片窗口
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="Image" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view :class="'cu-modal ' + (modalName == 'Image' ? 'show' : '')">
            <view class="cu-dialog">
                <view class="bg-img" style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1); height: 360rpx">
                    <view class="cu-bar justify-end text-white">
                        <view class="action" @tap="hideModal">
                            <text class="cuIcon-close"></text>
                        </view>
                    </view>
                </view>
                <view class="cu-bar bg-white">
                    <view class="action margin-0 flex-sub solid-left" @tap="hideModal">我知道了</view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                单选窗口
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="RadioModal" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view :class="'cu-modal ' + (modalName == 'RadioModal' ? 'show' : '')" @tap="hideModal">
            <view class="cu-dialog" catchtap>
                <radio-group class="block">
                    <view class="cu-list menu text-left">
                        <view class="cu-item" v-for="(item, index) in 5" :key="index">
                            <label class="flex justify-between align-center flex-sub">
                                <view class="flex-sub">Item {{ index + 1 }}</view>
                                <radio class="round"></radio>
                            </label>
                        </view>
                    </view>
                </radio-group>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                多选窗口(底部弹出)
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="ChooseModal" style="height: 84rpx"><text class="text-lg">演示</text></button>
            </view>
        </view>

        <view :class="'cu-modal bottom-modal ' + (modalName == 'ChooseModal' ? 'show' : '')" @tap="hideModal">
            <view class="cu-dialog" catchtap>
                <view class="cu-bar bg-white">
                    <view class="action text-blue" @tap="hideModal">取消</view>
                    <view class="action text-green" @tap="hideModal">确定</view>
                </view>
                <view class="grid col-3 padding-sm">
                    <view class="padding-xs" v-for="(item, index) in checkbox" :key="index">
                        <button :class="'cu-btn orange lg block ' + (item.checked ? 'bg-orange' : 'line-orange')" @tap="ChooseCheckbox" :data-value="item.value">
                            {{ item.name }}
                            <view :class="'cu-tag sm round ' + (item.checked ? 'bg-white text-orange' : 'bg-orange')" v-if="item.hot">HOT</view>
                        </button>
                    </view>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white margin-top-sm">
            <view class="action">
                <text class="cuIcon-title text-blue"></text>
                侧边抽屉
            </view>
        </view>

        <view class="bg-white padding-tb">
            <view class="cu-bar btn-group">
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DrawerModalL" style="height: 84rpx">
                    <text class="text-lg">左侧弹出演示</text>
                </button>
                <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DrawerModalR" style="height: 84rpx">
                    <text class="text-lg">右侧弹出演示</text>
                </button>
            </view>
        </view>

        <view :class="'cu-modal drawer-modal justify-start ' + (modalName == 'DrawerModalL' ? 'show' : '')" @tap="hideModal">
            <view class="cu-dialog basis-lg" catchtap :style="'top:' + CustomBar + 'px;height:calc(100vh - ' + CustomBar + 'px)'">
                <view class="cu-list menu text-left">
                    <view class="cu-item arrow" v-for="(item, index) in 5" :key="index">
                        <view class="content">
                            <view>Item {{ index + 1 }}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view :class="'cu-modal drawer-modal justify-end ' + (modalName == 'DrawerModalR' ? 'show' : '')" @tap="hideModal">
            <view class="cu-dialog basis-lg" catchtap :style="'top:' + CustomBar + 'px;height:calc(100vh - ' + CustomBar + 'px)'">
                <view class="cu-list menu text-left">
                    <view class="cu-item arrow" v-for="(item, index) in 5" :key="index">
                        <view class="content">
                            <view>Item {{ index + 1 }}</view>
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
// pages/index/component/modal/modal.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            CustomBar: app.globalData.CustomBar,

            checkbox: [
                {
                    value: 0,
                    name: '10元',
                    checked: false,
                    hot: false
                },
                {
                    value: 1,
                    name: '20元',
                    checked: true,
                    hot: false
                },
                {
                    value: 2,
                    name: '30元',
                    checked: true,
                    hot: true
                },
                {
                    value: 3,
                    name: '60元',
                    checked: false,
                    hot: true
                },
                {
                    value: 4,
                    name: '80元',
                    checked: false,
                    hot: false
                },
                {
                    value: 5,
                    name: '100元',
                    checked: false,
                    hot: false
                }
            ],

            modalName: ''
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

        ChooseCheckbox(e) {
            let items = this.checkbox;
            let values = e.currentTarget.dataset.value;
            for (
                (function () {
                    let lenI = items.length;
                })();
                i < lenI;
                ++i
            ) {
                if (items[i].value == values) {
                    items[i].checked = !items[i].checked;
                    break;
                }
            }
            this.setData({
                checkbox: items
            });
        }
    }
};
</script>
<style>
/* pages/index/component/modal/modal.wxss */
</style>
