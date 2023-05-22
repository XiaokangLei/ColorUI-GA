<template>
    <!-- colorui/components/calendar/calendar.wxml -->
    <view class="calendar">
        <view class="title flex">
            <view class="flex">
                <picker :value="selectDay.year + '-' + selectDay.month" @change="editMonth" mode="date" fields="month" class="year-month">
                    {{ selectDay.year }}.{{ selectDay.month > 9 ? selectDay.month : '0' + selectDay.month }}
                </picker>
                <view class="icon" @tap="lastMonth" style="transform: rotate(180deg)">
                    <view class="iconfont icon-playfill"></view>
                </view>
                <view class="icon" @tap="nextMonth">
                    <view class="iconfont icon-playfill"></view>
                </view>
            </view>
            <view @tap.stop.prevent="openChange" class="flex open">
                <view>{{ open ? '收起' : '展开' }}</view>
                <view style="margin-left: 6rpx; font-size: 20rpx" :class="'iconfont icon-' + (open ? 'fold' : 'unfold')"></view>
            </view>
        </view>

        <!-- 日历头部 -->
        <view class="flex-around calendar-week">
            <view class="view">日</view>
            <view class="view">一</view>
            <view class="view">二</view>
            <view class="view">三</view>
            <view class="view">四</view>
            <view class="view">五</view>
            <view class="view">六</view>
        </view>

        <!-- 日历主体 -->
        <view class="flex-start flex-wrap calendar-main" :style="'height:' + (dateList.length / 7) * 92 + 'rpx'">
            <view class="day" v-for="(item, index) in dateList" :key="index">
                <view
                    :class="'bg ' + (item.year === selectDay.year && item.month === selectDay.month ? (item.day === selectDay.day ? 'select' : '') : 'other-month')"
                    @tap.stop.prevent="selectChange"
                    :data-day="item.day"
                    :data-year="item.year"
                    :data-month="item.month"
                    :data-date-string="item.dateString"
                >
                    {{ item.day }}
                </view>

                <view class="spot" v-if="item.spot"></view>
            </view>
        </view>
    </view>
</template>

