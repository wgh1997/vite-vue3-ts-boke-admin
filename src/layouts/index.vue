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
        <router-view v-slot="{ Component }">
          <keep-alive :include="$route.meta.keepAlive ? '' : []">
            <component :is="Component" class="component" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Sideba from "./sidebar/index.vue";
import Header from "./header/index.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Sideba,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
  },

  setup() {
    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
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
