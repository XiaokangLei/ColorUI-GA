<template>
    <view style="height: 100%">
        <!-- pages/index/basics/layout/layout.wxml -->
        <cu-custom bgColor="bg-gradual-blue" :isBack="true">
            <view slot="content">布局</view>
        </cu-custom>

        <view class="padding-top-xxl" :style="'top:' + CustomBar + 'px'">
            <scroll-view scroll-x class="bg-white nav text-center fixed" :style="'top:' + CustomBar + 'px'">
                <view :class="'cu-item ' + (index == TabCur ? 'text-blue cur' : '') + ' text-bold'" @tap="tabSelect" :data-id="index" v-for="(item, index) in tabNav" :key="index">
                    {{ tabNav[index] }}
                </view>
            </scroll-view>
            <!-- <swiper indicator-dots="{{false}}" bindchange="handleSwiper" current="{{TabCur}}">
    <block wx:for="{{tabNav}}" wx:key="index">
      <swiper-item style="overflow: scroll;">
        <block wx:if="{{TabCur==0}}">
          <view class="margin-sm radius-lg bg-white margin-top-xl">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>内外边距
            </view>
            <view class="padding-lr padding-tb-sm">
              <view class="">内外边距{size}的尺寸有 xs、sm、默认、lg、xl、xxl</view>
              <view class="padding-top-sm">对应大小分别为：10rpx、20rpx、30rpx、40rpx、50rpx、60rpx</view>
            </view>
            <view class="margin-lr-sm">
              <view class="flex flex-wrap padding text-center">
                <view class="basis-df padding-bottom-xs">外边距</view>
                <view class="basis-df padding-bottom-xs">内边距</view>
                <view class="basis-df">.margin-{size}</view>
                <view class="basis-df">.padding-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">水平方向外边距</view>
                <view class="basis-df padding-bottom-xs">水平方向内边距</view>
                <view class="basis-df">.margin-lr-{size}</view>
                <view class="basis-df">.padding-lr-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">垂直方向外边距</view>
                <view class="basis-df padding-bottom-xs">垂直方向内边距</view>
                <view class="basis-df">.margin-tb-{size}</view>
                <view class="basis-df">.padding-tb-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">上外边距</view>
                <view class="basis-df padding-bottom-xs">上内边距</view>
                <view class="basis-df">.margin-top-{size}</view>
                <view class="basis-df">.padding-top-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">右外边距</view>
                <view class="basis-df padding-bottom-xs">右内边距</view>
                <view class="basis-df">.margin-right-{size}</view>
                <view class="basis-df">.padding-right-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">下外边距</view>
                <view class="basis-df padding-bottom-xs">下内边距</view>
                <view class="basis-df">margin-bottom-{size}</view>
                <view class="basis-df">.padding-bottom-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">左外边距</view>
                <view class="basis-df padding-bottom-xs">左内边距</view>
                <view class="basis-df">.margin-left-{size}</view>
                <view class="basis-df">.padding-left-{size}</view>
              </view>
            </view>
          </view>

          <view class="margin-sm radius-lg bg-white margin-top">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>圆角样式
            </view>
            <view class="padding-lr padding-tb-sm">
              <view class="">圆角{size}的尺寸有 默认、df、lg、xl</view>
              <view class="padding-top-sm">对应大小分别为：8rpx、16rpx、24rpx、32rpx</view>
            </view>
            <view class="bg-white margin-lr-sm radius-lg-bottom">
              <view class="flex flex-wrap padding text-center">
                <view class="basis-df padding-bottom-xs">四角</view>
                <view class="basis-df">.radius-{size}</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">顶部两角</view>
                <view class="basis-df">.radius-{size}-top</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">底部两角</view>
                <view class="basis-df">.radius-{size}-bottom</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">左上右下两角</view>
                <view class="basis-df">.radius-{size}-top-left</view>
              </view>
              <view class="flex flex-wrap padding solid-top text-center">
                <view class="basis-df padding-bottom-xs">右上坐下两角</view>
                <view class="basis-df">.radius-{size}-top-right</view>
              </view>
            </view>
          </view>

        </block>

        <block wx:if="{{TabCur==1}}">
          <view class="margin-sm radius-lg bg-white margin-top-xl">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text> 固定尺寸
            </view>
            <view class="padding-xs radius-lg">
              <view class="flex flex-wrap">
                <view class="basis-xs bg-blue light margin-xs padding-sm radius">xs(20%)</view>
                <view class="basis-df"></view>
                <view class="basis-sm bg-blue light margin-xs padding-sm radius">sm(40%)</view>
                <view class="basis-df"></view>
                <view class="basis-df bg-blue light margin-xs padding-sm radius">sub(50%)</view>
                <view class="basis-lg bg-blue light margin-xs padding-sm radius">lg(60%)</view>
                <view class="basis-xl bg-blue light margin-xs padding-sm radius">xl(80%)</view>
                <view class="basis-xxl bg-blue light margin-xs padding-sm radius">xxl(100%)</view>
              </view>
            </view>
          </view>
          <view class="margin-sm radius-lg bg-white margin-top-sm">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>比例布局
            </view>
            <view class="padding-sm">
              <view class="flex">
                <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
                <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
              </view>
              <view class="flex">
                <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
                <view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
              </view>
              <view class="flex">
                <view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
                <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
              </view>
              <view class="flex">
                <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/6</view>
                <view class="flex-twice bg-blue light padding-sm margin-xs radius">1/3</view>
                <view class="flex-treble bg-blue light padding-sm margin-xs radius">1/2</view>
              </view>
              <view class="flex">
                <view class="flex-treble bg-blue light padding-sm margin-xs radius">3/4</view>
                <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/4</view>
              </view>
            </view>
          </view>
          <view class="margin-sm radius-lg bg-white margin-top-sm">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>水平对齐(justify)
            </view>
            <view class="flex solid-bottom padding-xs justify-start">
              <view class="bg-blue light padding-sm margin-xs radius">start</view>
              <view class="bg-blue light padding-sm margin-xs radius">start</view>
            </view>
            <view class="flex solid-bottom padding-xs justify-end">
              <view class="bg-blue light padding-sm margin-xs radius">end</view>
              <view class="bg-blue light padding-sm margin-xs radius">end</view>
            </view>
            <view class="flex solid-bottom padding-xs justify-center">
              <view class="bg-blue light padding-sm margin-xs radius">center</view>
              <view class="bg-blue light padding-sm margin-xs radius">center</view>
            </view>
            <view class="flex solid-bottom padding-xs justify-between">
              <view class="bg-blue light padding-sm margin-xs radius">between</view>
              <view class="bg-blue light padding-sm margin-xs radius">between</view>
            </view>
            <view class="flex solid-bottom padding-xs justify-around">
              <view class="bg-blue light padding-sm margin-xs radius">around</view>
              <view class="bg-blue light padding-sm margin-xs radius">around</view>
            </view>
          </view>
          <view class="margin-sm radius-lg bg-white margin-top-sm">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>垂直对齐(align)
            </view>
            <view class="flex solid-bottom padding-sm align-start">
              <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
              <view class="bg-blue light padding-sm margin-xs radius">start</view>
            </view>
            <view class="flex solid-bottom padding-sm align-end">
              <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
              <view class="bg-blue light padding-sm margin-xs radius">end</view>
            </view>
            <view class="flex solid-bottom padding-sm align-center">
              <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
              <view class="bg-blue light padding-sm margin-xs radius">center</view>
            </view>
          </view>
        </block>

        <block wx:if="{{TabCur==2}}">
          <view class="margin-sm radius-lg bg-white margin-top-xl">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>等分列
            </view>
            <view class="padding-sm">
              <view class="grid col-{{index+1}} margin-bottom-sm text-center" wx:for="{{5}}" wx:key="item">
                <view class="{{index%2==0?'bg-green light':'bg-blue light'}} padding-sm solid-bottom text-lg" wx:for="{{(index+1)*2}}" wx:key="item">{{index+1}}</view>
              </view>
            </view>
          </view>
          <view class="margin-sm radius-lg bg-white margin-top">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>等高
            </view>
            <view class="padding-sm">
              <view class="grid col-4 grid-square">
                <view class="bg-img" wx:for="{{4}}" wx:key="item" style="background-image:url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1);"></view>
              </view>
            </view>
          </view>
        </block>

        <block wx:if="{{TabCur==3}}">
          <view class="margin-sm radius-lg bg-white margin-top-xl">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>简介
            </view>
            <view class="padding-lr padding-tb-sm">
              <view>基本代码：display: table; 以表格的方式进行显示。</view>
              <view class="padding-top-sm">在宽度上会根据内容多少或设置来表现；在高度上，对齐最大的一个高度，因为在表格里面的一行，最大的一个高度会把这一行的高度给撑开。</view>
            </view>
          </view>

          <view class="margin-sm radius-lg bg-white margin-top">
            <view class="padding-sm text-lg">
              <text class="cuIcon-title text-blue"></text>示例
            </view>
            <view class="padding-xs">
              <view class="cf padding-sm">
                <view class="bg-blue light radius fl padding-sm">ColorUI fl</view>
                <view class="bg-blue light radius fr padding-sm">ColorUI fr</view>
              </view>
              <view class="cf padding-sm">
                <view class="bg-blue light radius fl padding-sm">ColorUI GA组件库</view>
                <view class="bg-blue light radius fr padding-sm">ColorUI GA</view>
              </view>
              <view class="cf padding-sm">
                <view class="bg-blue light radius padding-sm">ColorUI GA组件库，轻量、可靠的css组件库，代码全部开源，期待您的反馈~</view>
              </view>
            </view>
          </view>
        </block>
      </swiper-item>
    </block>
  </swiper> -->
            <block v-if="TabCur == 0">
                <view class="margin-sm radius-lg bg-white margin-top-xl">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        内外边距
                    </view>
                    <view class="padding-lr padding-tb-sm">
                        <view class="">内外边距{size}的尺寸有 xs、sm、默认、lg、xl、xxl</view>
                        <view class="padding-top-sm">对应大小分别为：10rpx、20rpx、30rpx、40rpx、50rpx、60rpx</view>
                    </view>
                    <view class="margin-lr-sm">
                        <view class="flex flex-wrap padding text-center">
                            <view class="basis-df padding-bottom-xs">外边距</view>
                            <view class="basis-df padding-bottom-xs">内边距</view>
                            <view class="basis-df">.margin-{size}</view>
                            <view class="basis-df">.padding-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">水平方向外边距</view>
                            <view class="basis-df padding-bottom-xs">水平方向内边距</view>
                            <view class="basis-df">.margin-lr-{size}</view>
                            <view class="basis-df">.padding-lr-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">垂直方向外边距</view>
                            <view class="basis-df padding-bottom-xs">垂直方向内边距</view>
                            <view class="basis-df">.margin-tb-{size}</view>
                            <view class="basis-df">.padding-tb-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">上外边距</view>
                            <view class="basis-df padding-bottom-xs">上内边距</view>
                            <view class="basis-df">.margin-top-{size}</view>
                            <view class="basis-df">.padding-top-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">右外边距</view>
                            <view class="basis-df padding-bottom-xs">右内边距</view>
                            <view class="basis-df">.margin-right-{size}</view>
                            <view class="basis-df">.padding-right-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">下外边距</view>
                            <view class="basis-df padding-bottom-xs">下内边距</view>
                            <view class="basis-df">margin-bottom-{size}</view>
                            <view class="basis-df">.padding-bottom-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">左外边距</view>
                            <view class="basis-df padding-bottom-xs">左内边距</view>
                            <view class="basis-df">.margin-left-{size}</view>
                            <view class="basis-df">.padding-left-{size}</view>
                        </view>
                    </view>
                </view>

                <view class="margin-sm radius-lg bg-white margin-top">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        圆角样式
                    </view>
                    <view class="padding-lr padding-tb-sm">
                        <view class="">圆角{size}的尺寸有 默认、df、lg、xl</view>
                        <view class="padding-top-sm">对应大小分别为：8rpx、16rpx、24rpx、32rpx</view>
                    </view>
                    <view class="bg-white margin-lr-sm radius-lg-bottom">
                        <view class="flex flex-wrap padding text-center">
                            <view class="basis-df padding-bottom-xs">四角</view>
                            <view class="basis-df">.radius-{size}</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">顶部两角</view>
                            <view class="basis-df">.radius-{size}-top</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">底部两角</view>
                            <view class="basis-df">.radius-{size}-bottom</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">左上右下两角</view>
                            <view class="basis-df">.radius-{size}-top-left</view>
                        </view>
                        <view class="flex flex-wrap padding solid-top text-center">
                            <view class="basis-df padding-bottom-xs">右上坐下两角</view>
                            <view class="basis-df">.radius-{size}-top-right</view>
                        </view>
                    </view>
                </view>
            </block>

            <block v-if="TabCur == 1">
                <view class="margin-sm radius-lg bg-white margin-top-xl">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        固定尺寸
                    </view>
                    <view class="padding-xs radius-lg">
                        <view class="flex flex-wrap">
                            <view class="basis-xs bg-blue light margin-xs padding-sm radius">xs(20%)</view>
                            <view class="basis-df"></view>
                            <view class="basis-sm bg-blue light margin-xs padding-sm radius">sm(40%)</view>
                            <view class="basis-df"></view>
                            <view class="basis-df bg-blue light margin-xs padding-sm radius">sub(50%)</view>
                            <view class="basis-lg bg-blue light margin-xs padding-sm radius">lg(60%)</view>
                            <view class="basis-xl bg-blue light margin-xs padding-sm radius">xl(80%)</view>
                            <view class="basis-xxl bg-blue light margin-xs padding-sm radius">xxl(100%)</view>
                        </view>
                    </view>
                </view>
                <view class="margin-sm radius-lg bg-white margin-top-sm">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        比例布局
                    </view>
                    <view class="padding-sm">
                        <view class="flex">
                            <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
                            <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
                        </view>
                        <view class="flex">
                            <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
                            <view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
                        </view>
                        <view class="flex">
                            <view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
                            <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
                        </view>
                        <view class="flex">
                            <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/6</view>
                            <view class="flex-twice bg-blue light padding-sm margin-xs radius">1/3</view>
                            <view class="flex-treble bg-blue light padding-sm margin-xs radius">1/2</view>
                        </view>
                        <view class="flex">
                            <view class="flex-treble bg-blue light padding-sm margin-xs radius">3/4</view>
                            <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/4</view>
                        </view>
                    </view>
                </view>
                <view class="margin-sm radius-lg bg-white margin-top-sm">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        水平对齐(justify)
                    </view>
                    <view class="flex solid-bottom padding-xs justify-start">
                        <view class="bg-blue light padding-sm margin-xs radius">start</view>
                        <view class="bg-blue light padding-sm margin-xs radius">start</view>
                    </view>
                    <view class="flex solid-bottom padding-xs justify-end">
                        <view class="bg-blue light padding-sm margin-xs radius">end</view>
                        <view class="bg-blue light padding-sm margin-xs radius">end</view>
                    </view>
                    <view class="flex solid-bottom padding-xs justify-center">
                        <view class="bg-blue light padding-sm margin-xs radius">center</view>
                        <view class="bg-blue light padding-sm margin-xs radius">center</view>
                    </view>
                    <view class="flex solid-bottom padding-xs justify-between">
                        <view class="bg-blue light padding-sm margin-xs radius">between</view>
                        <view class="bg-blue light padding-sm margin-xs radius">between</view>
                    </view>
                    <view class="flex solid-bottom padding-xs justify-around">
                        <view class="bg-blue light padding-sm margin-xs radius">around</view>
                        <view class="bg-blue light padding-sm margin-xs radius">around</view>
                    </view>
                </view>
                <view class="margin-sm radius-lg bg-white margin-top-sm">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        垂直对齐(align)
                    </view>
                    <view class="flex solid-bottom padding-sm align-start">
                        <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
                        <view class="bg-blue light padding-sm margin-xs radius">start</view>
                    </view>
                    <view class="flex solid-bottom padding-sm align-end">
                        <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
                        <view class="bg-blue light padding-sm margin-xs radius">end</view>
                    </view>
                    <view class="flex solid-bottom padding-sm align-center">
                        <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
                        <view class="bg-blue light padding-sm margin-xs radius">center</view>
                    </view>
                </view>
            </block>

            <block v-if="TabCur == 2">
                <view class="margin-sm radius-lg bg-white margin-top-xl">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        等分列
                    </view>
                    <view class="padding-sm">
                        <view :class="'grid col-' + (index + 1) + ' margin-bottom-sm text-center'" v-for="(item, index) in 5" :key="index">
                            <view
                                :class="(index % 2 == 0 ? 'bg-green light' : 'bg-blue light') + ' padding-sm solid-bottom text-lg'"
                                v-for="(item, index1) in (index + 1) * 2"
                                :key="index1"
                            >
                                {{ index + 1 }}
                            </view>
                        </view>
                    </view>
                </view>
                <view class="margin-sm radius-lg bg-white margin-top">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        等高
                    </view>
                    <view class="padding-sm">
                        <view class="grid col-4 grid-square">
                            <view
                                class="bg-img"
                                style="background-image: url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"
                                v-for="(item, index) in 4"
                                :key="index"
                            ></view>
                        </view>
                    </view>
                </view>
            </block>

            <block v-if="TabCur == 3">
                <view class="margin-sm radius-lg bg-white margin-top-xl">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        简介
                    </view>
                    <view class="padding-lr padding-tb-sm">
                        <view>基本代码：display: table; 以表格的方式进行显示。</view>
                        <view class="padding-top-sm">
                            在宽度上会根据内容多少或设置来表现；在高度上，对齐最大的一个高度，因为在表格里面的一行，最大的一个高度会把这一行的高度给撑开。
                        </view>
                    </view>
                </view>

                <view class="margin-sm radius-lg bg-white margin-top">
                    <view class="padding-sm text-lg">
                        <text class="cuIcon-title text-blue"></text>
                        示例
                    </view>
                    <view class="padding-xs">
                        <view class="cf padding-sm">
                            <view class="bg-blue light radius fl padding-sm">ColorUI fl</view>
                            <view class="bg-blue light radius fr padding-sm">ColorUI fr</view>
                        </view>
                        <view class="cf padding-sm">
                            <view class="bg-blue light radius fl padding-sm">ColorUI GA组件库</view>
                            <view class="bg-blue light radius fr padding-sm">ColorUI GA</view>
                        </view>
                        <view class="cf padding-sm">
                            <view class="bg-blue light radius padding-sm">ColorUI GA组件库，轻量、可靠的css组件库，代码全部开源，期待您的反馈~</view>
                        </view>
                    </view>
                </view>
            </block>
        </view>

        <view class="margin-top">
            <copyright compName="copyright"></copyright>
            <ad unit-id="adunit-51e2e8351a3c07a2"></ad>
        </view>
    </view>
</template>

<script>
import copyright from '@/pages/template/common/copyright.vue';
// pages/index/basics/layout/layout.js
const app = getApp();
export default {
    components: {
        copyright
    },
    data() {
        return {
            CustomBar: app.globalData.CustomBar,
            TabCur: 0,
            tabNav: ['基础布局', 'Flex布局', 'Grid布局', 'float布局'],
            scrollLeft: ''
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
        /**
         * 顶部Tab
         */
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60
            });
        },

        handleSwiper(e) {
            console.log(e);
            let { current, source } = e.detail;
            if (source === 'autoplay' || source === 'touch') {
                const TabCur = current;
                this.setData({
                    TabCur
                });
            }
        }
    }
};
</script>
<style>
/* pages/index/basics/layout/layout.wxss */
</style>
