<script lang="ts" setup>
const handleGo = () => {
  window.open('https://beian.miit.gov.cn/')
}
</script>

<template>
  <div class="sky-footer">
    <div class="row" @click="handleGo">
      皖ICP备2024048988号
    </div>
    <div class="row">
      合肥元一宇宙软件技术有限公司
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sky-footer {
    // background: url(@/assets/images/header_bg1.jpg);
    @apply bg-[var(--sky-primary2)] flex flex-col justify-center flex-items-center h-100px;
    color: #fff;
    .row {
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
}
</style>
