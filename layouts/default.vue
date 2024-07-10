<script setup>
import HeaderCpn from './components/HeaderCpn.vue'
import FooterCpn from './components/FooterCpn.vue'
</script>

<template>
  <main>
    <HeaderCpn />
    <div class="sky-body">
      <slot />
    </div>
    <FooterCpn />
  </main>
</template>

<style lang="scss" scoped>
.sky-body {
  min-height: calc(100vh - 100px)
}
</style>
