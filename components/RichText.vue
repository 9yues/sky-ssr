<script lang="ts" setup>
interface Props {
    data?: any
}
interface Emits {
    (eventName: 'string', data: any): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const files = computed(() => (props.data?.fileObj ? JSON.parse(props.data?.fileObj) : []))

const handleDownload = (v: string) => {
    window.open(v)
}
</script>

<template>
    <article class="pb-20px pt-0">
        <div class="flex rich-text">
            <div class="flex-1 rich-text__content bg-[#fff] p-20px border-rd-10px">
                <template v-if="props?.data?.title">
                    <h2 class="text-26px text-center" style="line-height: 40px">
                        {{ props?.data?.title }}
                    </h2>
                    <div class="text-[#9b9b9b] pt-10px pb-20px text-13px flex flex-items-center justify-center">
                        <span class="text-[#959DB6] text-[12px]">发表时间：{{ props?.data?.createTime }}</span>
                        <span class="text-[#959DB6] text-[12px] ml-30px">浏览量：2585</span>
                    </div>
                    <div v-html="props?.data?.content"></div>
                </template>
                <template v-else>暂无数据</template>
            </div>

            <div class="w-300px ml-20px rich-text__file" v-if="files?.length">
                <el-card style="max-width: 480px">
                    <template #header>
                        <div class="card-header">
                            <span class="text-[#959DB6] text-[14px]">附件下载：</span>
                        </div>
                    </template>

                    <div v-for="(o, i) in files" :key="o" class="mt-12px rich-text__file-item">
                        <el-button link type="primary" @click="handleDownload(o)">
                            {{ o }}
                        </el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.rich-text {
    &__content {
        & > div {
            font-size: 14px;
            line-height: 24px;
        }
        img {
            // width: auto;
            @apply border-rd-10px;
            width: 100%;
            max-width: 100%;
        }
    }
    &__file {
        :deep(.el-card) {
            border-radius: 10px;
        }
        :deep(.el-button) {
            @apply text-left;
            white-space: pre-line;
            span {
                word-break: break-all;
            }
        }
        &-item {
            &:first-child {
                @apply mt-0;
            }
        }
    }
}
</style>
