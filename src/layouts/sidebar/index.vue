<template>
  <a-layout-sider v-model:collapsed="main.collapsed" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item
        v-for="item in routerList"
        :key="item.path"
        @click="onJump(item)"
      >
        <file-outlined />
        <span>{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { useRoute, useRouter } from "vue-router";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, ref, toRaw } from "vue";
import routerlist from "@/router/index";
import { useMainStore } from "@/store/mian";
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },

  setup() {
    const main = useMainStore();
    const route = useRoute();
    const { options } = routerlist;
    const selectedKeys = ref<string[]>([route.path]);
    const router = useRouter();
    let routerList: any[] = [];
    options.routes.forEach((element: any) => {
      if (element.meta.sidebar) {
        routerList = [...element.children, ...routerList];
      }
    });
    const onJump = (item: any): void => {
      router.push(item.path);
      selectedKeys.value = [item.path];
    };
    return {
      selectedKeys,
      routerList,
      onJump,
      main,
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
