<script lang="ts" setup>
interface Props {
  [propName: string]: any
}
interface Emits {
  (eventName: 'string', data: any): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <div class="test">
    123
  </div>
</template>

<style lang="scss">
.test{
}
</style>
