<script lang="ts" setup>
import { useAppStore } from '@/stores/index'
const config = useConfig()
const { serverRoute, serverRouter, route, router } = useFunctions()
const appStore = useAppStore()

// 专家分类
const specialistClassifyList = computed(() => appStore.specialistClassifyList)

// seo 专家
const { data: specialistData } = await useAsyncData('specialistData', () =>
    $fetch(`${config.baseURL}open/specialist`, {
        params: {
            page: 1,
            size: 6,
        },
    })
)
console.log('专家', specialistData)
// seo 赛项介绍
const { data: introduceData } = await useAsyncData('introduceData', () =>
    $fetch(`${config.baseURL}open/match/classify`)
)
</script>

<template>
    <div class="home">
        <div class="home-banner">
            <el-carousel trigger="click" height="870px" :autoplay="false" :interval="1000000">
                <el-carousel-item v-for="item in 1" :key="item" class="relative">
                    <!-- <div class="w-100% h-730px home-banner__poster" :style="{ 'background-image': `url(${item})` }" /> -->
                    <img src="@/assets/images/home/banner_bg.png" class="w-100% block" />
                    <!-- <div class="absolute top-50% left-50% translate-x--50% translate-y--90%">
                        <div class="row">
                            <div class="text-[40px] font-bold text-[#fff]">童创空天</div>
                            <div class="text-[40px] font-bold text-[#fff] mt-14px">全国青少年空天科普成果展演活动</div>
                            <el-button
                                color="#fff"
                                round
                                size="large"
                                class="mt-100px w-140px h-48px! border-rd-40px! home-banner__text"
                            >
                                了解详情
                            </el-button>
                        </div>
                    </div> -->
                </el-carousel-item>
            </el-carousel>
        </div>

        <!-- 证书查询 -->
        <div class="home-entrance pt-100px">
            <div class="row">
                <el-row :gutter="80" class="w-1200px ml-auto! mr-auto!" justify="center">
                    <el-col :span="8">
                        <div class="flex flex-col justify-center items-center">
                            <img class="w-170px" src="@/assets/images/home/1.png" />
                            <el-button
                                type="primary"
                                round
                                size="large"
                                class="mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                            >
                                报名入口
                            </el-button>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="flex flex-col justify-center items-center">
                            <img class="w-170px" src="@/assets/images/home/2.png" />
                            <el-button
                                type="primary"
                                round
                                size="large"
                                class="mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                            >
                                参与活动
                            </el-button>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="flex flex-col justify-center items-center">
                            <img class="w-170px" src="@/assets/images/home/3.png" />
                            <el-button
                                type="primary"
                                round
                                size="large"
                                class="mt-20px w-240px h-60px! border-rd-40px! home-entrance__text"
                            >
                                证书查询
                            </el-button>
                        </div>
                    </el-col>
                </el-row>

                <div class="home-entrance__body relative w-1040px ml-auto! mr-auto! mt-100px pb-100px">
                    <img class="w-100% block" src="@/assets/images/home/bg_countdown.png" />

                    <div class="absolute top-0 left-0 w-100% h-100%">
                        <h4 class="text-[#01387F] font-bold text-[28px] pt-37px text-center">
                            2024年第七届全国青少年人工智能创新挑战赛-国赛
                        </h4>
                        <el-divider border-style="dashed" />

                        <div class="flex flex-items-center pl-30px pr-30px mt-80px">
                            <div class="flex-1">
                                <p class="mb-20px text-[#959db6] text-[14px]">
                                    <b class="text-[#07387f]">主办单位:</b>12312312
                                </p>
                                <p class="mb-20px text-[#999] text-[14px]">
                                    <b class="text-[#07387f]">举办时间:</b>12312312
                                </p>
                                <p class="mb-20px text-[#999] text-[14px]">
                                    <b class="text-[#07387f]">报名时间:</b>12312312
                                </p>
                                <p class="mb-20px text-[#999] text-[14px]">
                                    <b class="text-[#07387f]">参赛形式:</b>12312312
                                </p>
                                <p class="mb-20px text-[#999] text-[14px]">
                                    <b class="text-[#07387f]">举办地点:</b>12312312
                                </p>
                            </div>
                            <div class="flex-1 active-right">
                                <el-button color="#edf1ff">报名中</el-button>
                                <div class="mt-30px mb-30px">倒计时</div>
                                <div class="flex flex-itesm-center">
                                    <el-button color="#edf1ff">
                                        <img class="mr-10px w-14px" src="@/assets/images/home/fire.png" />
                                        已报名
                                        <sub class="relative top-2px text-[12px] pl-5px pr-5px">328/500</sub
                                        >人</el-button
                                    >
                                    <el-button color="#edf1ff">赛事规则</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 活动进度 -->
        <div class="home-progress pt-100px bg-[#fff]">
            <img class="w-100%" src="@/assets/images/home/head_bg_01.png" />
            <div class="home-progress__body bg-[#f4f6ff]">
                <div class="row">
                    <div class="flex items-center justify-center">
                        <img class="w-50px" src="@/assets/images/home/4.png" />
                        <b class="text-[50px] ml-16px mr-16px">活动进度</b>
                        <img class="w-50px" src="@/assets/images/home/5.png" />
                    </div>
                    <div class="mt-80px flex items-center justify-center">
                        <img class="w-1040px" src="@/assets/images/home/activity_progress.png" />
                    </div>
                </div>
            </div>
            <img class="w-100%" src="@/assets/images/home/head_bg_02.png" />
        </div>

        <!-- 赛项介绍 -->
        <div class="home-introduce bg-[#fff]">
            <div class="home-introduce__body pb-100px bg-[#fff]">
                <div class="row">
                    <div class="flex items-center justify-center">
                        <img class="w-50px" src="@/assets/images/home/4.png" />
                        <b class="text-[50px] ml-16px mr-16px">科普成果</b>
                        <img class="w-50px" src="@/assets/images/home/5.png" />
                    </div>

                    <el-row class="w-1200px ml-auto! mr-auto!" :gutter="80">
                        <el-col v-for="item in introduceData?.result" :key="item.id" :span="12">
                            <big-card :data="item" class="mt-80px" title="测试" icon="1"></big-card>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <img class="w-100%" src="@/assets/images/home/head_bg_03.png" />
        </div>

        <!-- 专家团队 -->
        <div class="home-specialist">
            <div class="home-specialist__body bg-[#E8F1FF]">
                <div class="flex items-center justify-center">
                    <img class="w-50px" src="@/assets/images/home/4.png" />
                    <b class="text-[50px] ml-16px mr-16px">专家团队</b>
                    <img class="w-50px" src="@/assets/images/home/5.png" />
                </div>
                <div class="pt-100px row">
                    <div class="flex justify-center" v-if="specialistData?.result">
                        <el-row class="w-1200px" :gutter="60">
                            <el-col
                                v-for="(item, index) in specialistData?.result.data"
                                :key="item.id"
                                class="mb-60px"
                                :span="8"
                            >
                                <image-text-card
                                    type="home"
                                    :title="item.author"
                                    :desc="item.content"
                                    :poster="item.cover"
                                />
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <img class="w-100%" src="@/assets/images/home/head_bg_04.png" />
        </div>

        <!-- 报名情况 -->
        <div class="home-apply">
            <div class="home-apply__body bg-[#F4F6FF]">
                <div class="row">
                    <div class="flex items-center justify-center">
                        <img class="w-50px" src="@/assets/images/home/4.png" />
                        <b class="text-[50px] ml-16px mr-16px">报名情况</b>
                        <img class="w-50px" src="@/assets/images/home/5.png" />
                    </div>
                    <div class="pt-100px pb-100px flex justify-center">
                        <el-row class="w-1040px h-500px box-border p-20px border-rd-24px home-apply__bg" :gutter="20">
                            <el-col :span="8">
                                <div>
                                    <div class="flex flex-items-center pt-30px pb-30px">
                                        <img class="w-30px" src="@/assets/images/home/icon_arrow.png" />
                                        <div class="text-[#4B78FF] text-[20px] flex-1 text-center">报名实时数据</div>
                                        <img class="w-30px rotate-180" src="@/assets/images/home/icon_arrow.png" />
                                    </div>
                                    <div class="h-340px overflow-y-auto scrollbar">
                                        <div
                                            v-for="item in 100"
                                            class="flex flex-items-center text-[12px] text-[#666] mb-12px"
                                        >
                                            <div>小米</div>
                                            <div class="pl-10px pr-10px flex-1">小xxxxx</div>
                                            <div>2024/02/24</div>
                                        </div>
                                    </div>
                                    <div class="text-[#333] pt-10px pb-10px text-center font-bold text-[12px]">
                                        截止08月20日 12:36:51 累计报名 <span class="text-[#4B78FF]">2222</span> 人
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div>
                                    <div class="flex flex-items-center pt-30px pb-30px">
                                        <img class="w-30px" src="@/assets/images/home/icon_arrow.png" />
                                        <div class="text-[#4B78FF] text-[20px] flex-1 text-center">地区排行榜</div>
                                        <img class="w-30px rotate-180" src="@/assets/images/home/icon_arrow.png" />
                                    </div>
                                    <div class="h-340px overflow-y-auto scrollbar">
                                        <div
                                            v-for="(item, index) in 100"
                                            class="flex flex-items-center text-[12px] text-[#666] mb-20px"
                                        >
                                            <div class="relative w-30px">
                                                <img class="w-30px" src="@/assets/images/home/icon_medal.png" alt="" />
                                                <div class="absolute top-44% w-100% text-center text-[red] text-[14px]">
                                                    {{ index + 1 }}
                                                </div>
                                            </div>
                                            <div class="flex-1 pl-12px box-border">
                                                <div class="relative">
                                                    <img
                                                        class="w-14px absolute left-0 top-2px"
                                                        src="@/assets/images/home/icon_positioning.png"
                                                        alt=""
                                                    />
                                                    <b class="font-bold text-[20px] pl-24px">成都市</b>
                                                </div>
                                                <div class="mt-10px flex flex-items-center justify-between">
                                                    <div class="flex flex-items-center">
                                                        <img
                                                            class="w-14px"
                                                            src="@/assets/images/home/icon_application.png"
                                                            alt=""
                                                        />
                                                        <div class="pl-10px text-[12px] text-[#959DB6]">报名 686</div>
                                                    </div>
                                                    <div class="flex flex-items-center">
                                                        <img
                                                            class="w-14px"
                                                            src="@/assets/images/home/icon_promotion.png"
                                                            alt=""
                                                        />
                                                        <div class="pl-10px text-[12px] text-[#959DB6]">晋级----</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="text-[#333] pt-10px pb-10px text-center font-bold text-[12px] opacity-0"
                                    >
                                        &nbsp;
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div>
                                    <div class="flex flex-items-center pt-30px pb-30px">
                                        <img class="w-30px" src="@/assets/images/home/icon_arrow.png" />
                                        <div class="text-[#4B78FF] text-[20px] flex-1 text-center">学校排行榜</div>
                                        <img class="w-30px rotate-180" src="@/assets/images/home/icon_arrow.png" />
                                    </div>
                                    <div class="h-340px overflow-y-auto scrollbar">
                                        <div
                                            v-for="(item, index) in 100"
                                            class="flex flex-items-center text-[12px] text-[#666] mb-20px"
                                        >
                                            <div class="relative w-30px">
                                                <img class="w-30px" src="@/assets/images/home/icon_medal.png" alt="" />
                                                <div class="absolute top-44% w-100% text-center text-[red] text-[14px]">
                                                    {{ index + 1 }}
                                                </div>
                                            </div>
                                            <div class="flex-1 pl-12px box-border">
                                                <div class="relative">
                                                    <img
                                                        class="w-14px absolute left-0 top-2px"
                                                        src="@/assets/images/home/icon_positioning.png"
                                                        alt=""
                                                    />
                                                    <b class="font-bold text-[20px] pl-24px">成都市</b>
                                                </div>
                                                <div class="mt-10px flex flex-items-center justify-between">
                                                    <div class="flex flex-items-center">
                                                        <img
                                                            class="w-14px"
                                                            src="@/assets/images/home/icon_application.png"
                                                            alt=""
                                                        />
                                                        <div class="pl-10px text-[12px] text-[#959DB6]">报名 686</div>
                                                    </div>
                                                    <div class="flex flex-items-center">
                                                        <img
                                                            class="w-14px"
                                                            src="@/assets/images/home/icon_promotion.png"
                                                            alt=""
                                                        />
                                                        <div class="pl-10px text-[12px] text-[#959DB6]">晋级----</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="text-[#333] pt-10px pb-10px text-center font-bold text-[12px] opacity-0"
                                    >
                                        &nbsp;
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// .card2 {
//     position: relative;
//     width: 200px;
//     height: 200px;
//     border-radius: 14px;
//     z-index: 1111;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
//     border-radius: 50%;
// }

