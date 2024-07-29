<script lang="ts" setup>
const handleGo = () => {
  window.open('https://beian.miit.gov.cn/')
}
</script>

<template>
  <footer class="sky-footer">
    <div class="row">
      <div class="flex pt-200px ">
        <div class="w-300px">
          <div class="mb-40px">
            <el-link :underline="false" class="text-[20px]! text-[#fff]">
              底部导航
            </el-link>
          </div>
          <div class="mb-10px">
            <el-link :underline="false" class="text-[12px] text-[#fff]">
              首页
            </el-link>
          </div>
          <div class="mb-10px">
            <el-link :underline="false" class="text-[12px] text-[#fff]">
              赛项介绍
            </el-link>
          </div>
          <div class="mb-10px">
            <el-link :underline="false" class="text-[12px] text-[#fff]">
              新闻中心
            </el-link>
          </div>
        </div>
        <div class="w-300px">
          <div class="mb-40px">
            <el-link :underline="false" class="text-[20px]! text-[#fff]">
              联系方式
            </el-link>
          </div>
          <div class="mb-10px">
            <el-link :underline="false" class="text-[12px] text-[#fff]">
              地址：北京市XXXX
            </el-link>
          </div>
          <div class="mb-10px">
            <el-link :underline="false" class="text-[12px] text-[#fff]">
              电话：xxxx
            </el-link>
          </div>
          <div class="mb-10px">
            <el-link :underline="false" class="text-[12px] text-[#fff]">
              邮箱：xxxx
            </el-link>
          </div>
        </div>
        <div class="flex-1 flex justify-end">
          <div class="mr-40px">
            <img src="@/assets/images/wb-2wm.png" class="w-120px h-120px object-cover">
            <div class="mt-10px text-center">
              官网客户端
            </div>
          </div>
          <div>
            <img src="@/assets/images/wx-2wm.png" class="w-120px h-120px object-cover">
            <div class="mt-10px text-center">
              微信公众号
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.sky-footer {
  @apply h-400px;
  background-color: #E8F1FF;
    background-image: url(@/assets/images/footer_bg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    color: #fff;
    :deep(.el-link) {
      @apply text-[#fff];
    }

}
</style>
