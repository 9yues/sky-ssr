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
const sidebarList = computed(() => headerList.find(v => v.title === '精彩展示').children)
const currentType = computed(() => {
  // if (process.client)
  //   debugger
  // return +route.parmas.value?.all[0]
  return 1
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
            <el-collapse v-model="active">
              <el-collapse-item title="精彩展示" name="works">
                <ul>
                  <li v-for="(item, index) in sidebarList" :key="item.href" :class="{ on: index + 1 === +route?.params?.works }" @click="handleGo(index)">
                    {{ item.title }}
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
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
    :deep(.el-collapse) {
      @apply border-rd-10px border-none;
      .el-collapse-item__wrap {
        @apply border-none;
      }
      .el-collapse-item {
        @apply border-rd-10px;
        &__header {
          @apply pl-20px text-[16px] font-bold;
          color: #959DB6;
          letter-spacing: 0;
          border-radius: 10px 10px 0 0;
          &.is-active {
            border-bottom: 1px solid #eee;
          }
        }
        &__wrap {
          border-radius: 0 0 10px 10px;
        }
      }

      ul {
        @apply pt-20px pb-20px;
        li {
          @apply pt-none cursor-pointer mb-12px pl-20px;
          &:hover,&.on {
            @apply text-[var(--sky-primary)];
            border-right: 2px solid var(--sky-primary);
          }
        }
      }

    }
  }
}
</style>
