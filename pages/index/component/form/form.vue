<template>
    <view style="height: 100%">
        <!-- pages/index/component/form/form.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">表单</view>
        </cu-custom>

        <form>
            <view class="cu-bar bg-white">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    <text class="text-bold">输入框</text>
                </view>
            </view>

            <view class="cu-form-group margin-top-sm">
                <view class="title">邮件</view>
                <input placeholder="两字短标题" />
            </view>

            <view class="cu-form-group">
                <view class="title">输入框</view>
                <input placeholder="三字标题" />
            </view>

            <view class="cu-form-group">
                <view class="title">收货地址</view>
                <input placeholder="统一标题的宽度" />
            </view>

            <view class="cu-form-group">
                <view class="title">收货地址</view>
                <input placeholder="输入框带个图标" />
                <text class="cuIcon-locationfill text-orange"></text>
            </view>

            <view class="cu-form-group">
                <view class="title">验证码</view>
                <input placeholder="输入框带个按钮" />
                <button class="cu-btn bg-green shadow">验证码</button>
            </view>

            <view class="cu-form-group">
                <view class="title">手机号码</view>
                <input placeholder="输入框带标签" />
                <view class="cu-capsule radius">
                    <view class="cu-tag bg-blue">+86</view>
                    <view class="cu-tag line-blue">中国大陆</view>
                </view>
            </view>

            <view class="cu-bar bg-white margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    <text class="text-bold">选择器</text>
                </view>
            </view>

            <view class="cu-form-group margin-top">
                <view class="title">普通选择</view>
                <picker @change="PickerChange" :value="index" :range="picker">
                    <view class="picker">
                        {{ index ? picker[index] : '禁止换行，超出容器部分会以 ... 方式截断' }}
                    </view>
                </picker>
            </view>

            <view class="cu-form-group">
                <view class="title">多列选择</view>
                <picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
                    <view class="picker">{{ multiArray[0][multiIndex[0]] }}，{{ multiArray[1][multiIndex[1]] }}，{{ multiArray[2][multiIndex[2]] }}</view>
                </picker>
            </view>

            <view class="cu-form-group">
                <view class="title">时间选择</view>
                <picker mode="time" :value="time" start="00:01" end="23:59" @change="TimeChange">
                    <view class="picker">
                        {{ time }}
                    </view>
                </picker>
            </view>

            <view class="cu-form-group">
                <view class="title">日期选择</view>
                <picker mode="date" :value="date" start="2015-09-01" end="2024-09-01" @change="DateChange">
                    <view class="picker">
                        {{ date }}
                    </view>
                </picker>
            </view>

            <view class="cu-form-group">
                <view class="title">地址选择</view>
                <region-picker @change="RegionChange" :value="region" :custom-item="customItem">
                    <view class="picker">{{ region[0] }}，{{ region[1] }}，{{ region[2] }}</view>
                </region-picker>
            </view>

            <view class="cu-bar bg-white margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    <text class="text-bold">图片选择</text>
                </view>
            </view>

            <view class="cu-bar bg-white margin-top-sm">
                <view class="action">图片上传</view>
                <view class="action">{{ imgList.length }}/4</view>
            </view>

            <view class="cu-form-group">
                <view class="grid col-4 grid-square flex-sub">
                    <view class="bg-img" @tap="ViewImage" :data-url="imgList[index]" v-for="(item, index) in imgList" :key="index">
                        <image :src="imgList[index]" mode="aspectFill"></image>

                        <view class="cu-tag bg-red" @tap.stop.prevent="DelImg" :data-index="index">
                            <text class="cuIcon-close"></text>
                        </view>
                    </view>
                    <view class="solids" @tap="ChooseImage" v-if="imgList.length < 4">
                        <text class="cuIcon-cameraadd"></text>
                    </view>
                </view>
            </view>

            <!-- <view class="cu-form-group margin-top">
    <view class="title">头像</view>
    <view class="cu-avatar radius bg-gray"></view>
  </view> -->

            <view class="cu-bar bg-white margin-top">
                <view class="action">
                    <text class="cuIcon-titles text-blue"></text>
                    <text class="text-bold">多行文本输入</text>
                </view>
            </view>

            <!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
            <view class="cu-form-group margin-top-sm">
                <textarea maxlength="-1" :disabled="modalName != null" @input="textareaAInput" placeholder="多行文本输入框"></textarea>
            </view>

            <view class="cu-form-group align-start margin-top-sm">
                <view class="title">文本框</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="textareaBInput" placeholder="多行文本输入框"></textarea>
            </view>
        </form>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/component/form/form.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            StatusBar: app.globalData.StatusBar,
            CustomBar: app.globalData.CustomBar,
            index: null,
            picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
            multiArray: [
                ['无脊柱动物', '脊柱动物'],
                ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
                ['猪肉绦虫', '吸血虫']
            ],

            objectMultiArray: [
                [
                    {
                        id: 0,
                        name: '无脊柱动物'
                    },
                    {
                        id: 1,
                        name: '脊柱动物'
                    }
                ],
                [
                    {
                        id: 0,
                        name: '扁性动物'
                    },
                    {
                        id: 1,
                        name: '线形动物'
                    },
                    {
                        id: 2,
                        name: '环节动物'
                    },
                    {
                        id: 3,
                        name: '软体动物'
                    },
                    {
                        id: 3,
                        name: '节肢动物'
                    }
                ],
                [
                    {
                        id: 0,
                        name: '猪肉绦虫'
                    },
                    {
                        id: 1,
                        name: '吸血虫'
                    }
                ]
            ],

            multiIndex: [0, 0, 0],
            time: '13:01',
            date: '2022-12-25',
            region: ['北京市', '北京市', '朝阳区'],
            imgList: [],
            modalName: null,
            textareaAValue: '',
            textareaBValue: '',
            customItem: ''
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
        PickerChange(e) {
            console.log(e);
            this.setData({
                index: e.detail.value
            });
        },

        MultiChange(e) {
            this.setData({
                multiIndex: e.detail.value
            });
        },

        MultiColumnChange(e) {
            let data = {
                multiArray: this.multiArray,
                multiIndex: this.multiIndex
            };
            data.multiIndex[e.detail.column] = e.detail.value;
            switch (e.detail.column) {
                case 0:
                    switch (data.multiIndex[0]) {
                        case 0:
                            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                            break;
                        case 1:
                            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
                            data.multiArray[2] = ['鲫鱼', '带鱼'];
                            break;
                    }
                    data.multiIndex[1] = 0;
                    data.multiIndex[2] = 0;
                    break;
                case 1:
                    switch (data.multiIndex[0]) {
                        case 0:
                            switch (data.multiIndex[1]) {
                                case 0:
                                    data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                                    break;
                                case 1:
                                    data.multiArray[2] = ['蛔虫'];
                                    break;
                                case 2:
                                    data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                                    break;
                                case 3:
                                    data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                                    break;
                                case 4:
                                    data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                                    break;
                            }
                            break;
                        case 1:
                            switch (data.multiIndex[1]) {
                                case 0:
                                    data.multiArray[2] = ['鲫鱼', '带鱼'];
                                    break;
                                case 1:
                                    data.multiArray[2] = ['青蛙', '娃娃鱼'];
                                    break;
                                case 2:
                                    data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                                    break;
                            }
                            break;
                    }
                    data.multiIndex[2] = 0;
                    break;
            }
            this.setData(data);
        },

        TimeChange(e) {
            this.setData({
                time: e.detail.value
            });
        },

        DateChange(e) {
            this.setData({
                date: e.detail.value
            });
        },

        RegionChange: function (e) {
            this.setData({
                region: e.detail.value
            });
        },

        ChooseImage() {
            uni.chooseImage({
                count: 4,
                //默认9
                sizeType: ['original', 'compressed'],
                //可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album'],
                //从相册选择
                success: (res) => {
                    if (this.imgList.length != 0) {
                        this.setData({
                            imgList: this.imgList.concat(res.tempFilePaths)
                        });
                    } else {
                        this.setData({
                            imgList: res.tempFilePaths
                        });
                    }
                }
            });
        },

        ViewImage(e) {
            uni.previewImage({
                urls: this.imgList,
                current: e.currentTarget.dataset.url
            });
        },

        DelImg(e) {
            uni.showModal({
                title: '提示',
                content: '确定要删除图片吗？',
                cancelText: '取消',
                confirmText: '确定',
                success: (res) => {
                    if (res.confirm) {
                        this.imgList.splice(e.currentTarget.dataset.index, 1);
                        this.setData({
                            imgList: this.imgList
                        });
                    }
                }
            });
        },

        textareaAInput(e) {
            this.setData({
                textareaAValue: e.detail.value
            });
        },

        textareaBInput(e) {
            this.setData({
                textareaBValue: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/index/component/form/form.wxss */
</style>
