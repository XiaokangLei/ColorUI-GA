<template>
    <view style="height: 100%">
        <template v-if="compName === 'nodata'">
            <view class="nodata">
                <view class="icon"></view>
                <view class="txt">
                    {{ nodata_str || '— — 敬请期待 — —' }}
                </view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    props: ['data', 'compName'],
    computed: {
        nodata_str() {
            return this.data.nodata_str;
        }
    }
};
</script>
<style></style>
