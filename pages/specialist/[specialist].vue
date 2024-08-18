<script lang="ts" setup>
import { useAppStore } from '@/stores/index'
const config = useConfig()
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const serverRoute = useRoute()


const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()
const appStore = useAppStore()


const currentMenuData = computed(() => {
  return headerList.value?.find(v => v.title === '专家团队')
})


const id = computed(() => route?.params?.specialist)
const classifyId = computed(() => serverRoute?.params?.specialist)
const activeIndex = computed(() => {
  return currentMenuData.value?.children?.findIndex(v => v.id === id.value)
})


const { data, pending, error, refresh } = await useAsyncData(
  'specialist',
  () => $fetch(`${config.baseURL}open/specialist`, {
  params: {
    classifyId: classifyId.value,
    page: 1,
    size: 1000
  }
  }), { watch: [classifyId] })
console.log('专家列表', data)


onMounted(() => {

})

const handleGo = (item: any) => {
  console.log(item)
  router?.push(`/specialist/${item.id}`)
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
            <sidebar-collapse :activeIndex="activeIndex" :title="currentMenuData?.title" :data="currentMenuData?.children" @go="handleGo" />
          </div>
          <div class="flex-1 pl-40px" v-if="data?.result">
            <el-row :gutter="60">
              <el-col v-for="(item, index) in data?.result.data" :key="item.id" class="mb-60px" :span="8">
                <image-text-card :title="item.author" :desc="item.content" :poster="item.cover" />
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
