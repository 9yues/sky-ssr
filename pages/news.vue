<script lang="ts" setup>
import { useAppStore } from '@/stores/index'
const config = useConfig()
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const serverRoute = useRoute()
const appStore = useAppStore()
const { headerList } = useHeader()


const newTab = ref(0)
const list = ref([
  {
    title: '王明明',
    desc: '王明明王明明王明明王明明王明明王明明王明明王明明王明明某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
])


const res = await $fetch(`${config.baseURL}open/news/classify`)
console.log('分类', res)

console.log(res, 'res')
const classifyIds1 = computed(() => res?.result?.find(v => v.name === '赛事公告')?.children?.map(v => v.id))
const classifyIds2 = computed(() => res?.result?.find(v => v.name === '赛事动态')?.children?.map(v => v.id))
console.log('赛事公告', classifyIds1)
console.log('赛事动态,',classifyIds2)

const classifyIdsAll = computed(() => [...classifyIds1.value,...classifyIds2.value ])
const getNewsApis: any[] = []
console.log('classifyIdsAll', classifyIdsAll)
for (let i = 0; i < classifyIdsAll.value?.length; i++) {
  getNewsApis.push($fetch(`${config.baseURL}open/news`, {
    params: {
      classifyId: classifyIdsAll.value[i],
      page: 1,
      size: 10
    }
  }))
}

const { data: newList } = await useAsyncData('getNewsApi', async () => await Promise.all(getNewsApis), {transform: (res) => res.map(v => v.result) })
console.log('新闻', newList)



// const { data: classifyList } = await useAsyncData('getNewsClassifyApi', () => getNewsClassifyApi, { server: false })
// console.log('分类', classifyList)

// const classifyIds1 = computed(() => classifyList.value?.result?.find(v => v.name === '赛事公告')?.children?.map(v => v.id))
// const classifyIds2 = computed(() => classifyList.value?.result?.find(v => v.name === '赛事动态')?.children?.map(v => v.id))
// console.log('赛事公告', classifyIds1)
// console.log('赛事动态,',classifyIds2)

// const classifyIdsAll = computed(() => [...classifyIds1.value,...classifyIds2.value ])
// const getNewsApis: any[] = []
// console.log('classifyIdsAll', classifyIdsAll)
// for (let i = 0; i < classifyIdsAll.value?.length; i++) {
//   getNewsApis.push($fetch(`${config.baseURL}open/news`, {
//     params: {
//       classifyId: classifyIdsAll.value[i],
//       page: 1,
//       size: 10
//     }
//   }))
// }

// const { data: newList } = await useAsyncData('getNewsApi', async () => await Promise.all(getNewsApis), { server: false })
// console.log('新闻', newList)




const handleTabChange = (tab: number) => {
  newTab.value = tab
}
</script>

<template>
  <div class="news">
    <!-- <pre>{{ newList }}</pre> -->
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div class="news-body mt-50px">
      <div class="row h-450px">
        <el-row :gutter="30" class="h-100%">
          <el-col :span="12">
            <el-carousel trigger="click" height="450px" class="border-rd-10px relative">
              <el-carousel-item v-for="item in 4" :key="item" class="border-rd-10px">
                <img class="w-100% h-450px object-cover block border-rd-10px" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">
                <div class="news-body__text absolute bottom-0 left-0 w-100% pt-20px pb-20px pl-12px pr-12px text-[#fff] text-hidden">
                  2024中国航空科普教2024中国航空科普教2024中国航空科普教2024中国航空科普教2024中国航空科普教
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="12" class="h-100% flex flex-col">
            <div class="flex items-center justify-center h-58px">
              <div class="news-body__tab flex-1 text-[#959DB6] text-[18px] bg-[#fff]" :class="{ on: newTab === 0 }" @click="handleTabChange(0)">
                赛事通知
              </div>
              <div class="news-body__tab flex-1 text-[#959DB6] text-[18px] bg-[#fff]" :class="{ on: newTab === 1 }" @click="handleTabChange(1)">
                赛项通知
              </div>
            </div>
            <div class="mt-10px flex-1 news-body__item">
              <el-card>
                <ul v-if="newTab === 0">
                  <li v-for="item in newList[0].data" :key="item.id" class=" flex items-center">
                    <div class="flex-1 text-hidden">
                      {{ item.title }}
                    </div>
                    <div class="text-[#959DB6]">
                      {{ item.createTime }}
                    </div>
                  </li>
                </ul>
                <ul v-if="newTab === 1">
                  <li v-for="item in newList[1  ].data" :key="item.id" class=" flex items-center">
                    <div class="flex-1 text-hidden">
                      {{ item.title }}
                    </div>
                    <div class="text-[#959DB6]">
                      {{ item.createTime }}
                    </div>
                  </li>
                </ul>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="news-group row">
      <div class="news-group__title">
        <b>媒体报道</b>
        <span class="flex items-center">更多 <img class="w-12px ml-10px" src="@/assets/images/icon-arrow.png" alt=""></span>
      </div>
      <el-row :gutter="30">
        <el-col v-for="(item, index) in newList[2].data" :key="item.id" class="mb-30px" :span="12">
          <image-text-card direction="horizontal" :exceed-line="6" default-height="210px" :title="item.title" :desc="item.content" :poster="item.cover" />
        </el-col>
      </el-row>
    </div>

    <div class="news-group row">
      <div class="news-group__title">
        <b>赛区新闻</b>
        <span class="flex items-center">更多 <img class="w-12px ml-10px" src="@/assets/images/icon-arrow.png" alt=""></span>
      </div>
      <el-row :gutter="30">
        <el-col v-for="(item, index) in newList[3].data" :key="item.id" class="mb-30px" :span="8">
          <image-text-card :title="item.title" :desc="item.content" :poster="item.cover" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  @apply pb-100px;
  &-body {
    @apply pb-100px;
    &:deep(.el-card) {
        @apply h-100%;
        border-radius: 0 0 10px 10px;
        .el-card__body {
          padding: 0 12px;
        }
      }
    :deep(.el-carousel) {
      .el-carousel__button {
        width: 8px !important;
        height: 8px !important;
        opacity: 0.5 !important;
        border-radius: 50%;
        background-color: #fff !important;
      }
      .el-carousel__indicators {
        width: auto !important;
        left: auto !important;
        right: 20px;
        bottom: 10px !important;
        transform: translateX(0) !important;
      }
      .is-active {
        .el-carousel__button {
          opacity: 1 !important;
          background-color: #fff !important;
        }
      }
    }
    &__text {
      @apply pr-120px;

      backdrop-filter:blur(2px);
      background-image: linear-gradient(180deg, #231d4a3f 0%, #1334a148 37%, #395ac863 72%, #4b78ff62 100%, #47a9ff60 100%, #47a9ff5e 100%);
    }
    &__tab {
      @apply relative h-58px text-center cursor-pointer;
      line-height: 58px;
      transition: all .3s;

      &.on, &:hover {
        @apply bg-[var(--sky-primary)] text-[#fff];
        &::after {
        @apply opacity-100;
        }
      }
      &::after {
        transition: all .3s;
        content: '';
        @apply absolute left-50% bottom--10px translate-x--50% w-0 h-0 opacity-0;
        border-top: 5px solid  var(--sky-primary);
        border-right: 5px solid  transparent;
        border-bottom: 5px solid  transparent;
        border-left: 5px solid  transparent;
      }
      &:nth-child(1) {
        border-radius: 10px 0 0 0;
      }
      &:nth-child(2) {
        border-radius: 0 10px 0 0;
      }
    }
    &__item {
      height: calc(100% - 68px);
      li {
        @apply h-58px text-[var(--sky-title)] cursor-pointer hover:opacity-80;
        border-bottom: 1px solid var(--sky-border);
        line-height: 58px;
      }
    }
  }
  &-group {
    @apply pb-80px;
    &__title {
      @apply mb-40px relative flex items-center justify-between;
      &::after {
        content: '';
        @apply absolute left-0 top-12% w-3px h-90% bg-[var(--sky-primary)] border-rd-4px;
      }
      b {
        @apply text-[var(--sky-title)] text-[20px] pl-20px;
      }
      span {
        @apply text-[var(--sky-sub-title)] text-[14px] cursor-pointer hover:opacity-80;
      }
    }
  }
}
</style>
