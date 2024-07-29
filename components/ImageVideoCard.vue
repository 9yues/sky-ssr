<script lang="ts" setup>
import { getFileExtension } from '@/utils'
interface Props {
  poster?: string
  videoUrl?: string
}
const props = withDefaults(defineProps<Props>(), {
  poster: '',
  videoUrl: '',
})

const _getFileExtension = computed(() => props.poster && getFileExtension(props.poster?.toString()))

const videoFileExtensions = ref(['avi', 'mp4', 'mov', 'wmv', 'flv', 'webm', 'mpeg'])

const isVideoVisble = ref(false)

const isVideoFileExtension = computed(() => _getFileExtension.value && videoFileExtensions.value?.includes(_getFileExtension.value))
</script>

<template>
  <div ref="cardRef" class="card">
    <div v-if="props.videoUrl" key="video" class="card-header relative" @click="isVideoVisble = true">
      <el-image :src="props.poster" fit="cover" />
      <img class="card-header__play absolute right-10px top-10px w-30px" src="@/assets/images/works/icon_video.png">
    </div>
    <div v-else key="image" class="card-header">
      <el-image :src="props.poster" fit="cover" preview-teleported :preview-src-list="[props.poster]" />
    </div>
  </div>
  <div v-if="isVideoVisble" class="card-video fixed top-0 left-0 w-100% h-100% z-9">
    <div class="card-video__content relative w-500px h-500px absolute top-50% left-50% translate-y--50% translate-x--50%">
      <img class="absolute right--40px top--40px w-30px cursor-pointer hover:opacity-80" src="@/assets/images/works/icon_close.png" @click="isVideoVisble = false">
      <video class="w-500px" :src="props.videoUrl" controls />
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
      @apply w-100% h-448px border-rd-10px block;
      img {
        @apply w-100% h-100% block;
      }
    }
  }
  &-video {
    background-color: rgba(0, 0, 0, 0.5);
  }

}
</style>
