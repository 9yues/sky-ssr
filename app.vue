<script setup lang="ts">
import { COMPANY } from '~~/enums/appEnum'

const { cssVar } = useCss()
useHead({
  title: COMPANY,
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/logo.png',
    },
  ],
  script: [
    {
      // src: '//api.map.baidu.com/api?type=webgl&v=1.0&ak=jmygafMc3uqI38PzGYBGADf7',
    },
  ],
})
</script>

<template>
  <div :style="cssVar">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style setup>
html, body , #__nuxt{
  min-height: 100vh;

}

html.dark {
  background: #222;
  color: white;
}
</style>
