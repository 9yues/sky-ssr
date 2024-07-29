<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()

const active = ref(['specialist'])
const list = ref([
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
  {
    title: '王明明',
    desc: '某研究学院院长。1963年中央美院雕塑系毕业，主要研究方向是文艺复兴时期的雕塑作品，某研究学院院长。1963年中央美。',
    poster: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  },
])
const sidebarList = computed(() => headerList.find(v => v.title === '专家团队').children)

onMounted(() => {

})

const handleGo = (index: number) => {
  router.push(`/specialist/${index + 1}`)
}
</script>

<template>
  <div class="specialist">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="w-100% h-500px object-cover block" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg">
        <!-- <div class="w-100% h-500px bg-gray" /> -->
      </el-carousel-item>
    </el-carousel>
    <div class="specialist-body mt-50px">
      <div class="row">
        <div class="flex">
          <div class="w-200px">
            <el-collapse v-model="active">
              <el-collapse-item title="团队专家" name="specialist">
                <ul>
                  <li v-for="(item, index) in sidebarList" :key="item.href" :class="{ on: index + 1 === +route.params.specialist }" @click="handleGo(index)">
                    {{ item.title }}
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="flex-1 pl-40px">
            <el-row :gutter="60">
              <el-col v-for="(item, index) in list" :key="index" class="mb-60px" :span="8">
                <image-text-card :title="item.title" :desc="item.desc" :poster="item.poster" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.specialist {
  &-body {
    @apply pb-100px;
    :deep(.el-collapse) {
      @apply border-rd-10px border-none;
      .el-collapse-item__wrap {
        @apply border-none;
      }
      .el-collapse-item {
        @apply border-rd-10px;
        &__header {
          @apply pl-20px text-[16px] font-bold;
          color: #959DB6;
          letter-spacing: 0;
          border-radius: 10px 10px 0 0;
          &.is-active {
            border-bottom: 1px solid #eee;
          }
        }
        &__wrap {
          border-radius: 0 0 10px 10px;

        }
      }

      ul {
        @apply pt-20px pb-20px;
        li {
          @apply pt-none cursor-pointer mb-12px pl-20px;
          &:hover,&.on {
            @apply text-[var(--sky-primary)];
            border-right: 2px solid var(--sky-primary);
          }
        }
      }

    }
  }
}
</style>
