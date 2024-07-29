<script lang="ts" setup>
interface Props {
  poster?: string
  title?: string
  desc?: string
}
const props = withDefaults(defineProps<Props>(), {
  poster: '',
  title: '',
  desc: '',
})
</script>

<template>
  <div ref="cardRef" class="card">
    <div class="card-header">
      <el-image :src="props.poster" fit="cover" />
    </div>
    <div class="card-body p-12px">
      {{ props.title }}
    </div>
    <div class="card-footer p-12px pt-0 text-[12px] text-[#959DB6]">
      {{ props.desc }}
    </div>
  </div>
</template>

<style lang='scss' scoped>
.card {
    @apply cursor-pointer;
    background: rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    transition: all .3s;
    &:hover {
      box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
      transform: translateY(-10px);
    }
  &-header {
    :deep(.el-image) {
      border-radius: 10px 10px 0 0;
      @apply w-100% h-248px;
      img {
        @apply w-100% h-100% block;
        border-radius: 10px 10px 0 0;
      }
    }
  }
  &-footer {
    line-height: 24px;
  }
}
</style>
