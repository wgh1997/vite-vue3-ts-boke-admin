<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="header">
      <div>
        <menu-unfold-outlined
          v-if="main.collapsed"
          class="trigger"
          @click="main.setCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="main.setCollapsed" />
      </div>
      <div class="username">{{ main?.info?.username }}</div>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { useMainStore } from "@/store/mian";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    const main = useMainStore();
    return {
      main,
    };
  },
});
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .username {
    margin-right: 20px;
  }
}
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
