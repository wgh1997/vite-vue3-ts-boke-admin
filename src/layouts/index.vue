<template>
  <a-layout>
    <Sideba></Sideba>
    <a-layout>
      <Header></Header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <!-- <router-view v-slot="{ Component }">
          <keep-alive :include="route.meta.keepAlive ? '' : []">
            <component :is="Component" class="component" />
          </keep-alive>
        </router-view> -->

        <router-view v-slot="{ Component }">
          <transition name="router-fade" mode="out-in">
            <keep-alive :include="route.meta.keepAlive ? '' : []">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Sideba from "./sidebar/index.vue";
import Header from "./header/index.vue";

import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getInfo } from "../api/login/index";
import { useMainStore } from "@/store/mian";

export default defineComponent({
  components: {
    Sideba,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
  },

  setup() {
    const route = useRoute();
    onMounted(() => {
      const main = useMainStore();
      main.actionsInfo();
    });
    return {
      route,
    };
  },
});
</script>
<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
.ant-layout {
  height: 100vh;
}
.site-layout .site-layout-background {
  background: #fff;
}
</style>
