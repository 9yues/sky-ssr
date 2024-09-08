<script setup lang="ts">
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}
const { $emit, MITT_KEY } = useMitt()
const { headerList, activeIndex } = useHeader()

const handleSelect = (key: string) => {
    console.log('key', key)
    // currentIndex.value = key
    $emit(MITT_KEY.HEADER_SELECT_EVENT, key)
}

const handleGo = (item: any) => {
    console.log('item', item)
    if (['新闻中心', '赛项介绍'].includes(item.title)) router.push(item.href)

    // currentIndex.value = key
}
console.log('headerList', headerList)
</script>

<template>
    <header class="header bg-[#fff]">
        <div class="row">
            <nav class="relative w-100% block">
                <client-only>
                    <el-menu
                        class="w-100%"
                        :default-active="activeIndex"
                        mode="horizontal"
                        :ellipsis="false"
                        router
                        @select="handleSelect"
                    >
                        <el-menu-item index="logo">
                            <a href="/"
                                ><img class="w-200px object-cover" src="@/assets/images/logo.png" alt="Element logo"
                            /></a>
                        </el-menu-item>
                        <el-menu-item class="flex-1" />
                        <template v-for="(item, index) in headerList" :key="`${item.href}_${index}`">
                            <el-sub-menu v-if="item.children?.length" :index="item.href">
                                <template #title>
                                    <span @click="handleGo(item)">{{ item.title }}</span>
                                </template>
                                <template
                                    v-for="(child, childIndex) in item.children"
                                    :key="`${child.href}_${childIndex}`"
                                >
                                    <el-sub-menu v-if="child?.children" :index="child.href">
                                        <template #title>
                                            {{ child.title }}
                                        </template>
                                        <template
                                            v-for="(grandChild, grandChildIndex) in child.children"
                                            :key="`${grandChild.href}_${grandChildIndex}`"
                                        >
                                            <el-menu-item :index="grandChild.href" @click="handleGo(grandChild)">
                                                {{ grandChild.title }}
                                            </el-menu-item>
                                        </template>
                                    </el-sub-menu>
                                    <el-menu-item v-else :index="child.href" @click="handleGo(child)">{{
                                        child.title
                                    }}</el-menu-item>
                                </template>
                            </el-sub-menu>
                            <el-menu-item v-else :index="item.href" @click="handleGo(item)">
                                {{ item.title }}
                            </el-menu-item>
                        </template>
                    </el-menu>
                </client-only>
                <div class="absolute right--140px top-50% translate-y--50% flex flex-items-center">
                    <!-- <el-button type="primary" round>
            <span>注册</span>
            <span class="ml-2 mr-2 opacity-20">|</span>
            <span>登录</span>
          </el-button> -->
                    <div class="flex items-center justify-center login-btn">
                        <a href="/register">注册</a>
                        <span>|</span>
                        <a href="/login">登录</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    :deep(.el-menu--horizontal) {
        @apply border-none;
    }
    :deep(.el-menu-item) {
        @apply h-72px;
        &:hover {
            background: none;
        }
    }
    .login-btn {
        @apply bg-[var(--sky-primary)] border-rd-20px pt-12px pb-12px pl-20px pr-20px;

        a,
        span {
            @apply text-[#fff] text-[14px];
        }
        span {
            @apply ml-12px mr-12px opacity-50;
        }
        a {
            @apply hover:opacity-70;
        }
    }
}
</style>
