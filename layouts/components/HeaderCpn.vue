<script setup lang="ts">
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const { $emit, MITT_KEY } = useMitt()
const { headerList, activeIndex } = useHeader()

const handleSelect = (key: string) => {
  console.log('key', key)
  // currentIndex.value = key
  $emit(MITT_KEY.HEADER_SELECT_EVENT, key)
}

const handleGo = (item: any) => {
  console.log('item', item)
  if (item.title === '新闻中心')
    router.push(item.href)

  // currentIndex.value = key
}
</script>

<template>
  <header class="header bg-[#fff]">
    <div class="row">
      <nav class="relative w-100% block">
        <client-only>
          <el-menu
            class="w-100%"
            :default-active="activeIndex" mode="horizontal"
            :ellipsis="false"
            router
            @select="handleSelect"
          >
            <el-menu-item index="logo">
              <a href="/"><img
                class="w-80px object-cover"
                src="@/assets/images/logo.png"
                alt="Element logo"
              ></a>
            </el-menu-item>
            <el-menu-item class="flex-1" />
            <template
              v-for="(item, index) in headerList"
              :key="`${item.href}_${index}`"
            >
              <el-sub-menu v-if="item.children?.length" :index="item.href">
                <template #title>
                  <span @click="handleGo(item)">{{ item.title }}</span>
                </template>
                <el-menu-item v-for="(child, childIndex) in item.children" :key="`${child.href}_${childIndex}`" :index="child.href" @click="handleGo(child)">
                  {{ child.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.href" @click="handleGo(item)">
                {{ item.title }}
              </el-menu-item>
            </template>
          </el-menu>
        </client-only>
        <div class="absolute right--120px top-50% translate-y--50% flex flex-items-center">
          <el-button type="primary" round>
            <span>注册</span>
            <span class="ml-2 mr-2 opacity-20">|</span>
            <span>登录</span>
          </el-button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  :deep(.el-menu--horizontal) {
    @apply border-none;
  }
  :deep(.el-menu-item) {
    @apply h-72px;
    &:hover {
      background:none;
    }
  }
}
</style>
