<script lang="ts" setup>
interface Props {
    data?: any
}
interface Emits {
    (eventName: 'string', data: any): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleGo = (item: any) => {
    window.open(item.href, '_blank')
}

const handleGoHome = () => {
    window.open('/introduceHome', '_blank')
}
</script>

<template>
    <div
        :style="{
            backgroundColor: props.data?.style,
            backgroundImage: `url(${props.data?.icon})`,
            boxShadow: `0 26px 40px -24px ${props.data?.style}`,
        }"
        class="big-card flex items-center bg-[#4B78FF] border-rd-20px p-16px pl-24px pr-24px cursor-pointer"
    >
        <div class="flex-1 pl-12px">
            <div class="text-[32px] text-[#fff] font-bold">{{ props.data?.name }}</div>
            <div class="big-card__body mt-12px w-200px">
                <el-button
                    v-for="item in props?.data?.children"
                    :key="item.id"
                    color="#626aef"
                    round
                    size="small"
                    @click="handleGo(item)"
                    >{{ item?.name }}</el-button
                >
            </div>
            <div class="mt-24px big-card__footer">
                <el-button color="#fff" round @click="handleGoHome">查看详情</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.big-card {
    // background-image: url(@/assets/images/home/construct.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;

    transition: all 0.7s;
    &:hover {
        opacity: 0.8;
        transform: translateY(-10px);
    }
    &__body {
        :deep(.el-button) {
            @apply mb-12px ml-0 mr-12px;
            border: none;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            &:hover {
                opacity: 0.8;
            }
        }
    }
    &__footer {
        :deep(.el-button) {
            @apply mb-12px;
            color: #3358ff;
            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>
