<script lang="ts" setup>
import { useAppStore } from '@/stores/index'
const config = useConfig()
const { serverRoute, serverRouter, route, router } = useFunctions()

const { headerList } = useHeader()
const appStore = useAppStore()
const { data: introduceData } = await useAsyncData('introduceHome', () =>
    $fetch(`${config.baseURL}open/match/classify`)
)
console.log('列表', introduceData)
</script>

<template>
    <div class="introduceHome">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img
                    class="w-100% h-500px object-cover block"
                    src="http://tckt-test-data.oss-cn-hangzhou.aliyuncs.com/xrmaker/cms/IMG_7882.JPG"
                />
                <!-- <div class="w-100% h-500px bg-gray" /> -->
            </el-carousel-item>
        </el-carousel>
        <div class="introduceHome-body">
            <div v-for="(item, index) in introduceData?.result" :key="item.id" class="introduceHome-body__item">
                <div class="row">
                    <el-row :gutter="120" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
                        <el-col :span="12">
                            <h2 class="text-[32px] pl-20px relative h2-title">{{ item.name }}</h2>
                            <p class="indent-20px h2-desc">{{ item.description }}</p>

                            <el-row :gutter="40" v-if="item?.children?.length">
                                <el-col v-for="child in item.children" :key="child.id" :span="12">
                                    <big-button
                                        :title="child.name"
                                        :icon="child.icon"
                                        :color="child.style"
                                        :href="child.href"
                                    ></big-button>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="12">
                            <img class="w-100% h-500px object-cover block" :src="item.icon" />
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
+

<style lang="scss" scoped>
.introduceHome {
    &-body {
        &__item {
            @apply bg-[#F4F6FF] pt-100px pb-100px;
            &:nth-child(odd) {
                @apply bg-[#fff];
            }
        }
    }
    .h2-title {
        &::before {
            content: '';
            @apply absolute left-0 top-10% w-4px h-80% bg-[#565656] border-rd-6px;
        }
    }
    .h2-desc {
        @apply mt-40px;
        line-height: 30px;
    }
}
</style>
