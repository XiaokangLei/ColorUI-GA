<template>
    <view style="height: 100%">
        <!-- pages/index/plugin/calendar/calendar.wxml -->
        <cu-custom bgColor="bg-gradual-blue" isBack>
            <view slot="content">日历</view>
        </cu-custom>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                基础样式
            </view>
        </view>

        <view class="margin-tb padding-lr-sm">
            <view class="bg-white radius-lg">
                <view class="bg-blue radius-lg-top text-center light flex justify-between padding">
                    <view class="text-xl" @tap="last"><text class="cuIcon-back"></text></view>
                    <view class="text-lg">{{ year }} 年 {{ month }} 月 {{ today }} 日</view>
                    <view class="text-xl" @tap="next"><text class="cuIcon-right"></text></view>
                </view>
                <view class="padding-xs">
                    <view class="flex justify-center padding-tb-xs">
                        <view class="padding-lr-sm">MON</view>
                        <view class="padding-lr-sm">TUE</view>
                        <view class="padding-lr-sm">WED</view>
                        <view class="padding-lr-sm">THU</view>
                        <view class="padding-lr-sm">FRI</view>
                        <view class="padding-lr-sm">SAT</view>
                        <view class="padding-lr-sm">SUN</view>
                    </view>
                    <view class="calendar-main-center flex flex-wrap">
                        <view v-for="(item, index) in space" :key="index"></view>
                        <view
                            :data-today="item.day"
                            @tap="click"
                            :class="(today == item.day ? 'bg-blue padding radius light text-bold' : '') + ' flex'"
                            style="height: 76rpx"
                            v-for="(item, index) in day"
                            :key="index"
                        >
                            <view class="flex flex-wrap">
                                {{ item.day }}
                                <view class="flex text-xs" style="margin-top: -10rpx; padding-bottom: 8rpx">{{ item.lunar }}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <view class="grid col-1 bg-white margin-bottom margin-lr-sm radius-lg">
            <view class="padding-sm">
                <view class="padding-lg shadow-blur l-card">
                    <view class="padding-bottom-xs">选中日期为：</view>
                    <text class="text-blue">{{ year }}</text>
                    年
                    <text class="text-blue">{{ month }}</text>
                    月
                    <text class="text-blue">{{ today }}</text>
                    日，周
                    <text class="text-blue">{{ week }}</text>
                    , 农历：
                    <text class="text-blue">{{ lunarDate }}</text>
                </view>
            </view>
        </view>

        <view class="cu-bar bg-white">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                弹出样式
            </view>
        </view>

        <view class="cu-list menu sm-border margin-top">
            <view class="cu-item arrow" @tap="setShow">
                <view class="content">
                    <text>选择日期</text>
                </view>
                <view class="text-blue">{{ year }}-{{ month }}-{{ today }}</view>
            </view>
        </view>

        <view :class="'cu-modal ' + (show ? 'show' : '')" @tap="hideModal">
            <view class="cu-dialog" catchtap>
                <view class="padding-lr-xs">
                    <view class="margin-tb bg-white radius-lg">
                        <view class="bg-blue radius-lg text-center light flex justify-between padding">
                            <view class="text-xl" @tap="last"><text class="cuIcon-back"></text></view>
                            <view class="text-lg">{{ year }} 年 {{ month }} 月 {{ today }} 日</view>
                            <view class="text-xl" @tap="next"><text class="cuIcon-right"></text></view>
                        </view>
                        <view class="padding-xs">
                            <view class="flex justify-center padding-tb-xs">
                                <view class="padding-lr-sm">MON</view>
                                <view class="padding-lr-xs">TUE</view>
                                <view class="padding-lr-sm">WED</view>
                                <view class="padding-lr-xs">THU</view>
                                <view class="padding-lr-sm">FRI</view>
                                <view class="padding-lr-xs">SAT</view>
                                <view class="padding-lr-sm">SUN</view>
                            </view>
                            <view class="calendar-main-center-mini flex flex-wrap">
                                <view v-for="(item, index) in space" :key="index"></view>
                                <view
                                    :data-today="item.day"
                                    @tap="click"
                                    :class="(today == item.day ? 'bg-blue padding radius light text-bold' : '') + ' flex'"
                                    style="height: 76rpx"
                                    v-for="(item, index) in day"
                                    :key="index"
                                >
                                    <view class="flex flex-wrap">
                                        {{ item.day }}
                                        <view class="flex text-xs" style="margin-top: -10rpx; padding-bottom: 6rpx">{{ item.lunar }}</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="cu-bar bg-white">
                    <view class="action margin-0 flex-sub text-green solid-left" @tap="hideModal">取消</view>
                    <view class="action margin-0 flex-sub solid-left text-blue" @tap="hideModal">确定</view>
                </view>
                <slot />
            </view>
        </view>

        <view class="cu-bar bg-white margin-top">
            <view class="action">
                <text class="cuIcon-titles text-blue"></text>
                日历样式二
            </view>
        </view>

        <calendar @change="dateChange" :spot="spot" defaultTime=""></calendar>
        <!-- <view class="date-string">当前选中的日期是：{{dateString}}</view> -->
        <view class="padding-sm">
            <view class="padding-lg text-center shadow-blur l-card">选中日期为：{{ dateString }}</view>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-548518d3cd8c2bc3"></ad>
        </view>
    </view>
