<script lang="ts" setup>
const route = process.client ? useRoute() : {}
const router = process.client ? useRouter() : {}

const tab = ref(0)

const formData = ref(getDefaultFormData())
const rules = reactive({
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
})
const handleTabChange = (index: number) => {
  tab.value = index
}

const handleLogin = () => {}
const handleRegister = () => {}

function getDefaultFormData() {
  return {
    phone: void 0,
    password: void 0,
    code: void 0,
  }
}
</script>

<template>
  <div class="login w-100vw h-100vh flex items-center justify-center">
    <el-card class="w-80%">
      <el-row>
        <el-col :span="7">
          <div class="login-left">
            <img class="w-100%" src="@/assets/images/login/bg.png">
            <img class="logo" src="@/assets/images/login/logo.png">
            <img class="pic" src="@/assets/images/login/pic.png">
          </div>
        </el-col>
        <el-col :span="14" class="h-100% relative">
          <div class="login-right">
            <div class="login-right__tab">
              <div :class="{ on: tab === 0 }" @click="handleTabChange(0)">
                个人
              </div>
              <div :class="{ on: tab === 1 }" @click="handleTabChange(1)">
                单位
              </div>
            </div>
            <div class="login-right__content w-400px ml-auto mr-auto">
              <el-form
                ref="formRef"
                :model="formData"
                :rules="rules"
                label-width="auto"
                status-icon
              >
                <el-form-item prop="phone">
                  <el-input v-model="formData.phone" size="large" placeholder="手机号" />
                </el-form-item>
                <el-form-item prop="password">
                  <el-input v-model="formData.password" size="large" type-="password" placeholder="密码" />
                </el-form-item>
                <el-form-item prop="code">
                  <el-input v-model="formData.code" size="large" placeholder="验证码" />
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="handleLogin">
                    登录
                  </el-button>
                  <el-button @click="handleRegister">
                    注册
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="flex items-center justify-center">
              登录即代表您已阅读并同意<el-button link type="primary">
                《用户手册》
              </el-button>和<el-button link type="primary">
                《隐私政策》
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.login {
  :deep(.el-card__body) {
    padding: 0;
  }
  &-left {
    @apply relative;
    .logo {
      @apply absolute left-20px top-20px w-180px;
    }
    .pic {
      @apply absolute left-50% top-50% w-500px;
      transform: translate(-50%, -50%);
    }
  }
  &-right {
    &__tab {
      @apply mt-50px mb-50px flex justify-center items-center;
      & > div {
        @apply text-[20px] font-bold text-[var(--sky-title)] pb-10px pl-10px pr-10px mr-40px cursor-pointer hover:opacity-80;
        border-bottom: 3px solid transparent;
        transition: all .3s;
        &.on, &:hover {
          border-bottom: 3px solid var(--sky-primary);
        }
      }

    }
    :deep(.el-input) {
      .el-input__wrapper{
        @apply bg-[#f9f9fb] text-[#989A9C] border-none;
        box-shadow:none;
      }
    }
  }
}
</style>
