<script lang="ts" setup>
import pic01 from '@/assets/images/works/pic-01.png'
import pic02 from '@/assets/images/works/pic-02.png'
import pic03 from '@/assets/images/works/pic-03.png'
import pic04 from '@/assets/images/works/pic-04.png'
import pic05 from '@/assets/images/works/pic-05.png'
import pic06 from '@/assets/images/works/pic-06.png'
import pic07 from '@/assets/images/works/pic-07.png'
import pic08 from '@/assets/images/works/pic-08.png'
import pic09 from '@/assets/images/works/pic-09.png'

const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

const active = ref(['works'])
const list = ref([
  {
    poster: pic01,
    videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
  },
  {
    poster: pic02,
  },
  {
    poster: pic03,
  },
  {
    poster: pic04,
  },
  {
    poster: pic05,
  },
  {
    poster: pic06,
  },
  {
    poster: pic07,
  },
  {
    poster: pic08,
  },
  {
    poster: pic09,
  },
])
const currentMenuData = computed(() => {
  return headerList.value?.find(v => v.title === '精彩展示')
})

// 监听
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
  console.log('e', e)
})

onMounted(() => {
  console.log('route2', route)
})

const handleGo = (index: number) => {
  router?.push(`/works/${index + 1}`)
}
</script>

<template>
  <div class="works">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div class="works-body mt-50px">
      <div class="row">
        <div class="flex">
          <div class="w-200px">
            <sidebar-collapse :title="currentMenuData?.title" :data="currentMenuData?.children" />
          </div>
          <div class="flex-1 pl-40px">
            <el-row :gutter="60">
              <el-col v-for="(item, index) in list" :key="index" class="mb-60px" :span="8">
                <image-video-card :poster="item.poster" :video-url="item.videoUrl" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works {
  &-body {
    @apply pb-100px;

  }
}
</style>
