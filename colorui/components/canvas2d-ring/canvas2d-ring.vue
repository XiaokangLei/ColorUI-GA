<template>
    <view style="height: 100%">
        <!-- colorui/components/canvas2d-ring/canvas2d-ring.wxml -->
        <canvas :style="'width:' + canvasWidth + 'px;height:' + canvasWidth + 'px; position:relative'" type="2d" id="myCanvas">
            <view class="circle-bar" :style="'height:' + canvasWidth + 'px;'">
                <view class="title_name">
                    {{ title }}
                </view>
                <view
                    class="title_val"
                    :style="'color: ' + valueColor + '; font-weight:' + f_weight + '; margin-top:' + (show_tip ? '10' : '0') + 'rpx;font-size:' + f_size + 'px'"
                >
                    {{ value }} {{ suffix }}
                </view>
            </view>
        </canvas>
    </view>
</template>

<script>
// colorui/components/canvas2d-ring/canvas2d-ring.js
var windWidth = uni.getSystemInfoSync().windowWidth;
export default {
    data() {
        return {
            canvasWidth: ' windWidth * 0.4',
            show_tip: true
        };
    },
    /**
     * 组件的属性列表
     */
    props: {
        //画布的宽度 默认占屏幕宽度的0.4倍
        canvasWidth: {
            type: Number,
            default: windWidth * 0.4
        },
        //线条宽度 默认10
        lineWidth: {
            type: Number,
            default: 10
        },
        //线条颜色
        lineColor: {
            type: String,
            default: '#3696FA'
        },
        //标题 默认“完成率”
        title: {
            type: String,
            default: '完成率'
        },
        //当前的值 默认45
        value: {
            type: Number,
            default: 45
        },
        //值的颜色 默认""
        valueColor: {
            type: String,
            default: '#333'
        },
        //值的字体的大小颜色 默认28rpx
        f_size: {
            type: Number,
            default: 14
        },
        f_weight: {
            type: String,
            default: '500'
        },
        //最大值 默认100
        maxValue: {
            type: Number,
            default: 100
        },
        //最小值 默认0
        minValue: {
            type: Number,
            default: 0
        },
        //当前值的后缀名
        suffix: {
            type: null,
            default: '%'
        },
        //从什么角度开始 0~360之间 （12点方向为0,18点方向为180,0点方向为360）
        startDegree: {
            type: Number,
            default: 180
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        showCanvasRing() {
            //没标题的时候去掉margin-top的值
            if (this.title.replace(/(^\s*)|(\s*$)/g, '').length == 0) {
                this.setData({
                    show_tip: false
                });
            }
            //canvas 2d
            const query = uni.createSelectorQuery().in(this);
            query
                .select('#myCanvas')
                .fields({
                    node: true,
                    size: true
                })
                .exec(this.init.bind(this));
        },
        init(res) {
            const canvas = res[0].node;
            const ctx = canvas.getContext('2d');
            const dpr = uni.getSystemInfoSync().pixelRatio;
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            ctx.scale(dpr, dpr);
            // 大小值的计算
            var circle_r = this.canvasWidth / 2; //画布的一半，用来找中心点和半径
            var startDegree = this.startDegree; //从什么角度开始
            var maxValue = this.maxValue; //最大值
            var minValue = this.minValue; //最小值
            var value = this.value; //当前的值
            var lineColor = this.lineColor; //线条颜色
            var lineWidth = this.lineWidth; //线条宽度
            var percent = 360 * ((value - minValue) / (maxValue - minValue)); //计算结果

            //定义起始点
            ctx.translate(circle_r, circle_r);
            //灰色圆弧
            ctx.beginPath();
            ctx.strokeStyle = '#ebebeb';
            ctx.lineWidth = lineWidth;
            ctx.arc(0, 0, circle_r - 10, 0, 2 * Math.PI, true);
            ctx.stroke();
            ctx.closePath();
            //有色彩的圆弧
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.arc(0, 0, circle_r - 10, (startDegree * Math.PI) / 180 - 0.5 * Math.PI, (percent * Math.PI) / 180 + (startDegree * Math.PI) / 180 - 0.5 * Math.PI, false);
            ctx.stroke();
            ctx.closePath();
        }
    },
    created: function () {}
};
</script>
<style>
/* colorui/components/canvas2d-ring/canvas2d-ring.wxss */
.circle-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 0;
}

.circle-bar .title_name {
    max-height: 62rpx;
    font-size: 26rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
}
.circle-bar .title_val {
    color: #333333;
}
</style>
