<script lang="ts" setup>
// @ts-nocheck
const { serverRoute, serverRouter, route, router } = useFunctions()
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()
const config = useConfig()

const page = ref(1)
const pageSize = ref(10)

const parentId = computed(() => route?.params?.newList)
const songId = computed(() => route?.query?.id)
const detailId = computed(() => route?.query?.detailId)
const currentMenuData = computed(() => {
    return headerList.value?.find((v) => v.title === '新闻中心').children
})
console.log('newList currentMenuData', currentMenuData)
const currentData = computed(() => {
    return currentMenuData.value?.find((v) => v.id === parentId.value)
})
const activeIndex = computed(() => {
    return currentData.value?.c?.findIndex((v) => v.id === songId.value)
})

const handleGo = (item: any) => {
    const routerData = router?.resolve({
        path: `/newList/${parentId.value}`,
        query: { id: item.id },
    })
    console.log('routerData', routerData)
    location.href = routerData.href
}

const serveSongId = computed(() => serverRoute?.query?.id)
const serveDetailId = computed(() => serverRoute?.query?.detailId)

const { data } = await useAsyncData(
    'newList',
    () =>
        $fetch(`${config.baseURL}open/news`, {
            params: {
                classifyId: serveSongId.value,
                page: 1,
                size: 1000,
            },
        }),
    { watch: [serveSongId] }
)
console.log('列表', data)

const { data: detailData } = await useAsyncData('newDetail', () =>
    $fetch(`${config.baseURL}open/news/${serveDetailId.value}`)
)
console.log('详情', detailData)

// const total = computed(() => data?.result?.total || 0)

const handleGoDetail = (item: any) => {
    console.log(item)
    const routerData = router?.resolve({
        path: `/newList/${parentId.value}`,
        query: { id: songId.value, detailId: item.id },
    })
    console.log('routerData', routerData)
    location.href = routerData.href
}

const handleSizeChange = (size: number) => {
    pageSize.value = size
}

const handleCurrentChange = (val: number) => {
    page.value = val
}
</script>

<template>
    <div class="new-list">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img class="w-100% h-500px object-cover block" src="@/assets/images/banner.png" />
                <!-- <div class="w-100% h-500px bg-gray" /> -->
            </el-carousel-item>
        </el-carousel>
        <div v-if="parentId" class="new-list__tab flex items-center justify-center bg-[#fff]">
            <!-- <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }"> -->
            <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }">
                <a class="h-50px block text-[#212529] text-[14px] font-bold" :href="item.href">{{ item.title }}</a>
            </div>
        </div>
        <div class="new-list__body mt-50px">
            <div class="row">
                <div class="flex">
                    <div class="w-200px">
                        <sidebar-collapse
                            :activeIndex="activeIndex"
                            :title="currentData?.title"
                            :data="currentData?.c"
                            @go="handleGo"
                        />
                    </div>
                    <div class="flex-1 pl-20px box-border">
                        <el-card v-if="!detailData?.result">
                            <el-row v-if="data?.result?.data?.length">
                                <el-col
                                    v-for="(item, index) in data?.result?.data"
                                    :key="item.id"
                                    class="mb-30px"
                                    :span="24"
                                >
                                    <div class="horizontal-card" @click="handleGoDetail(item)">
                                        <div class="horizontal-card__poster">
                                            <el-image :src="item.cover" fit="cover" />
                                        </div>
                                        <div class="horizontal-card__group">
                                            <b class="horizontal-card__title">{{ item.title }}</b>
                                            <p class="horizontal-card__desc text-hidden-2 h-50px mt-12px">
                                                {{ item.content }}
                                            </p>
                                            <p class="horizontal-card__desc flex justify-between mt-20px">
                                                <span class="text-[14px]">{{ item.createTime }}</span>
                                                <span class="text-[14px] flex items-center"
                                                    >详细
                                                    <img
                                                        class="w-12px ml-10px"
                                                        src="@/assets/images/icon-arrow.png"
                                                        alt=""
                                                /></span>
                                            </p>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                            <div v-else>无数据</div>
                        </el-card>
                        <rich-text v-else :data="detailData?.result" />

                        <div v-if="!detailData?.result" class="mt-40px flex justify-end">
                            <el-pagination
                                v-model:current-page="page"
                                v-model:page-size="pageSize"
                                :page-sizes="[10, 20, 30, 40]"
                                background
                                layout="total, prev, pager, next"
                                :total="data?.result?.total"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.new-list {
    &__body {
        @apply pb-100px;
        .horizontal-card {
            @apply flex cursor-pointer hover:opacity-80;

            &__poster {
                @apply w-240px pr-20px;
                :deep(.el-image) {
                    @apply w-100% h-100% block border-rd-10px;
                    img {
                        @apply w-100% h-100% block border-rd-10px;
                    }
                }
            }
            &__group {
                @apply flex-1 box-border pt-12px;
                border-bottom: 1px solid var(--sky-border);
            }
            &__title {
                @apply text-[18px] text-[var(--sky-title)] font-bold;
            }
            &__desc {
                @apply text-[14px] text-[var(--sky-sub-title)];
                word-break: break-all;
                line-height: 24px;
            }
        }
    }
    &__tab {
        border-bottom: 1px solid var(--sky-border);
        & > div {
            &.on,
            &:hover {
                a {
                    @apply text-[var(--sky-primary)];
                    border-bottom: 2px solid var(--sky-primary);
                }
            }
        }
        a {
            transition: all 0.3s;
            line-height: 50px;
            border-bottom: 2px solid transparent;
        }
    }
}
</style>
