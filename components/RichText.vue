<script lang="ts" setup>
interface Props {
  [propName: string]: any
}
interface Emits {
  (eventName: 'string', data: any): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <article class="pb-20px pt-0">
    <div class="flex rich-text">
      <div class="flex-1 rich-text__content bg-[#fff] p-20px border-rd-10px">
        <h2 class="text-26px text-center" style="line-height: 40px;">
          世界机器人大赛2022总决赛
        </h2>
        <div class="text-[#9b9b9b] pt-10px pb-20px text-13px flex flex-items-center justify-center">
          <span class="text-[#959DB6] text-[12px]">发表时间：2023-03-04 12:52:31</span>
          <span class="text-[#959DB6] text-[12px] ml-30px">浏览量：2585</span>
        </div>
        <div>
          <img src="@/assets/images/banner.png" alt="">
          新华社布宜诺斯艾利斯12月2日电 12月1日，国家主席习近平就美国前总统乔治·布什逝世向美国总统特朗普致唁电。习近平代表中国政府和中国人民，并以个人的名义，对乔治·布什前总统逝世表示深切的哀悼，向其家庭全体成员表示诚挚的慰问。

          习近平在唁电中表示，乔治·布什前总统是中国人民的老朋友，40多年来见证并推动中美关系取得历史性发展，为两国人民友好事业作出了积极贡献。中国人民对此不会忘记。

          新华社布宜诺斯艾利斯12月2日电 12月1日，国家主席习近平就美国前总统乔治·布什逝世向美国总统特朗普致唁电。习近平代表中国政府和中国人民，并以个人的名义，对乔治·布什前总统逝世表示深切的哀悼，向其家庭全体成员表示诚挚的慰问。

          习近平在唁电中表示，乔治·布什前总统是中国人民的老朋友，40多年来见证并推动中美关系取得历史性发展，为两国人民友好事业作出了积极贡献。中国人民对此不会忘记。

          习近平强调，长期以来，在两国领导人和两国人民共同努力下，中美关系不断前行，为两国人民和各国人民都带来了福祉。我高度重视中美关系，愿同总统先生一道，努力推动两国关系沿着正确轨道继续向前发展。

          习近平强调，长期以来，在两国领导人和两国人民共同努力下，中美关系不断前行，为两国人民和各国人民都带来了福祉。我高度重视中美关系，愿同总统先生一道，努力推动两国关系沿着正确轨道继续向前发展。
        </div>
      </div>
      <div class="w-300px ml-20px rich-text__file">
        <el-card style="max-width: 480px">
          <template #header>
            <div class="card-header">
              <span class="text-[#959DB6] text-[14px]">附件下载：</span>
            </div>
          </template>

          <div v-for="o in 4" :key="o" class="mt-12px rich-text__file-item">
            <el-link type="primary">
              {{ `List item ${o}` }}
            </el-link>
          </div>
        </el-card>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.rich-text{
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
      &-item {
        &:first-child {
          @apply mt-0;
        }
      }
    }
}
</style>
