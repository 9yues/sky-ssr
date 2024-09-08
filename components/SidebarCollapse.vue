<script lang="ts" setup>
interface SidebarItemType {
    title?: string
    href?: string
}

interface Props {
    title?: string
    activeIndex?: number
    data?: SidebarItemType[]
}
interface Emits {
    (eventName: 'go', data: SidebarItemType): void
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    activeIndex: 0,
    data: [],
})
const emit = defineEmits<Emits>()

const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}

const active = ref('SidebarCollapse')
const handleGo = (item: SidebarItemType) => {
    emit('go', item)
}
</script>

<template>
    <aside class="sidebar-collapse">
        <el-collapse v-model="active">
            <el-collapse-item :title="props.title" name="SidebarCollapse">
                <ul>
                    <li
                        v-for="(item, index) in props.data"
                        :key="item.href"
                        :class="{ on: index === props.activeIndex }"
                        @click="handleGo(item)"
                    >
                        {{ item.title }}
                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </aside>
</template>

<style lang="scss" scoped>
.sidebar-collapse {
    :deep(.el-collapse) {
        @apply border-rd-10px border-none;
        .el-collapse-item__arrow.is-active {
            @apply rotate-0deg;
        }
        .el-collapse-item__wrap {
            @apply border-none;
        }
        .el-collapse-item {
            @apply border-rd-10px;
            &__header {
                @apply pl-20px text-[16px] font-bold pointer-events-none;
                border-bottom: 1px solid var(--sky-border) !important;

                color: var(--sky-sub-title);
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
                @apply pt-none cursor-pointer mb-12px pl-20px text-[var(--sky-sub-title)];
                &:hover,
                &.on {
                    @apply text-[var(--sky-primary)];
                    border-right: 2px solid var(--sky-primary);
                }
            }
        }
    }
}
</style>
