<script lang="ts" setup>
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

const list = ref([
  {
    title: '王明明王明明王明明王明明王明明王明明王明明王明明王明明王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
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
const currentMenuData = computed(() => {
  return headerList.value?.find(v => v.title === '专家团队')
})

onMounted(() => {

})

const handleGo = (index: number) => {
  router?.push(`/specialist/${index + 1}`)
}
</script>

<template>
  <div class="specialist">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div class="specialist-body mt-50px">
      <div class="row">
        <div class="flex">
          <div class="w-200px">
            <sidebar-collapse :title="currentMenuData?.title" :data="currentMenuData?.children" />
          </div>
          <div class="flex-1 pl-40px">
            <el-row :gutter="60">
              <el-col v-for="(item, index) in list" :key="index" class="mb-60px" :span="8">
                <image-text-card :title="item.title" :desc="item.desc" :poster="item.poster" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.specialist {
  &-body {
    @apply pb-100px;

  }
}
</style>
