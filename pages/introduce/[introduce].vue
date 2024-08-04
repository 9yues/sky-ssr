<script lang="ts" setup>
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

const parentId = computed(() => route?.params?.introduce)

const childrenId = computed(() => route?.query?.id)

const currentMenuData = computed(() => {
  return headerList.value?.find(v => v.title === '赛项介绍').children
})

const currentData = computed(() => {
  return currentMenuData.value?.find(v => v.id === parentId.value)
})

// 监听
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
  console.log('e', e)
})

onMounted(() => {

})

const handleGo = (index: number) => {
  router?.push(`/introduce/${index + 1}`)
}
</script>

<template>
  <div class="introduce">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="@/assets/images/banner.png">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div class="introduce-tab flex items-center justify-center bg-[#fff]">
      <!-- <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }"> -->
      <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }">
        <a class="h-50px block text-[#212529] text-[14px] font-bold" :href="item.href">{{ item.title }}</a>
      </div>
    </div>
    <div class="introduce-body mt-50px">
      <div class="row">
        <div class="flex">
          <div class="w-200px">
            <sidebar-collapse :title="currentData?.title" :data="currentData?.children" />
          </div>
          <div class="flex-1 pl-20px">
            <rich-text />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce {
  &-body {
    @apply pb-100px;
  }
  &-tab {
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
