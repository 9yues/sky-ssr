<script lang="ts" setup>
const { serverRoute, serverRouter, route, router } = useFunctions()
const { $on, MITT_KEY } = useMitt()
const { headerList } = useHeader()
const config = useConfig()

const parentId = computed(() => route?.params?.introduce)
const songId = computed(() => route?.query?.id)

const currentMenuData = computed(() => {
    return headerList.value?.find((v) => v.title === '赛项介绍').children
})

const currentData = computed(() => {
    return currentMenuData.value?.find((v) => v.id === parentId.value)
})

const slidebarIndex = computed(() => {
    return currentData.value?.children?.findIndex((v) => v.id === songId.value)
})

// 监听
$on(MITT_KEY.HEADER_SELECT_EVENT, (e: any) => {
    console.log('e', e)
})

onMounted(() => {})

const handleGo = (item: any) => {
    const routerData = router?.resolve({
        path: `/introduce/${parentId.value}`,
        query: { id: item.id },
    })

    location.href = routerData.href
}
const serveSongId = computed(() => serverRoute?.query?.id)
const { data, pending, error, refresh } = await useAsyncData(
    'introduce',
    () =>
        $fetch(`${config.baseURL}open/match`, {
            params: {
                classifyId: serveSongId.value,
                page: 1,
                size: 1000,
            },
        }),
    { watch: [serveSongId] }
)
console.log('详情', data)
</script>

<template>
    <div class="introduce">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img class="w-100% h-500px object-cover block" src="@/assets/images/banner.png" />
                <!-- <div class="w-100% h-500px bg-gray" /> -->
            </el-carousel-item>
        </el-carousel>
        <div class="introduce-tab flex items-center justify-center bg-[#fff]">
            <!-- <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }"> -->
            <div v-for="item in currentMenuData" :key="item.href" class="mr-80px" :class="{ on: item.id === parentId }">
                <a class="h-50px block text-[#212529] text-[14px] font-bold" :href="item.href">{{ item.title }}</a>
            </div>
        </div>
        <div class="introduce-body mt-50px">
            <div class="row">
                <div class="flex">
                    <div class="w-200px">
                        <sidebar-collapse
                            :activeIndex="slidebarIndex"
                            :title="currentData?.title"
                            :data="currentData?.children"
                            @go="handleGo"
                        />
                    </div>
                    <div class="flex-1 pl-20px">
                        <rich-text :data="data.result.data[0]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.introduce {
    &-body {
        @apply pb-100px;
    }
    &-tab {
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
