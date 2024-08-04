<script lang="ts" setup>
import bannerBg from '@/assets/images/home/banner_bg.png'
import avatarPng from '@/assets/images/home/avatar.png'
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

const bannerList = ref([bannerBg, bannerBg, bannerBg])
const specialist = ref([
  {
    avatar: avatarPng,
    name: '张教授',
    englist_name: 'Aviation Experts',
    texts: ['某研究学院客座教授', '1986年华南理工数学系毕业', '10年航空航天实战评委实战经验', '10年航空航天实战评委实战经验'],
  },
  {
    avatar: avatarPng,
    name: '张教授',
    englist_name: 'Aviation Experts',
    texts: ['某研究学院客座教授', '1986年华南理工数学系毕业', '10年航空航天实战评委实战经验', '10年航空航天实战评委实战经验'],
  },
  {
    avatar: avatarPng,
    name: '张教授',
    englist_name: 'Aviation Experts',
    texts: ['某研究学院客座教授', '1986年华南理工数学系毕业', '10年航空航天实战评委实战经验', '10年航空航天实战评委实战经验'],
  },
])

// 监听
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
  console.log('e', e)
})
</script>

<template>
  <div class="home">
    <div class="home-banner">
      <el-carousel trigger="click" height="740px" :autoplay="false" :interval="1000000">
        <el-carousel-item v-for="item in bannerList" :key="item" class="relative">
          <div class="w-100% h-740px home-banner__poster" :style="{ 'background-image': `url(${item})` }" />
          <!-- <img :src="item" class="w-100% block"> -->
          <div class="absolute top-50% left-50% translate-x--50% translate-y--90%">
            <div class="row">
              <div class="text-[40px] font-bold text-[#fff]">
                童创空天
              </div>
              <div class="text-[40px] font-bold text-[#fff] mt-14px">
                全国青少年空天科普成果展演活动
              </div>
              <el-button color="#fff" round size="large" class="mt-100px w-140px h-48px! border-rd-40px! home-banner__text">
                了解详情
              </el-button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 证书查询 -->
    <div class="home-entrance mt-100px">
      <div class="row">
        <el-row :gutter="80" class="w-1200px ml-auto! mr-auto!" justify="center">
          <el-col :span="8">
            <div class="flex flex-col justify-center items-center">
              <img class="w-170px" src="@/assets/images/home/1.png">
              <el-button type="primary" round size="large" class="mt-20px w-240px h-60px! border-rd-40px! home-entrance__text">
                报名入口
              </el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="flex flex-col justify-center items-center">
              <img class="w-170px" src="@/assets/images/home/2.png">
              <el-button type="primary" round size="large" class="mt-20px w-240px h-60px! border-rd-40px! home-entrance__text">
                参与活动
              </el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="flex flex-col justify-center items-center">
              <img class="w-170px" src="@/assets/images/home/3.png">
              <el-button type="primary" round size="large" class="mt-20px w-240px h-60px! border-rd-40px! home-entrance__text">
                证书查询
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 活动进度 -->
    <div class="home-progress mt-100px">
      <img class="w-100%" src="@/assets/images/home/bg_color1.png">
      <div class="home-progress__body bg-[#fff]">
        <div class="row">
          <div class="flex items-center justify-center">
            <img class="w-50px" src="@/assets/images/home/4.png">
            <b class="text-[50px] ml-16px mr-16px">活动进度</b>
            <img class="w-50px" src="@/assets/images/home/5.png">
          </div>
          <div class="h-400px " />
        </div>
      </div>
      <img class="w-100%" src="@/assets/images/home/bg_color2.jpg">
    </div>

    <!-- 赛项介绍 -->
    <div class="home-introduce">
      <div class="home-introduce__body bg-[#E8F1FF]">
        <div class="row">
          <div class="flex items-center justify-center">
            <img class="w-50px" src="@/assets/images/home/4.png">
            <b class="text-[50px] ml-16px mr-16px">赛项介绍</b>
            <img class="w-50px" src="@/assets/images/home/5.png">
          </div>
          <div v-for="item in 4" class="w-1200px ml-auto! mr-auto!">
            <div class="flex items-center mt-40px">
              <img class="w-30px" src="@/assets/images/home/6.png">
              <b class="text-[22px] ml-16px text-[#4B78FF]">积木构建</b>
            </div>
            <el-row :gutter="60">
              <el-col v-for="item in 4" :span="8">
                <div class="flex items-center bg-[#4B78FF] border-rd-20px p-16px pl-24px pr-24px hover:opacity-80 cursor-pointer mt-20px">
                  <div>
                    <img src="@/assets/images/home/7.png" class="w-88px" alt="">
                  </div>
                  <div class="flex-1 pl-12px">
                    <div class="text-[24px] text-[#fff] font-bold">
                      个人操控
                    </div>
                    <div class="text-[14px] mt-12px text-[#fff] opacity-60 font-bold">
                      查看详情
                    </div>
                  </div>
                  <div>
                    <img class="w-10px" src="@/assets/images/home/arrow.png" alt="">
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <img class="w-100%" src="@/assets/images/home/bg_color3.png">
    </div>

    <!-- 专家团队 -->
    <div class="home-specialist">
      <div class="home-specialist__body bg-[#fff]">
        <div class="flex items-center justify-center">
          <img class="w-50px" src="@/assets/images/home/4.png">
          <b class="text-[50px] ml-16px mr-16px">专家团队</b>
          <img class="w-50px" src="@/assets/images/home/5.png">
        </div>
        <div class="mt-100px">
          <el-carousel trigger="click" height="1240px" :autoplay="false" :interval="1000000">
            <el-carousel-item v-for="item in specialist" :key="item" class="relative">
              <img class="w-100% object-cover block" src="@/assets/images/home/8.png">
              <div class="h-740px absolute left-0 top-0 w-100% h-100%">
                <div class="row flex items-center">
                  <div class="w-700px">
                    <img class="w-100% object-cover block" :src="item.avatar">
                  </div>
                  <div class="flex-1 pl-240px">
                    <div class="text-[80px] font-bold mt-250px">
                      {{ item.name }}
                    </div>
                    <div class="text-[#959DB6] text-[40px] mt-20px">
                      {{ item.englist_name }}
                    </div>
                    <div class="pt-30px pb-30px">
                      <el-divider class="border-black! opacity-60" />
                    </div>
                    <div v-for="text in item.texts" :key="text" class="text-[24px] text-[#959DB6] flex items-center mb-12px">
                      <div>
                        <div class="flex items-center justify-center w-20px h-20px border-rd-50%" style="border: 1px solid #959DB6">
                          <div class="w-60% h-60% border-rd-50% bg-[#959DB6]" />
                        </div>
                      </div>
                      <div class="pl-12px">
                        {{ text }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <img class="w-100%" src="@/assets/images/home/bg_color4.png">
    </div>

    <!-- 报名情况 -->
    <div class="home-apply">
      <div class="home-apply__body bg-[#E8F1FF]">
        <div class="row">
          <div class="flex items-center justify-center">
            <img class="w-50px" src="@/assets/images/home/4.png">
            <b class="text-[50px] ml-16px mr-16px">报名情况</b>
            <img class="w-50px" src="@/assets/images/home/5.png">
          </div>
          <div class="mt-100px pb-100px">
            <china-map />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &-banner {
    &__poster{
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__text {
      :deep(span) {
        @apply text-[16px];
      }
    }
  }
  &-entrance {
    &__text {
      :deep(span) {
        @apply text-[20px] font-bold;
      }
    }
  }
}
</style>
