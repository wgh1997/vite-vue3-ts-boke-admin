import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    name: "超级管理员",
  }),
  // 计算属性
  getters: {
    nameLength: (state) => state.name.length,
  },
  // 可以做异步
  actions: {
    async insertPost(data: string) {
      // await doAjaxRequest(data);
      this.name = data;
    },
  },
});
