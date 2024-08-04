<script lang="ts" setup>
import { genID } from '@/utils'
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

const page = ref(1)
const pageSize = ref(10)
const total = ref(100)

const list = ref([
  {
    title: '王明明',
    time: '2024-02-02',
    desc: '王明明王明明王明明王明明王明明王明明王明明王明明王明明某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    time: '2024-02-02',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    time: '2024-02-02',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    time: '2024-02-02',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
])

const parentId = computed(() => route?.params?.newList)

const childrenId = computed(() => route?.query?.id)

const currentMenuData = computed(() => {
  return headerList.value?.find(v => v.title === '新闻中心')
})

const currentClassifyData = computed(() => currentMenuData.value?.children?.find(v => v.id === parentId.value))

const currentData = computed(() => {
  return {
    ...currentClassifyData.value,
    children: parentId.value === '1'
      ? [
          {
            id: '123',
            href: '/newList/1/?id=123',
            title: '赛事通知',
          },
          {
            id: '456',
            href: '/newList/1/?id=456',
            title: '赛项通知',
          },
        ]
      : [
          {
            id: '123',
            href: '/newList/2/?id=123',
            title: '媒体报道',
          },
          {
            id: '456',
            href: '/newList/2/?id=456',
            title: '赛区新闻',
          },
        ],
  }
})

// 监听
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
  console.log('e', e)
})

onMounted(() => {

})

const handleSizeChange = (val: number) => {
  pageSize.value = val
}
const handleCurrentChange = (val: number) => {
  page.value = val
}

const handleGo = (index: number) => {
  router?.push(`/newList/${index + 1}`)
}

const handleGoDetail = () => {
  location.href = `${location.href}?id=${genID()}`
}
</script>

<template>
  <div class="new-list">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="@/assets/images/banner.png">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div v-if="parentId" class="new-list__tab flex items-center justify-center bg-[#fff]">
      <!-- <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }"> -->
      <div v-for="item in currentMenuData?.children" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }">
        <a class="h-50px block text-[#212529] text-[14px] font-bold" :href="item.href">{{ item.title }}</a>
      </div>
    </div>
    <div class="new-list__body mt-50px">
      <div class="row">
        <div class="flex">
          <div class="w-200px">
            <sidebar-collapse :title="currentData?.title" :data="currentData?.children" />
          </div>
          <div class="flex-1 pl-20px">
            <el-card v-if="!childrenId">
              <el-row>
                <el-col v-for="(item, index) in list" :key="index" class="mb-30px" :span="24">
                  <div class="horizontal-card" @click="handleGoDetail(item)">
                    <div class="horizontal-card__poster">
                      <el-image :src="item.poster" fit="cover" />
                    </div>
                    <div class="horizontal-card__group">
                      <b class="horizontal-card__title">{{ item.title }}</b>
                      <p class="horizontal-card__desc text-hidden-2 h-50px mt-12px">
                        {{ item.desc }}
                      </p>
                      <p class="horizontal-card__desc flex justify-between mt-20px">
                        <span class="text-[14px]">{{ item.time }}</span>
                        <span class="text-[14px] flex items-center">详细 <img class="w-12px ml-10px" src="@/assets/images/icon-arrow.png" alt=""></span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
            <rich-text v-else />

            <div v-if="!childrenId" class="mt-40px flex justify-end">
              <el-pagination
                v-model:current-page="page"
                v-model:page-size="pageSize"
                :page-sizes="[10, 20, 30, 40]"
                background
                layout="total, prev, pager, next"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-list {
  &__body {
    @apply pb-100px;
    .horizontal-card {
      @apply flex cursor-pointer hover:opacity-80;

      &__poster {
        @apply w-240px pr-20px;
        :deep(.el-image) {
          @apply w-100% h-100% block border-rd-10px;
          img {
            @apply w-100% h-100% block border-rd-10px;
          }
        }
      }
      &__group {
        @apply flex-1 box-border pt-12px;
        border-bottom: 1px solid var(--sky-border);
      }
      &__title {
        @apply text-[18px] text-[var(--sky-title)] font-bold;
      }
      &__desc {
        @apply text-[14px] text-[var(--sky-sub-title)];
        line-height: 24px;
      }

}
  }
  &__tab {
    border-bottom: 1px solid var(--sky-border);
    & > div {
      &.on,&:hover {
        a {
          @apply text-[var(--sky-primary)];
          border-bottom: 2px solid var(--sky-primary);
        }
      }
    }
    a {
      transition: all .3s;
      line-height: 50px;
      border-bottom: 2px solid transparent;

    }
  }
}
</style>