</template>

<script>
import calendar from '@/colorui/components/calendar/calendar';
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/plugin/calendar/calendar.js
export default {
    components: {
        calendar,
        copyright
    },
    data() {
        return {
            year: 0,
            month: 0,
            today: 0,
            space: 0,
            week: '',
            dateString: '',
            spot: ['2021/11/6', '2020/8/9', '2020/8/20', '2020/9/12'],

            // 农历
            Nongli: 0,

            lunarInfo: [
                19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261,
                27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680,
                37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383,
                22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800,
                25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977,
                19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840,
                54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448
            ],
            chineseNumber: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'],
            lunarDate: '',
            day: '',
            show: false
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNowTime();
        this.getSpace();
        this.createDay();
        this.emit();
        // 获取当前日期的农历日期
        this.getLunarDate(new Date());
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
    methods: {
        getNowTime() {
            const time = new Date();
            this.setData({
                year: time.getFullYear(),
                month: time.getMonth() + 1,
                today: time.getDate(),
                week: time.getDay()
            });
        },

        createDay() {
            let day = [];
            let time = new Date(this.year, this.month, 0);
            let len = time.getDate();
            for (let i = 1; i <= len; i++) {
                time.setDate(i);
                // 获取农历日期
                let lunarDate = this.getLunarDate(time);
                day.push({
                    day: i,
                    lunar: lunarDate
                });
                // day.push(i);
            }

            this.setData({
                day
            });
        },

        getSpace() {
            let time = new Date(this.year, this.month - 1, 1);
            time = new Date(time.setDate(0));
            const space = time.getDay();
            this.setData({
                space
            });
        },

        next() {
            let month = this.month;
            if (month == 12) {
                this.setData({
                    year: this.year + 1,
                    month: 1
                });
            } else {
                this.setData({
                    month: month + 1
                });
            }
            this.getSpace();
            this.createDay();
            this.check();
            this.emit();
        },

        // 今月选择31，下月只有30，那么选择的today更改为30
        check() {
            let { today, year, month } = this;
            const time = new Date(year, month, 0);
            let maxDay = time.getDate();
            if (today > maxDay) {
                this.setData({
                    today: maxDay
                });
            }
        },

        last() {
            let month = this.month;
            if (month == 1) {
                this.setData({
                    year: this.year - 1,
                    month: 12
                });
            } else {
                this.setData({
                    month: month - 1
                });
            }
            this.getSpace();
            this.createDay();
            this.check();
            this.emit();
        },

        /**
         * 点击日期
         * @param {*} e
         */
        click(e) {
            // 显示
            let today = e.currentTarget.dataset.today;
            this.setData({
                today
            });
            this.emit();
        },

        emit() {
            // 传递给父组件
            let { year, month, today } = this;
            let time = new Date(year, month - 1, today);
            // 获取选中日期的农历日期
            this.getLunarDate(time);
            let week = time.getDay();
            week = this.formatWeek(week);
            this.setData({
                year,
                month,
                today,
                week
            });
        },

        formatWeek(data) {
            switch (data) {
                case 1:
                    return '一';
                case 2:
                    return '二';
                case 3:
                    return '三';
                case 4:
                    return '四';
                case 5:
                    return '五';
                case 6:
                    return '六';
                case 0:
                    return '日';
            }
        },

        setShow() {
            this.setData({
                show: true
            });
        },

        hideModal(e) {
            this.setData({
                show: false
            });
        },

        dateChange(e) {
            this.setData({
                dateString: e.detail.dateString
            });
        },

        // 获取农历日期相关函数
        getLunarDate: function (curDate) {
            var that = this;
            var yearCyl;
            var monCyl;
            var dayCyl;
            var leapMonth = 0;
            var date = new Date('1900/1/31');
            // var curDate = new Date();
            // 求出和1900年1月31日相差的天数
            var offset = parseInt((curDate.getTime() - date.getTime()) / 86400000);
            dayCyl = offset + 40;
            monCyl = 14;
            // 用offset减去每农历年的天数
            // 计算当天是农历第几天
            // i最终结果是农历的年份
            // offset是当年的第几天
            var iYear;
            var daysOfYear = 0;
            for (iYear = 1900; iYear < 2050 && offset > 0; iYear++) {
                daysOfYear = that.yearDays(iYear);
                offset -= daysOfYear;
                monCyl += 12;
            }
            if (offset < 0) {
                offset += daysOfYear;
                iYear--;
                monCyl -= 12;
            }
            yearCyl = iYear - 1864;
            leapMonth = that.leapMonth(iYear); // 闰哪个月,1-12
            var leap = false; // 默认值
            // 用当年的天数offset,逐个减去每月（农历）的天数，求出当天是本月的第几天
            var iMonth;
            var daysOfMonth = 0;
            for (iMonth = 1; iMonth < 13 && offset > 0; iMonth++) {
                // 闰月
                if (leapMonth > 0 && iMonth == leapMonth + 1 && !leap) {
                    --iMonth;
                    leap = true;
                    daysOfMonth = that.leapDays(iYear);
                } else {
                    daysOfMonth = that.monthDays(iYear, iMonth);
                }
                offset -= daysOfMonth;
                // 解除闰月
                if (leap && iMonth == leapMonth + 1) {
                    leap = false;
                }
                if (!leap) {
                    monCyl++;
                }
            }
            // offset为0时，并且刚才计算的月份是闰月，要校正
            if (offset == 0 && leapMonth > 0 && iMonth == leapMonth + 1) {
                if (leap) {
                    leap = false;
                } else {
                    leap = true;
                    --iMonth;
                    --monCyl;
                }
            }
            // offset小于0时，也要校正
            if (offset < 0) {
                offset += daysOfMonth;
                --iMonth;
                --monCyl;
            }
            var newday = that.getChinaDayString(offset + 1);
            var newmonth = that.chineseNumber[iMonth - 1];
            that.setData({
                lunarDate: newmonth + '月' + newday
            });
            //把日期整合成一个字符串
            var nongli = iYear + '年' + newmonth + '月' + newday;
            //把nongli赋值给date里的Nongli,才能在html中使用
            this.setData({
                Nongli: nongli
            });
            if (newday == '初一') {
                return newmonth + '月';
            } else {
                return newday;
            }
        },

        //***上面的方法调用下面的方法***

        yearDays: function (y) {
            var that = this;
            var i;
            var sum = 348;
            for (i = 32768; i > 8; i >>= 1) {
                if ((that.lunarInfo[y - 1900] & i) != 0) {
                    sum += 1;
                }
            }
            return sum + that.leapDays(y);
        },

        leapDays: function (y) {
            var that = this;
            if (that.leapMonth(y) != 0) {
                if ((that.lunarInfo[y - 1900] & 65536) != 0) {
                    return 30;
                } else {
                    return 29;
                }
            } else {
                return 0;
            }
        },

        leapMonth: function (y) {
            var that = this;
            return that.lunarInfo[y - 1900] & 15;
        },

        monthDays: function (y, m) {
            if ((this.lunarInfo[y - 1900] & (65536 >> m)) == 0) {
                return 29;
            } else {
                return 30;
            }
        },

        getChinaDayString: function (day) {
            var that = this;
            var chineseTen = ['初', '十', '廿', '卅'];
            if (day % 10 == 0) {
                var n = 9;
            } else {
                var n = (day % 10) - 1;
            }
            if (day > 30) {
                return '';
            }
            if (day == 10) {
                return '初十';
            } else {
                return chineseTen[parseInt(day / 10)] + that.chineseNumber[n];
            }
        }
    }
};
</script>
<style>
/* pages/index/plugin/calendar/calendar.wxss */
</style>
