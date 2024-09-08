<script lang="ts" setup>
interface Props {
    poster?: string
    title?: string
    desc?: string
    posterWidth?: string
    exceedLine?: number
    defaultHeight?: string
    direction?: 'horizontal' | 'vertical'
    type?: string
}
const props = withDefaults(defineProps<Props>(), {
    type: '',
    poster: '',
    title: '',
    desc: '',
    exceedLine: 3,
    defaultHeight: '387px',
    posterWidth: '280px',
    direction: 'vertical',
})
</script>

<template>
    <div
        v-if="props.direction === 'vertical'"
        class="vertical-card"
        :class="{ on: props.type === 'home' }"
        :style="{ height: props.defaultHeight }"
    >
        <div class="vertical-card__header">
            <el-image :src="props.poster" fit="cover" />
        </div>
        <div class="vertical-card__body text-hidden">
            {{ props.title }}
        </div>
        <div class="vertical-card__footer" :class="[`text-hidden-${exceedLine}`]">
            {{ props.desc }}
        </div>
    </div>
    <div v-else class="horizontal-card" :style="{ height: props.defaultHeight }">
        <div class="horizontal-card__poster" :style="{ width: props.posterWidth }">
            <el-image :src="props.poster" fit="cover" />
        </div>
        <div class="horizontal-card__group p-12px">
            <b class="horizontal-card__title">{{ props.title }}</b>
            <p class="horizontal-card__desc" :class="[`text-hidden-${exceedLine}`]">
                {{ props.desc }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.vertical-card,
.horizontal-card {
    @apply cursor-pointer;
    background: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
        transform: translateY(-10px);
    }
}
.vertical-card {
    &__header {
        :deep(.el-image) {
            border-radius: 10px 10px 0 0;
            @apply w-100% h-248px block;
            img {
                @apply w-100% h-100% block;
                border-radius: 10px 10px 0 0;
            }
        }
    }
    &__body {
        @apply text-[18px] font-bold p-12px;
    }
    &__footer {
        @apply pl-12px pr-12px pb-6px text-[14px] text-[#959DB6];
        line-height: 30px;
    }
    &.on {
        .vertical-card__body {
            @apply text-center pt-0;
        }
        :deep(.el-image) {
            @apply flex items-center justify-center relative;
            &::after {
                content: '';
                @apply absolute top-50% left-50% w-190px h-190px border-rd-50% translate-x--50% translate-y--50%;
                border: 1px solid #e8f1ff;
            }
            &::before {
                content: '';
                @apply absolute top-50% left-50% w-200px h-200px border-rd-50% translate-x--50% translate-y--50%;
                border: 1px solid #e8f1ff;
            }
            img {
                @apply border-rd-50% w-180px h-180px;
            }
        }
    }
}
.horizontal-card {
    @apply flex;

    &__poster {
        :deep(.el-image) {
            @apply w-100% h-100% block;
            border-radius: 10px 0 0 10px;
            img {
                @apply w-100% h-100% block;
                border-radius: 10px 0 0 10px;
            }
        }
    }
    &__group {
        @apply flex-1 box-border;
    }
    &__title {
        @apply text-[18px] text-[var(--sky-title)] font-bold;
    }
    &__desc {
        @apply mt-20px text-[14px] text-[var(--sky-sub-title)];
        line-height: 24px;
    }
}
</style>
