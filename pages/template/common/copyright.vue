<template>
    <view style="height: 100%">
        <template v-if="compName === 'copyright'">
            <view class="text-center padding-tb">
                <view class="colorui-text">Copyright © 2023 ColorUI GA. All Rights Reserved.</view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    props: ['data', 'compName'],
    computed: {}
};
</script>
<style></style>
