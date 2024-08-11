<script setup>
import HeaderCpn from './components/HeaderCpn.vue'
import FooterCpn from './components/FooterCpn.vue'

const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}

const isLoginOrReigster = computed(() => ['/register', '/login'].includes(route.fullPath))
</script>

<template>
  <div>
    <HeaderCpn v-if="!isLoginOrReigster" />
    <main class="main">
      <slot />
    </main>
    <FooterCpn v-if="!isLoginOrReigster" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  // min-height: calc(100vh - 472px)
}
</style>
