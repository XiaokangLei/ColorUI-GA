<template>
    <view style="height: 100%">
        <!-- pages/index/component/list/list.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">列表</view>
        </cu-custom>

        <scroll-view :scroll-y="modalName == null" :class="'page ' + (modalName != null ? 'show' : '')">
            <view class="cu-bar bg-white solid-bottom">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    宫格列表
                </view>
                <view class="action">
                    <button class="cu-btn bg-blue shadow" @tap="showModal" data-target="gridModal">设置</button>
                </view>
            </view>

            <view class="margin-top-xs">
                <view :class="'cu-modal ' + (modalName == 'gridModal' ? 'show' : '')" @tap="hideModal">
                    <view class="cu-dialog" catchtap>
                        <radio-group class="block" @change="gridchange">
                            <view class="cu-list menu text-left">
                                <view class="cu-item" v-for="(item, index) in 3" :key="index">
                                    <label class="flex justify-between align-center flex-sub">
                                        <view class="flex-sub">{{ index + 3 }} 列</view>
                                        <radio class="round" :value="index + 3" :checked="gridCol == index + 3"></radio>
                                    </label>
                                </view>
                            </view>
                        </radio-group>
                        <view class="cu-list menu text-left solid-top">
                            <view class="cu-item">
                                <view class="content">
                                    <text class="text-gray">边框</text>
                                </view>
                                <view class="action">
                                    <switch @change="gridswitch"></switch>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>

                <view :class="'cu-list grid col-' + gridCol + ' ' + (gridBorder ? '' : 'no-border')">
                    <view class="cu-item" v-if="index < gridCol * 2" v-for="(item, index) in iconList" :key="index">
                        <view :class="'cuIcon-' + item.icon + ' text-' + item.color">
                            <view class="cu-tag badge" v-if="item.badge != 0">
                                <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                            </view>
                        </view>

                        <text>{{ item.name }}</text>
                    </view>
                </view>
            </view>

            <view class="cu-bar bg-white solid-bottom margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    菜单列表
                </view>
                <view class="action">
                    <button class="cu-btn bg-blue shadow" @tap="showModal" data-target="menuModal">设置</button>
                </view>
            </view>

            <view class="margin-top-xs">
                <view :class="'cu-modal ' + (modalName == 'menuModal' ? 'show' : '')" @tap="hideModal">
                    <view class="cu-dialog" catchtap>
                        <scroll-view scroll-y style="height: 300rpx">
                            <view class="cu-list menu text-left solid-top">
                                <view class="cu-item">
                                    <view class="content">
                                        <text class="text-gray">短边框</text>
                                    </view>
                                    <view class="action">
                                        <switch @change="menuBorderFun"></switch>
                                    </view>
                                </view>
                                <view class="cu-item">
                                    <view class="content">
                                        <text class="text-gray">箭头</text>
                                    </view>
                                    <view class="action">
                                        <switch @change="menuArrowFun"></switch>
                                    </view>
                                </view>
                                <view class="cu-item">
                                    <view class="content">
                                        <text class="text-gray">卡片</text>
                                    </view>
                                    <view class="action">
                                        <switch @change="menuCardFun"></switch>
                                    </view>
                                </view>
                                <view class="cu-item">
                                    <view class="content">
                                        <text class="text-grey">短边框</text>
                                    </view>
                                    <view class="action">
                                        <switch @change="menuBorderFun"></switch>
                                    </view>
                                </view>
                                <view class="cu-item">
                                    <view class="content">
                                        <text class="text-grey">箭头</text>
                                    </view>
                                    <view class="action">
                                        <switch @change="menuArrowFun"></switch>
                                    </view>
                                </view>
                                <view class="cu-item">
                                    <view class="content">
                                        <text class="text-grey">卡片</text>
                                    </view>
                                    <view class="action">
                                        <switch @change="menuCardFun"></switch>
                                    </view>
                                </view>
                            </view>
                        </scroll-view>
                    </view>
                </view>

                <view :class="'cu-list menu ' + (menuBorder ? 'sm-border' : '') + ' ' + (menuCard ? 'card-menu margin-top' : '')">
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <view class="content">
                            <text class="cuIcon-circlefill text-grey"></text>
                            <text class="text-grey">图标 + 标题</text>
                        </view>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <view class="content">
                            <image src="/static/images/tabbar/basics_cur.png" class="png" mode="aspectFit"></image>
                            <text class="text-grey">图片 + 标题</text>
                        </view>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <button class="cu-btn content" open-type="contact">
                            <text class="cuIcon-btn text-olive"></text>
                            <text class="text-grey">Open-type 按钮</text>
                        </button>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
                            <text class="cuIcon-discoverfill text-orange"></text>
                            <text class="text-grey">Navigator 跳转</text>
                        </navigator>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <view class="content">
                            <text class="cuIcon-emojiflashfill text-pink"></text>
                            <text class="text-grey">头像组</text>
                        </view>
                        <view class="action">
                            <view class="cu-avatar-group">
                                <view
                                    class="cu-avatar round sm"
                                    style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"
                                ></view>
                                <view
                                    class="cu-avatar round sm"
                                    style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                                ></view>
                                <view
                                    class="cu-avatar round sm"
                                    style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"
                                ></view>
                                <view
                                    class="cu-avatar round sm"
                                    style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                                ></view>
                            </view>
                            <text class="text-grey text-sm">4 人</text>
                        </view>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <view class="content">
                            <text class="cuIcon-btn text-green"></text>
                            <text class="text-grey">按钮</text>
                        </view>
                        <view class="action">
                            <button class="cu-btn round bg-blue shadow">
                                <text class="cuIcon-upload"></text>
                                上传
                            </button>
                        </view>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <view class="content">
                            <text class="cuIcon-tagfill text-red"></text>
                            <text class="text-grey">标签</text>
                        </view>
                        <view class="action">
                            <view class="cu-tag round bg-orange light">音乐</view>
                            <view class="cu-tag round bg-olive light">电影</view>
                            <view class="cu-tag round bg-blue light">旅行</view>
                        </view>
                    </view>
                    <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
                        <view class="content">
                            <text class="cuIcon-warn text-green"></text>
                            <text class="text-grey">文本</text>
                        </view>
                        <view class="action">
                            <text class="text-grey text-sm">小目标还没有实现！</text>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="content padding-tb-sm">
                            <view>
                                <text class="cuIcon-clothesfill text-blue margin-right-xs"></text>
                                多行Item
                            </view>
                            <view class="text-gray text-sm">
                                <text class="cuIcon-infofill margin-right-xs"></text>
                                小目标还没有实现！
                            </view>
                        </view>
                        <view class="action">
                            <switch class="switch-sex sm" @change="switchSex"></switch>
                        </view>
                    </view>
                </view>
            </view>
            <view class="cu-bar bg-white solid-bottom margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    消息列表
                </view>
            </view>

            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view
                        class="cu-avatar round lg"
                        style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"
                    ></view>
                    <view class="content">
                        <view class="text-grey">格鲁</view>
                        <view class="text-gray text-sm flex">
                            <text class="text-cut">
                                <text class="cuIcon-infofill text-red margin-right-xs"></text>
                                我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
                            </text>
                        </view>
                    </view>
                    <view class="action">
                        <view class="text-grey text-xs">22:20</view>
                        <view class="cu-tag round bg-grey sm">5</view>
                    </view>
                </view>
                <view class="cu-item">
                    <view class="cu-avatar round lg" style="background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)">
                        <view class="cu-tag badge">99+</view>
                    </view>
                    <view class="content">
                        <view class="text-grey">
                            <text class="text-cut">马克</text>
                            <view class="cu-tag round bg-orange sm">战士</view>
                        </view>
                        <view class="text-gray text-sm flex">
                            <text class="text-cut">
                                塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
                            </text>
                        </view>
                    </view>
                    <view class="action">
                        <view class="text-grey text-xs">22:20</view>
                        <view class="cuIcon-notice_forbid_fill text-gray"></view>
                    </view>
                </view>
                <view class="cu-item">
                    <view
                        class="cu-avatar radius lg"
                        style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                    ></view>
                    <view class="content">
                        <view class="text-pink">
                            <text class="text-cut">斯图尔特</text>
                        </view>
                        <view class="text-gray text-sm flex">
                            <text class="text-cut">格鲁，你被自己的光芒变的盲目！</text>
                        </view>
                    </view>
                    <view class="action">
                        <view class="text-grey text-xs">22:20</view>
                        <view class="cu-tag round bg-red sm">5</view>
                    </view>
                </view>
                <view class="cu-item grayscale">
                    <view
                        class="cu-avatar radius lg"
                        style="background-image: url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"
                    ></view>
                    <view class="content">
                        <view>
                            <text class="text-cut">蒂姆</text>
                            <view class="cu-tag round bg-orange sm">断开连接...</view>
                        </view>
                        <view class="text-gray text-sm flex">
                            <text class="text-cut">等我回来一个打十个</text>
                        </view>
                    </view>
                    <view class="action">
                        <view class="text-grey text-xs">22:20</view>
                        <view class="cu-tag round bg-red sm">5</view>
                    </view>
                </view>
                <view class="cu-item cur">
                    <view class="cu-avatar radius lg" style="background-image: url(https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1)">
                        <view class="cu-tag badge"></view>
                    </view>
                    <view class="content">
                        <view>
                            <text class="text-cut">鲍勃</text>
                            <view class="cu-tag round bg-orange sm">6人</view>
                        </view>
                        <view class="text-gray text-sm flex">
                            <text class="text-cut">
                                蒂姆：
                                <text class="cuIcon-locationfill text-orange margin-right-xs"></text>
                                传送中...
                            </text>
                        </view>
                    </view>
                    <view class="action">
                        <view class="text-grey text-xs">22:20</view>
                        <view class="cuIcon-notice_forbid_fill text-gray"></view>
                    </view>
                </view>
            </view>

            <view class="cu-bar bg-white solid-bottom margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    列表左滑
                </view>
            </view>

            <view class="cu-list menu-avatar">
                <view
                    :class="'cu-item ' + (modalName == 'move-box-' + index ? 'move-cur' : '')"
                    @touchstart="ListTouchStartFun"
                    @touchmove="ListTouchMove"
                    @touchend="ListTouchEnd"
                    :data-target="'move-box-' + index"
                    v-for="(item, index) in 4"
                    :key="index"
                >
                    <view
                        class="cu-avatar round lg"
                        style="background-image: url(https://image.meiye.art/FiqphSjedkvi1y0hfqeNrYGXqLKo?imageMogr2/thumbnail/450x/interlace/1)"
                    ></view>

                    <view class="content">
                        <view class="text-grey">小黄人</view>
                        <view class="text-gray text-sm">
                            <text class="cuIcon-infofill text-red"></text>
                            消息未送达
                        </view>
                    </view>

                    <view class="action">
                        <view class="text-grey text-xs">22:20</view>
                        <view class="cu-tag round bg-grey sm">5</view>
                    </view>

                    <view class="move">
                        <view class="bg-grey">置顶</view>
                        <view class="bg-red">删除</view>
                    </view>
                </view>
            </view>
        </scroll-view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/list/list.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,

            iconList: [
                {
                    icon: 'cardboardfill',
                    color: 'red',
                    badge: 120,
                    name: 'VR'
                },
                {
                    icon: 'recordfill',
                    color: 'orange',
                    badge: 1,
                    name: '录像'
                },
                {
                    icon: 'picfill',
                    color: 'yellow',
                    badge: 0,
                    name: '图像'
                },
                {
                    icon: 'noticefill',
                    color: 'olive',
                    badge: 22,
                    name: '通知'
                },
                {
                    icon: 'upstagefill',
                    color: 'cyan',
                    badge: 0,
                    name: '排行榜'
                },
                {
                    icon: 'clothesfill',
                    color: 'blue',
                    badge: 0,
                    name: '皮肤'
                },
                {
                    icon: 'discoverfill',
                    color: 'purple',
                    badge: 0,
                    name: '发现'
                },
                {
                    icon: 'questionfill',
                    color: 'mauve',
                    badge: 0,
                    name: '帮助'
                },
                {
                    icon: 'commandfill',
                    color: 'purple',
                    badge: 0,
                    name: '问答'
                },
                {
                    icon: 'brandfill',
                    color: 'mauve',
                    badge: 0,
                    name: '版权'
                }
            ],

            gridCol: 3,
            skin: false,
            modalName: '',
            gridBorder: '',
            menuBorder: '',
            menuArrow: '',
            menuCard: '',
            ListTouchStart: '',
            ListTouchDirection: ''
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

        gridchange: function (e) {
            this.setData({
                gridCol: e.detail.value
            });
        },

        gridswitch: function (e) {
            this.setData({
                gridBorder: e.detail.value
            });
        },

        menuBorderFun: function (e) {
            this.setData({
                menuBorder: e.detail.value
            });
        },

        menuArrowFun: function (e) {
            this.setData({
                menuArrow: e.detail.value
            });
        },

        menuCardFun: function (e) {
            this.setData({
                menuCard: e.detail.value
            });
        },

        switchSex: function (e) {
            this.setData({
                skin: e.detail.value
            });
        },

        // ListTouch触摸开始
        ListTouchStartFun(e) {
            this.setData({
                ListTouchStart: e.touches[0].pageX
            });
        },

        // ListTouch计算方向
        ListTouchMove(e) {
            this.setData({
                ListTouchDirection: e.touches[0].pageX - this.ListTouchStart > 0 ? 'right' : 'left'
            });
        },

        // ListTouch计算滚动
        ListTouchEnd(e) {
            if (this.ListTouchDirection == 'left') {
                this.setData({
                    modalName: e.currentTarget.dataset.target
                });
            } else {
                this.setData({
                    modalName: null
                });
            }
            this.setData({
                ListTouchDirection: null
            });
        }
    }
};
</script>
<style>
/* pages/index/component/list/list.wxss */
</style>
