<template>
  <div class="login">
    <div class="login-box">
      <div id="owl" :class="{ password: isActive }" class="owl">
        <div class="hand"></div>
        <div class="hand hand-r"></div>
        <div class="arms">
          <div class="arm"></div>
          <div class="arm arm-r"></div>
        </div>
      </div>
      <div class="input-box">
        <input v-model="login.username" type="text" placeholder="账号" />
        <input
          id="password"
          v-model="login.password"
          type="password"
          placeholder="密码"
          @focus="onfocus"
          @blur="onblur"
        />
        <div class="code">
          <input v-model="login.code" type="text" placeholder="验证码" />
          <img :src="captchaImg" alt="" @click="ongetCaptcha" />
        </div>
        <button @click="onLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref, onMounted, Ref } from "vue";
import { useRouter } from "vue-router";
import { postLogin, getCaptcha } from "../../api/login/index";
export default defineComponent({
  setup() {
    const router = useRouter();
    const isActive = ref(false);
    const captchaImg: Ref<string> = ref("");

    interface Login {
      username: string;
      password: string;
      code: string;
    }
    const login: Login = reactive({
      username: "",
      password: "",
      code: "",
    });
    const onLogin = (): void => {
      // console.log(login);
      postLogin(login).then((result: any) => {
        const { code } = result;
        // eslint-disable-next-line prettier/prettier
        if (code === 0) {
          router.push("/");
        } else {
          ongetCaptcha();
        }
      });
      // router.push("/");
    };
    const onfocus = () => {
      isActive.value = true;
    };
    const onblur = () => {
      isActive.value = false;
    };
    const ongetCaptcha = (): void => {
      getCaptcha().then((res: any): void => {
        if (res.code === 0) {
          captchaImg.value = res.data;
        }
      });
    };
    onMounted(() => {
      ongetCaptcha();
    });
    return {
      isActive,
      onLogin,
      login,
      onfocus,
      onblur,
      captchaImg,
      ongetCaptcha,
    };
  },
});
</script>

<style scoped lang="less">
.login {
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(200deg, #72afd3, #96fbc4);
}
.code {
  display: flex;
  input {
    width: 198px;
  }
  img {
    margin-left: 5px;
    height: 40px;
  }
}
.login-box {
  /* 相对定位 */
  position: relative;
  width: 320px;
}
.input-box {
  /* 弹性布局 垂直排列 */
  display: flex;
  flex-direction: column;
}
.input-box input {
  height: 40px;
  border-radius: 3px;
  /* 缩进15像素 */
  text-indent: 15px;
  outline: none;
  border: none;
  margin-bottom: 15px;
}
.input-box input:focus {
  outline: 1px solid lightseagreen;
}
.input-box button {
  border: none;
  height: 45px;
  background-color: lightseagreen;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}
/* 接下来是猫头鹰的样式 */
.owl {
  width: 211px;
  height: 108px;
  /* 背景图片 */
  background: url("../../assets/images/owl-login.png") no-repeat;
  /* 绝对定位 */
  position: absolute;
  top: -100px;
  /* 水平居中 */
  left: 50%;
  transform: translateX(-50%);
}
.owl .hand {
  width: 34px;
  height: 34px;
  border-radius: 40px;
  background-color: #472d20;
  /* 绝对定位 */
  position: absolute;
  left: 12px;
  bottom: -8px;
  /* 沿Y轴缩放0.6倍（压扁） */
  transform: scaleY(0.6);
  /* 动画过渡 */
  transition: 0.3s ease-out;
}
.owl .hand.hand-r {
  left: 170px;
}
.owl.password .hand {
  transform: translateX(42px) translateY(-15px) scale(0.7);
}
.owl.password .hand.hand-r {
  transform: translateX(-42px) translateY(-15px) scale(0.7);
}
.owl .arms {
  position: absolute;
  top: 58px;
  width: 100%;
  height: 41px;
  overflow: hidden;
}
.owl .arms .arm {
  width: 40px;
  height: 65px;
  position: absolute;
  left: 20px;
  top: 40px;
  background: url("../../assets/images/owl-login-arm.png") no-repeat;
  transform: rotate(-20deg);
  transition: 0.3s ease-out;
}
.owl .arms .arm.arm-r {
  transform: rotate(20deg) scaleX(-1);
  left: 158px;
}
.owl.password .arms .arm {
  transform: translateY(-40px) translateX(40px);
}
.owl.password .arms .arm.arm-r {
  transform: translateY(-40px) translateX(-40px) scaleX(-1);
}
</style>
