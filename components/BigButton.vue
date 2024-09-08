<script lang="ts" setup>
interface Props {
    title?: string
    color?: string
    icon?: string
    href?: string
}
interface Emits {
    (eventName: 'string', data: any): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleGo = () => {
    window.open(props.href, '_blank')
}
</script>

<template>
    <div
        @click="handleGo"
        :style="{ backgroundColor: props.color }"
        class="flex items-center bg-[#4B78FF] border-rd-20px p-16px pl-24px pr-24px hover:opacity-80 cursor-pointer mt-40px"
    >
        <div>
            <img :src="props.icon" class="w-60px h-60px object-cover border-rd-50%" alt="" />
        </div>
        <div class="flex-1 pl-12px">
            <div class="text-[24px] text-[#fff] font-bold">{{ props.title }}</div>
            <div class="text-[14px] mt-12px text-[#fff] opacity-60 font-bold">查看详情</div>
        </div>
        <div>
            <img class="w-10px" src="@/assets/images/home/arrow.png" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
