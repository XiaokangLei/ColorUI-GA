<script>
// app.js
export default {
    data() {
        return {};
    },
    onLaunch: function () {
        if (wx.cloud) {
            wx.cloud.init({
                traceUser: true
            });
        }
        uni.getSystemInfo({
            success: (e) => {
                this.globalData.StatusBar = e.statusBarHeight;
                let capsule = uni.getMenuButtonBoundingClientRect();
                if (capsule) {
                    this.globalData.Custom = capsule;
                    this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                } else {
                    this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        });
        this.globalData.updateManager();
    },
    globalData: {
        emoji: '🌈',

        ColorList: [
            {
                title: '嫣红',
                name: 'red',
                color: '#e54d42'
            },
            {
                title: '桔橙',
                name: 'orange',
                color: '#f37b1d'
            },
            {
                title: '明黄',
                name: 'yellow',
                color: '#fbbd08'
            },
            {
                title: '橄榄',
                name: 'olive',
                color: '#8dc63f'
            },
            {
                title: '森绿',
                name: 'green',
                color: '#39b54a'
            },
            {
                title: '天青',
                name: 'cyan',
                color: '#1cbbb4'
            },
            {
                title: '海蓝',
                name: 'blue',
                color: '#0081ff'
            },
            {
                title: '姹紫',
                name: 'purple',
                color: '#6739b6'
            },
            {
                title: '木槿',
                name: 'mauve',
                color: '#9c26b0'
            },
            {
                title: '桃粉',
                name: 'pink',
                color: '#e03997'
            },
            {
                title: '棕褐',
                name: 'brown',
                color: '#a5673f'
            },
            {
                title: '玄灰',
                name: 'grey',
                color: '#8799a3'
            },
            {
                title: '草灰',
                name: 'gray',
                color: '#aaaaaa'
            },
            {
                title: '墨黑',
                name: 'black',
                color: '#333333'
            },
            {
                title: '雅白',
                name: 'white',
                color: '#ffffff'
            }
        ],

        /**
         * 小程序主动更新
         */
        updateManager() {
            if (!uni.canIUse('getUpdateManager')) {
                return false;
            }
            const updateManager = uni.getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {});
            updateManager.onUpdateReady(function () {
                uni.showModal({
                    title: '有新版本',
                    content: '新版本已经准备好，即将重启',
                    showCancel: false,
                    success(res) {
                        if (res.confirm) {
                            updateManager.applyUpdate();
                        }
                    }
                });
            });
            updateManager.onUpdateFailed(function () {
                uni.showModal({
                    title: '更新提示',
                    content: '新版本下载失败',
                    showCancel: false
                });
            });
        }
    }
};
</script>
<style>
@import './colorui/main.css';
@import './colorui/icon.css';
@import './colorui/icon-new.css';
@import './colorui/animation.css';
@import './colorui/dark.css'; /**app.wxss**/

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
}

.bg-img-new {
    position: absolute;
    width: 100%;
}

.scrollPage {
    height: 100%;
    min-height: 90vh;
}

.nav-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 36rpx 0px;
    justify-content: space-between;
}

.nav-li {
    padding: 20rpx;
    border-radius: 20rpx;
    width: 46%;
    margin: 0 1% 32rpx;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
}

.nav-li::after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: inherit;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -10%;
    border-radius: 10rpx;
    opacity: 0.2;
    transform: scale(0.9, 0.9);
}

.nav-li.cur {
    color: #fff;
    background: rgb(94, 185, 94);
    box-shadow: 4rpx 4rpx 6rpx rgba(94, 185, 94, 0.4);
}

.nav-title {
    font-size: 30rpx;
    font-weight: 480;
}

.nav-title::first-letter {
    font-size: 40rpx;
    margin-right: 4rpx;
}

.nav-name {
    font-size: 28rpx;
    text-transform: Capitalize;
    margin-top: 20rpx;
    position: relative;
}

.nav-des {
    font-size: 24rpx;
    text-transform: Capitalize;
    margin-top: 30rpx;
    position: relative;
}

.nav-name::before {
    content: '';
    position: absolute;
    display: block;
    width: 40rpx;
    height: 6rpx;
    background: #fff;
    bottom: 0;
    left: 0;
    opacity: 0.5;
}

.nav-name::after {
    content: '';
    position: absolute;
    display: block;
    width: 90rpx;
    height: 1px;
    background: #fff;
    bottom: 0;
    right: 40rpx;
    opacity: 0.3;
}

.nav-name::first-letter {
    font-weight: bold;
    font-size: 36rpx;
    margin-right: 1px;
}

.nav-li text {
    position: absolute;
    right: 24rpx;
    top: 16rpx;
    font-size: 52rpx;
    width: 60rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
}

.text-light {
    font-weight: 300;
}

.nodata {
    font-size: 30rpx;
    line-height: 1.2;
    font-weight: normal;
    text-align: center;
    color: #999;
    margin-top: 200rpx;
    margin-bottom: 200rpx;
}

.nodata .icon {
    height: 240rpx;
    background: url('https://img01.yzcdn.cn/vant/empty-image-default.png') no-repeat center/210rpx auto;
}

.nodata .txt {
    padding-top: 60rpx;
}

.nav-lie {
    border-radius: 28rpx;
    width: 46%;
    margin: 0 1% 40rpx;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
}

.nav-lie::after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: inherit;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -10%;
    border-radius: 10rpx;
    opacity: 0.2;
    transform: scale(0.9, 0.9);
}

.image-bg-ui {
    min-height: 680rpx;
}
</style>