<script>
// colorui/components/calendar/calendar.js
export default {
    data() {
        return {
            dateList: [],

            //日历主体渲染数组
            //选中时间
            selectDay: {
                year: '',
                month: '',
                day: ''
            },

            open: ''
        };
    },

    /**
     * 组件的属性列表
     */
    props: {
        spot: {
            type: Array,
            default: () => []
        },
        defaultTime: {
            type: String,
            default: ''
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        attached() {
            if (this.defaultTime) {
                let now = new Date(this.defaultTime);
            } else {
                let now = new Date();
            }
            let selectDay = {
                year: now.getFullYear(),
                month: now.getMonth() + 1,
                day: now.getDate(),
                dateString: this.formatTime(now, 'Y-M-D')
            };
            this.setMonth(selectDay.year, selectDay.month, selectDay.day);
        },

        /**
         * 时间戳转化为年 月 日 时 分 秒
         * time: 需要被格式化的时间，可以被new Date()解析即可
         * format：格式化之后返回的格式，年月日时分秒分别为Y, M, D, h, m, s，这个参数不填的话则显示多久前
         */
        formatTime(time, format) {
            function formatNumber(n) {
                n = n.toString();
                return n[1] ? n : '0' + n;
            }
            function getDate(time, format) {
                const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
                const returnArr = [];
                const date = new Date(time);
                returnArr.push(date.getFullYear());
                returnArr.push(formatNumber(date.getMonth() + 1));
                returnArr.push(formatNumber(date.getDate()));
                returnArr.push(formatNumber(date.getHours()));
                returnArr.push(formatNumber(date.getMinutes()));
                returnArr.push(formatNumber(date.getSeconds()));
                for (const i in returnArr) {
                    format = format.replace(formateArr[i], returnArr[i]);
                }
                return format;
            }
            function getDateDiff(time) {
                let r = '';
                const ft = new Date(time);
                const nt = new Date();
                const nd = new Date(nt);
                nd.setHours(23);
                nd.setMinutes(59);
                nd.setSeconds(59);
                nd.setMilliseconds(999);
                const d = parseInt((nd - ft) / 86400000);
                switch (true) {
                    case d === 0:
                        const t = parseInt(nt / 1000) - parseInt(ft / 1000);
                        switch (true) {
                            case t < 60:
                                r = '刚刚';
                                break;
                            case t < 3600:
                                r = parseInt(t / 60) + '分钟前';
                                break;
                            default:
                                r = parseInt(t / 3600) + '小时前';
                        }
                        break;
                    case d === 1:
                        r = '昨天';
                        break;
                    case d === 2:
                        r = '前天';
                        break;
                    case d > 2 && d < 30:
                        r = d + '天前';
                        break;
                    default:
                        r = getDate(time, 'Y-M-D');
                }
                return r;
            }
            if (!format) {
                return getDateDiff(time);
            } else {
                return getDate(time, format);
            }
        },

        //picker设置月份
        editMonth(e) {
            const arr = e.detail.value.split('-');
            const year = parseInt(arr[0]);
            const month = parseInt(arr[1]);
            this.setMonth(year, month);
        },

        //上月切换按钮点击
        lastMonth() {
            const lastMonth = new Date(this.selectDay.year, this.selectDay.month - 2);
            const year = lastMonth.getFullYear();
            const month = lastMonth.getMonth() + 1;
            this.setMonth(year, month);
        },

        //下月切换按钮点击
        nextMonth() {
            const nextMonth = new Date(this.selectDay.year, this.selectDay.month);
            const year = nextMonth.getFullYear();
            const month = nextMonth.getMonth() + 1;
            this.setMonth(year, month);
        },

        //设置月份
        setMonth(setYear, setMonth, setDay) {
            if (this.selectDay.year !== setYear || this.selectDay.month !== setMonth) {
                const day = Math.min(new Date(setYear, setMonth, 0).getDate(), this.selectDay.day);
                const time = new Date(setYear, setMonth - 1, setDay ? setDay : day);
                const data = {
                    selectDay: {
                        year: setYear,
                        month: setMonth,
                        day: setDay ? setDay : day,
                        dateString: this.formatTime(time, 'Y-M-D')
                    }
                };
                if (!setDay) {
                    data.open = true;
                }
                this.setData(data);
                this.dateInit(setYear, setMonth);
                this.setSpot();
                this.$emit('change', {
                    detail: this.selectDay
                });
            }
        },

        //展开收起
        openChange() {
            this.setData({
                open: !this.open
            });
            this.$emit('aaa', {
                detail: {
                    a: 0
                }
            });
            this.dateInit();
            this.setSpot();
        },

        //设置日历底下是否展示小圆点
        setSpot() {
            const timeArr = this.spot.map((item) => {
                return this.formatTime(item, 'Y-M-D');
            });
            this.dateList.forEach((item) => {
                if (timeArr.indexOf(item.dateString) !== -1) {
                    item.spot = true;
                } else {
                    item.spot = false;
                }
            });
            this.setData({
                dateList: this.dateList
            });
        },

        //日历主体的渲染方法
        dateInit(setYear = this.selectDay.year, setMonth = this.selectDay.month) {
            let dateList = []; //需要遍历的日历数组数据
            let now = new Date(setYear, setMonth - 1); //当前月份的1号
            let startWeek = now.getDay(); //目标月1号对应的星期
            let dayNum = new Date(setYear, setMonth, 0).getDate(); //当前月有多少天
            let forNum = Math.ceil((startWeek + dayNum) / 7) * 7; //当前月跨越的周数
            if (this.open) {
                //展开状态，需要渲染完整的月份
                for (let i = 0; i < forNum; i++) {
                    const now2 = new Date(now);
                    now2.setDate(i - startWeek + 1);
                    let obj = {};
                    obj = {
                        day: now2.getDate(),
                        month: now2.getMonth() + 1,
                        year: now2.getFullYear(),
                        dateString: this.formatTime(now2, 'Y-M-D')
                    };
                    dateList[i] = obj;
                }
            } else {
                //非展开状态，只需要渲染当前周
                for (let i = 0; i < 7; i++) {
                    const now2 = new Date(now);
                    //当前周的7天
                    now2.setDate(Math.ceil((this.selectDay.day + startWeek) / 7) * 7 - 6 - startWeek + i);
                    let obj = {};
                    obj = {
                        day: now2.getDate(),
                        month: now2.getMonth() + 1,
                        year: now2.getFullYear(),
                        dateString: this.formatTime(now2, 'Y-M-D')
                    };
                    dateList[i] = obj;
                }
            }
            this.setData({
                dateList: dateList
            });
        },

        //一天被点击时
        selectChange(e) {
            const year = e.currentTarget.dataset.year;
            const month = e.currentTarget.dataset.month;
            const day = e.currentTarget.dataset.day;
            const dateString = e.currentTarget.dataset.dateString;
            const selectDay = {
                year: year,
                month: month,
                day: day,
                dateString: dateString
            };
            if (this.selectDay.year !== year || this.selectDay.month !== month) {
                this.setMonth(year, month, day);
            } else if (this.selectDay.day !== day) {
                this.setData({
                    selectDay: selectDay
                });
                this.$emit('change', {
                    detail: this.selectDay
                });
            }
        }
    },

    mounted() {
        // 处理小程序 attached 生命周期
        this.attached();
    },

    watch: {
        spot: function (spot) {
            this.setSpot();
        }
    },

    created: function () {}
};
</script>
<style>
/* colorui/components/calendar/calendar.wxss */
@font-face {
    font-family: 'iconfont';
    /* IE9 */
    src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL8AAsAAAAABxQAAAKvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqBVIFEATYCJAMQCwoABCAFhG0HQhswBsgekiRFQgQU8AMAmmCIh3/HXu9L8hFVWwXoyALpqqoqwAEfD6g66abEPBux/13TPwBUeZ0lAldI75LS0ctlzLY8NwVk3NQm5Co3lqhaWPE+z+X0pi+Q1bez3MZatCYtPuoFGAcU4F7UiyIroBPkltpFHBi88q89JtA0p1jEYe/wNMQryKpAPHbYMMT3CooStetCdeZgEd9U1NPX9ADgQf8+/kFlxJNUMrLx5LpHhPaf+GUsavP/JpxJQpHgHq8gYx0oxO1s41yUiMQoTWOibQN1dYmf+Dn0MhYO2zgfttC/PEKSiSrS3QabXjPzE3ON4GdII/FrrEsGhPjr/dYGcOyzM56gg6PM1BXvcbZIxY7zzRyS4znJs/m2VmjuRNq9edF1kcx9FbW85/nRgbXX6s5q/AX+vsGh/kBhUUHAYszwFx4acaAA6l7k9bgjo8Vbue4acDcbCqFqcBru+htf4l/I4EnzzQAa8lT+kNoAyG/TJuTdyDcsG+NB4r05rfm73irgx/jRrw4XMB+gyga24dQGHCqlg8RKyZ3cWuWLEWhFQlMTmOwwFLrCPwH3E+omB/I1sy2yunmysOuoaNlEVd0Omtb0HW8ZYaJEaWDVnoPQd4ek6zuyvkeysE+omPpCVT+i0HQaWRe2LIYjsYsRzImIrEvIIagKZQmeaHoniW1Owqzr0NIsYbqjjCpKy4ftPqIQdsUWfd5WyTlFlKky6nWeI5KkIo2pTiLwUjvnWmNZGZ37UKmgypDoAENgHCFCrJYgDgKVgsrxXOLo+5MImzkSjK3oFuazCEbnmB6pUKocQPZ5FZDuV97RzbOpxHEUQjEqGdLrzCMkEhWizc9zIgRcKfuBmqZRGR1Fod7S5/3yH56AJnJDiRQ5SlRU3yhUlcRoMStek/ASdUgSAAA=')
        format('woff2');
    /* iOS 4.1- */
}

.iconfont {
    font-family: 'iconfont' !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    font-weight: normal;
}

.icon-unfold:before {
    content: '\e661';
}

.icon-fold:before {
    content: '\e6de';
}

.icon-playfill:before {
    content: '\e74f';
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.direction-column {
    flex-direction: column;
}

.flex1 {
    flex: 1;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flex-end {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.flex-around {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.flex-wrap {
    flex-wrap: wrap;
}

.align-start {
    align-items: flex-start;
}

.align-end {
    align-items: flex-end;
}

.align-stretch {
    align-items: stretch;
}

.calendar {
    background-color: #fff;
}

.calendar .title {
    font-size: 40rpx;
    color: #333;
    padding: 30rpx;
    line-height: 60rpx;
}

.calendar .title .year-month {
    margin-right: 20rpx;
}

.calendar .title .icon {
    padding: 0 16rpx;
    font-size: 32rpx;
    color: #999;
}

.calendar .title .open {
    background-color: #f6f6f6;
    color: #999;
    font-size: 22rpx;
    line-height: 36rpx;
    border-radius: 18rpx;
    padding: 0 14rpx;
}

.calendar .calendar-week {
    line-height: 40rpx;
    padding: 0 25rpx;
    font-size: 28rpx;
    color: #999;
}

.calendar .calendar-week .view {
    width: 100rpx;
    text-align: center;
}

.calendar .calendar-main {
    padding: 30rpx 25rpx;
    transition: height 0.3s;
    align-content: flex-start;
    overflow: hidden;
}

.calendar .calendar-main .day {
    position: relative;
    width: 100rpx;
    color: #666;
    text-align: center;
    height: 66rpx;
}

.calendar .calendar-main .day .bg {
    height: 56rpx;
    line-height: 56rpx;
    font-size: 28rpx;
    color: #333;
    font-weight: bold;
}

.calendar .calendar-main .day .select {
    width: 56rpx;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    background: linear-gradient(-60deg, #0fdac5, #1bc7b0);
    box-shadow: 0px 5px 16px 0px #c6f3ed;
    margin: 0 auto;
}

.calendar .calendar-main .day .other-month {
    color: #ccc;
}

.calendar .calendar-main .day .spot {
    width: 8rpx;
    height: 8rpx;
    background-color: #1dcdb8;
    border-radius: 50%;
    margin: 6rpx auto 0;
}
</style>
