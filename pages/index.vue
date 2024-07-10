<script lang="ts" setup>
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

// 监听
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
  console.log('e', e)
})
</script>

<template>
  <div>home</div>
</template>

<style lang="scss" scoped>

</style>
