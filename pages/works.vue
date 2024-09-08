<script lang="ts" setup>
import { useAppStore } from '@/stores/index'

const { serverRoute, serverRouter, route, router } = useFunctions()
const config = useConfig()
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()
const appStore = useAppStore()

const songId = computed(() => route?.query?.id)

const currentMenuData = computed(() => {
    const news = headerList.value?.find((v) => v.title === '新闻中心')
    console.log('news', news)
    const find = news?.children?.find((v) => v.title === '精彩展示')

    return find
})
console.log('currentMenuData', currentMenuData)

const serveSongId = computed(() => serverRoute?.query?.id)
const { data, pending, error, refresh } = await useAsyncData(
    'works',
    () =>
        $fetch(`${config.baseURL}open/work`, {
            params: {
                classifyId: serveSongId.value,
                page: 1,
                size: 1000,
            },
        }),
    { watch: [serveSongId] }
)
console.log('作品列表', data)
</script>

<template>
    <div class="works">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img
                    class="w-100% h-500px object-cover block"
                    src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
                />
                <!-- <div class="w-100% h-500px bg-gray" /> -->
            </el-carousel-item>
        </el-carousel>
        <div class="works-body mt-50px">
            <div class="row">
                <div class="flex">
                    <div class="w-200px">
                        <sidebar-collapse :title="currentMenuData?.title" :data="currentMenuData?.c" />
                    </div>
                    <div class="flex-1 pl-40px">
                        <el-row :gutter="60">
                            <el-col
                                v-for="(item, index) in data?.result?.data"
                                :key="item.id"
                                class="mb-60px"
                                :span="8"
                            >
                                <image-video-card :poster="item.cover" :video-url="item.fileObj" />
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.works {
    &-body {
        @apply pb-100px;
    }
}
</style>
