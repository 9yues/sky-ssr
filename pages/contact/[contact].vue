<script lang="ts" setup>
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}

const data = ref({
  bj: {
    a: '北京航空航天大学、中国航天科技国际交流中心、北京市数字教育中心（北京电化教育馆）',
    b: '张三',
    c: '15521054523',
    d: '123456456',
    e: '12312312@qq.com',
  },
  gd: {
    a: '北京航空航天大学、中国航天科技国际交流中心、北京市数字教育中心（北京电化教育馆）',
    b: '张三',
    c: '15521054523',
    d: '123456456',
    e: '12312312@qq.com',
  },
})

const areas = ref(26)

const contactKey = computed(() => route?.params?.contact)

const currentData = computed(() => data.value[contactKey.value])

onMounted(() => {

})

const handleGo = (index: number) => {
  router?.push(`/contact/${index + 1}`)
}
</script>

<template>
  <div class="contact">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div v-if="contactKey" class="contact-body mt-50px">
      <div class="row">
        <div class="contact-group row">
          <div class="contact-group__title">
            <b>主办方</b>
          </div>
          <div class="contact-group__content">
            <div class="contact-group__header">
              北京
            </div>
            <div class="contact-group__body">
              <div class="flex items-center mb-40px">
                <div>
                  <img src="@/assets/images/contact/icon_organizer.png" alt="">
                </div>
                <b class="pl-12px w-200px">
                  主办单位
                </b>
                <div>
                  {{ currentData.a }}
                </div>
              </div>
              <div class="flex items-center mb-40px">
                <div>
                  <img src="@/assets/images/contact/icon_contacts.png" alt="">
                </div>
                <b class="pl-12px w-200px">
                  赛区联系人
                </b>
                <div>
                  {{ currentData.b }}
                </div>
              </div>
              <div class="flex items-center mb-40px">
                <div>
                  <img src="@/assets/images/contact/icon_phone.png" alt="">
                </div>
                <b class="pl-12px w-200px">
                  联系电话
                </b>
                <div>
                  {{ currentData.c }}
                </div>
              </div>
              <div class="flex items-center mb-40px">
                <div>
                  <img src="@/assets/images/contact/icon_wechat.png" alt="">
                </div>
                <b class="pl-12px w-200px">
                  微信
                </b>
                <div>
                  {{ currentData.d }}
                </div>
              </div>
              <div class="flex items-center">
                <div>
                  <img src="@/assets/images/contact/icon_mail.png" alt="">
                </div>
                <b class="pl-12px w-200px">
                  邮箱
                </b>
                <div>
                  {{ currentData.e }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-group row">
          <div class="contact-group__title">
            <b>承办方</b>
          </div>
          <div class="contact-group__content">
            <div class="contact-group__header">
              各省市
            </div>
            <div class="contact-group__body">
              <el-row :gutter="80">
                <el-col v-for="(item, index) in areas" :key="index" class="mb-40px" :span="4">
                  <div class="contact-group__item">
                    <img class="w-12px mr-10px" src="@/assets/images/contact/icon_area.png" alt="">
                    北京
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  &-body {
    @apply pb-100px;
  }
  &-group {
    @apply pb-80px;
    &__title {
      @apply mb-40px relative flex items-center justify-between;
      &::after {
        content: '';
        @apply absolute left-0 top-12% w-3px h-90% bg-[var(--sky-primary)] border-rd-4px;
      }
      b {
        @apply text-[var(--sky-title)] text-[24px] pl-20px;
      }
      span {
        @apply text-[var(--sky-sub-title)] text-[14px] cursor-pointer hover:opacity-80;
      }
    }
    &__content {
      @apply border-rd-10px bg-[#fff];
      box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
      transition: all .3s;
    }
    &__header {
      @apply pl-40px pr-40px pt-20px pb-20px bg-[var(--sky-primary)] text-[#fff] text-[18px];
      border-radius: 10px 10px 0 0;
    }
    &__body {
      @apply p-40px;
    }
    &__item {
      @apply flex items-center justify-center pt-12px pb-12px pl-20px pr-20px border-rd-6px text-[var(--sky-primary)] cursor-pointer hover:opacity-80;
      border: 1px solid var(--sky-primary);
    }
  }
}
</style>
