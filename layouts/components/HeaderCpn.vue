<script setup lang="ts">
const { $emit, MITT_KEY } = useMitt()
const { headerList, activeIndex } = useHeader()

const handleSelect = (key: string) => {
  // currentIndex.value = key
  $emit(MITT_KEY.HEADER_SELECT_EVENT, key)
}
</script>

<template>
  <header class="header">
    <nav>
      <el-menu
        :default-active="activeIndex" mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="(item, index) in headerList" :key="index" :index="item.href"
        >
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </nav>
  </header>
</template>

<style scoped lang="scss">

</style>
