<script setup lang="ts">
// import { RichText } from '~~/.nuxt/components';
const route = useRouter()
const router = useRouter()

const bannerList = ref(['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'])
</script>

<template>
  <main>
    <div>
      <el-carousel trigger="click" height="450px">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img :src="item" class="w-100% h-450px object-cover" alt="">
        </el-carousel-item>
      </el-carousel>

      <div class="pt-20px pb-20px row">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>赛事介绍</el-breadcrumb-item>
          <el-breadcrumb-item>正文</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <rich-text />
    </div>
  </main>
</template>