// .bg {
//     position: absolute;
//     top: 5px;
//     left: 5px;
//     width: 190px;
//     height: 190px;
//     z-index: 2;
//     background: rgba(255, 255, 255, 0.95);
//     backdrop-filter: blur(24px);
//     border-radius: 10px;
//     overflow: hidden;
//     outline: 2px solid white;
//     border-radius: 50%;
// }

// .blob {
//     position: absolute;
//     z-index: 1;
//     top: 50%;
//     left: 50%;
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//     background-color: #337ff7;
//     opacity: 1;
//     filter: blur(12px);
//     animation: blob-bounce 1s infinite linear;
// }

@keyframes blob-bounce {
    0% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
        transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
        transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
        transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
}
@keyframes shake {
    0% {
        transform: scale(1) rotate(0deg);
    }
    100% {
        transform: scale(1.1) rotate(360deg);
    }
}
.home {
    &-banner {
        :deep(.el-carousel) {
            @apply bg-[#fff];
        }
        &__poster {
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        &__text {
            :deep(span) {
                @apply text-[16px];
            }
        }
    }
    &-entrance {
        @apply bg-[#fff];
        &__text {
            :deep(span) {
                @apply text-[20px] font-bold;
            }
        }
        &__body {
        }
        .active-right {
            :deep(.el-button) {
                @apply text-[#183CA7];
            }
        }
    }
    &-apply {
        &__bg {
            background: linear-gradient(180deg, #49b3f3 0%, #4b78ff 99%), #4b78ff;
            :deep(.el-col) {
                & > div {
                    @apply bg-[#fff] border-rd-20px pl-12px pr-12px;
                    border: 2px solid #d4e1ff2e;
                }
            }
        }
    }
}
</style>
