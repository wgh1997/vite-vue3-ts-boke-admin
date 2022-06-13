import { defineStore } from "pinia";
import { getInfo } from "@/api/login/index";
import { typesInfo } from "./types";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    info: <typesInfo>{},
    collapsed: <boolean>true,
  }),
  // 计算属性
  getters: {
    // nameLength: (state) => state.name.length,
  },
  // 可以做异步
  actions: {
    async actionsInfo() {
      const { data } = await getInfo();
      this.info = data;
    },
    setCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
});
